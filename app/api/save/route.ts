import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: NextRequest) {
  const { email, keyword } = await req.json()

  const { data, error } = await supabase
    .from('news-digest')
    .insert([{ email, keyword }])

  if (error) {
    return NextResponse.json({ message: '오류가 발생했습니다.', error }, { status: 500 })
  }

  return NextResponse.json({ message: '키워드가 저장되었습니다!' })
}
