// Define core variables on page load
const checkForWeebShit = (stringyThing) => {
  const regexp = new RegExp('\\b' + 'Anime' + '\\b')
  return regexp.test(stringyThing)
}

const hideWeebShit = (video) => {
  console.log('we weebing')
  const ultraNormyImage = document.createElement('img');
  ultraNormyImage.src = 'https://cdn.shopify.com/s/files/1/0864/4974/articles/how-to-trim-header.jpg';
  ultraNormyImage.classList.add('💦')
  video.after(ultraNormyImage)
}

const pollTimer = setInterval(() => {
  console.count('Polled')
  const video = document.querySelector('.html5-video-player .video-stream')
  const videoTitle = document.querySelector('h1.title .ytd-video-primary-info-renderer')

  if (video && videoTitle) {
    clearTimeout(pollTimer)
    if (checkForWeebShit(videoTitle.innerHTML)) {
      hideWeebShit(video)
    }
  }
}, 100)
