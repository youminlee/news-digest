import Parser from 'rss-parser'
const parser = new Parser()

export async function getNewsByKeyword(keyword: string) {
  const url = `https://news.google.com/rss/search?q=${encodeURIComponent(keyword)}&hl=ko&gl=KR&ceid=KR:ko`
  const feed = await parser.parseURL(url)

  return feed.items?.slice(0, 3).map(item => ({
    title: item.title,
    link: item.link,
    summary: item.contentSnippet || ''
  }))
}