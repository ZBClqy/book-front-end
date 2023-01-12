document.documentElement.style.fontSize = 15 * (document.body.offsetWidth / 1920) + 'px'
window.addEventListener('resize', () => {
  if (document.body.offsetWidth < 1350) {
    location.href = '/screen_error'
  }
  document.documentElement.style.fontSize = 15 * (document.body.offsetWidth / 1920) + 'px'
})
