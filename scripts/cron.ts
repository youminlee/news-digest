import cron from 'node-cron'
import fs from 'fs'
import { getNewsByKeyword } from '../lib/rss'
import { sendDigest } from '../lib/mail'

// 매일 아침 9시 실행
cron.schedule('0 9 * * *', async () => {
  console.log('[자동 실행] 뉴스 발송 시작')
  const data = JSON.parse(fs.readFileSync('./data/users.json', 'utf8'))

  for (const email of Object.keys(data)) {
    for (const keyword of data[email]) {
      const news = await getNewsByKeyword(keyword)
      if (news?.length) {
        await sendDigest(email, keyword, news)
        console.log(`✅ ${email} 에게 "${keyword}" 뉴스 발송 완료`)
      }
    }
  }
})

console.log('⏰ Cron 서비스 실행 중...') 