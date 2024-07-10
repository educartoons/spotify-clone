function isAColor(str: string): boolean {
  const hexPattern = /^([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/
  return hexPattern.test(str)
}

function getColorFromURL(url: string): string {
  const chunks = url.split('/')
  const lastChunk = chunks[chunks.length - 1]
  const color = lastChunk.slice(0, 6)

  if (isAColor(color)) {
    return `#${color}`
  }

  return 'peru'
}

function getTracks(playlist: any) {
  console.log('Expensive Operation')
  return playlist?.tracks
}

export { getColorFromURL, getTracks, isAColor }
