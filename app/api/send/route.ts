import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getNewsByKeyword } from '../../../lib/rss';
import { sendDigest } from '../../../lib/mail';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET() {
  const { data, error } = await supabase.from('news-digest').select('*');
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  for (const row of data) {
    const { email, keyword } = row;
    const news = await getNewsByKeyword(keyword);
    if (news.length > 0) {
      await sendDigest(email, keyword, news);
    }
  }

  return NextResponse.json({ message: '📬 모든 유저에게 뉴스 발송 완료!' });
}
