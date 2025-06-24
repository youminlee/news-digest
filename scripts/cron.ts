import cron from 'node-cron';
import { getNewsByKeyword } from '../lib/rss';
import { sendDigest } from '../lib/mail';
import { supabase } from '../lib/supabase';

cron.schedule('0 9 * * *', async () => {
  console.log('📢 [자동 실행] 뉴스 발송 시작');

  const { data, error } = await supabase.from('news-digest').select('*');

  if (error) {
    console.error('❌ Supabase에서 데이터 가져오기 실패:', error.message);
    return;
  }

  const grouped: Record<string, string[]> = {};

  for (const row of data || []) {
    if (!grouped[row.email]) grouped[row.email] = [];
    grouped[row.email].push(row.keyword);
  }

  for (const email of Object.keys(grouped)) {
    for (const keyword of grouped[email]) {
      const news = await getNewsByKeyword(keyword);
      if (news.length) {
        await sendDigest(email, keyword, news);
        console.log(`✅ ${email} 에게 "${keyword}" 뉴스 발송 완료`);
      }
    }
  }
});

console.log('🕐 Cron 서비스 실행 중...');