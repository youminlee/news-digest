import nodemailer from 'nodemailer'

export async function sendDigest(to: string, keyword: string, articles: any[]) {
  const html = `
    <h3>📬 NewsPin Digest – "${keyword}" 관련 뉴스</h3>
    <ul>
      ${articles.map(a => `
        <li>
          <a href="${a.link}">${a.title}</a><br/>
          <small>${a.summary}</small>
        </li>
      `).join('')}
    </ul>
  `

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  })

  await transporter.sendMail({
    from: '"NewsPin" <noreply@newspin.ai>',
    to,
    subject: `[뉴스요약] "${keyword}" 관련 주요 기사`,
    html
  })
}