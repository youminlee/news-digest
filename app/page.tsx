'use client'
import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [keyword, setKeyword] = useState('')
  const [msg, setMsg] = useState('')

  const handleSave = async () => {
    const res = await fetch('/api/save', {
      method: 'POST',
      body: JSON.stringify({ email, keyword }),
    })
    const data = await res.json()
    setMsg(data.message)
  }

  return (
    <main className="max-w-xl mx-auto p-10">
      <h1 className="text-2xl font-bold mb-4">📩 NewsPin Digest</h1>
      <p className="mb-6 text-gray-600">관심 키워드를 등록하면 뉴스 요약을 메일로 보내드립니다.</p>
      <input placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} className="border w-full p-2 mb-2" />
      <input placeholder="키워드 (예: 생성형 AI)" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="border w-full p-2 mb-4" />
      <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded">등록하기</button>
      {msg && <p className="mt-4 text-green-600">{msg}</p>}
    </main>
  )
}