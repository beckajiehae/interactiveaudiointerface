const keys = document.querySelectorAll('.key')

keys.forEach(key => {
  key.addEventListener('click', () => hitBar(key))
})

document.addEventListener('keydown', e => {
    if (e.repeat) return
    const key = e.key
  })

function hitBar(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = -1
  noteAudio.play()
  key.classList.add('active')
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}