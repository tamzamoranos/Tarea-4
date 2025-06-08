// Slider con BEM
class Slider {
  constructor() {
    this.slides = document.querySelectorAll('.slider__slide');
    this.controls = document.querySelectorAll('.slider__control');
    this.currentIndex = 0;
    this.interval = null;
    this.init();
  }

  init() {
    this.setupControls();
    this.startAutoSlide();
  }

  showSlide(index) {
    this.slides.forEach(slide => slide.classList.remove('slider__slide--active'));
    this.controls.forEach(control => control.classList.remove('slider__control--active'));
    
    this.slides[index].classList.add('slider__slide--active');
    this.controls[index].classList.add('slider__control--active');
    this.currentIndex = index;
  }

  nextSlide() {
    const nextIndex = (this.currentIndex + 1) % this.slides.length;
    this.showSlide(nextIndex);
  }

  startAutoSlide() {
    this.interval = setInterval(() => this.nextSlide(), 4000);
  }

  resetInterval() {
    clearInterval(this.interval);
    this.startAutoSlide();
  }

  setupControls() {
    this.controls.forEach(control => {
      control.addEventListener('click', () => {
        const index = parseInt(control.dataset.index);
        this.showSlide(index);
        this.resetInterval();
      });
    });
  }
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  new Slider();
});