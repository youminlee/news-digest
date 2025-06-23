import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { getNewsByKeyword } from '../../../lib/rss'
import { sendDigest } from '../../../lib/mail'

export async function GET() {
  const data = JSON.parse(fs.readFileSync('./data/users.json', 'utf8'))

  for (const email of Object.keys(data)) {
    for (const keyword of data[email]) {
      const news = await getNewsByKeyword(keyword)
      if (news?.length) {
        await sendDigest(email, keyword, news)
      }
    }
  }

  return NextResponse.json({ message: '모든 유저에게 뉴스 발송 완료!' })
}