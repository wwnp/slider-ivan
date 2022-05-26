import "./css/index.css"
import "./css/bootstrap.css"
import sliders from './modules/sliders';
window.addEventListener('DOMContentLoaded', () => {
  sliders('.feedback-slider-item', '.main-prev-btn', '.main-next-btn')
})