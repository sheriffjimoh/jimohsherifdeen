

export function getReadTime({ content  }: {content : [{content : [{value : string}]}]}) {

    const getALLTextOut = content.map(({ content} : any ) => {
        return content.map(({ value } : any) => value).join('')
      })
    
  const allText = getALLTextOut.join('')
  const wordsPerMinute = 200
  const numberOfWords = allText.split(/\s/g).length
  const minutes = numberOfWords / wordsPerMinute
  const readTime = Math.ceil(minutes)
  return readTime+ ' min read'
}