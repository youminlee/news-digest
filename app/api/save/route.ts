import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(req: NextRequest) {
  const { email, keyword } = await req.json()
  const filePath = path.resolve('./data/users.json')

  let data = {}
  if (fs.existsSync(filePath)) {
    data = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  }

  if (!data[email]) data[email] = []
  if (!data[email].includes(keyword)) data[email].push(keyword)

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
  return NextResponse.json({ message: '키워드가 저장되었습니다!' })
}