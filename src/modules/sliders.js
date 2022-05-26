const sliders = (slideSelector, prevSelector, nextSelector) => {
  let slideIndex = 0
  const items = document.querySelectorAll(slideSelector)
  const prev = document.querySelector(prevSelector)
  const next = document.querySelector(nextSelector)

  function showSlides(index) {
    if (index > items.length - 1) {
      slideIndex = 0
    }
    if (index < 0) {
      slideIndex = items.length - 1
    }
    items.forEach(item => {
      item.style.display = 'none'
    })

    items[slideIndex].style.display = 'block'
  }
  function changeSlides(n) {
    showSlides(slideIndex += n)
  }

  showSlides(slideIndex)

  console.log(prev)
  prev.addEventListener('click', () => {
    changeSlides(-1)
  })
  next.addEventListener('click', () => {
    changeSlides(1)
  })
}
export default sliders