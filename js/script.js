class Slider {
  constructor(obj) {
    this.slider = document.querySelector(obj.name)
    this.sliderLine = this.slider.querySelector('.slider__line')
    this.images = this.sliderLine.children
    for (let i = 0; i < this.slider.childNodes.length; i++) {
      const element = this.slider.childNodes[i];
      if (element.tagName == 'BUTTON') {
        element.setAttribute('id','prev')
        element.nextSibling.setAttribute('id','next')
        element.classList == "" ? element.classList = 'prev':element.classList =element.classList
        element.nextSibling.classList == "" ? element.nextSibling.classList = 'next':element.nextSibling.classList =element.classList
        element.innerHTML == ""? element.classList += ' fas fa-arrow-left':element.innerHTML = element.innerHTML
        element.nextSibling.innerHTML == ""? element.nextSibling.classList += ' fas fa-arrow-right':element.innerHTML = element.innerHTML
        break;
      }
    }
    this.next = this.slider.querySelector("#next")
    this.prev = this.slider.querySelector("#prev")
    this.sliderLine.style.height = this.maxHeight() + 'px'
    this.transition = obj.transition ? obj.transition < 500 ? 500 : obj.transition : 500
    this.styleTransition = this.transition + 'ms'
    this.active = 0
    this.direction = obj.direction == 'x' || obj.direction == 'y' || obj.direction == 'X' || obj.direction == 'Y' ? obj.direction.toUpperCase() : 'X'
    this.moveDistance = this.direction == "X" ? this.maxWidth() + 'px' : this.maxHeight() + 'px'
    this.autoPlay = obj.autoPlay ? true : false
    this.autoPlayTime = obj.autoPlayTime ? obj.autoPlayTime < 3000 ? 3000 : obj.autoPlayTime : 5000
    for (let i = 0; i < this.images.length; i++) {
      const img = this.images[i];
      if (i !== this.active) {
        img.style = `
      transform:translate${this.direction}(${this.moveDistance});
      `
      }
    }
    if (this.autoPlay) { this.autoMove() }
    if (obj.button) {
      if (!this.next && !this.prev) {
        this.createBtn()
      }
    }
    this.next.addEventListener('click', () => this.btnClick(this.next))
    this.prev.addEventListener('click', () => this.btnClick(this.prev))
    this.prev.addEventListener('mouseover', () => this.moveDebug('-'))
    this.next.addEventListener('mouseover', () => this.moveDebug(''))
  }

  createBtn() {
    this.next = document.createElement('button')
    this.prev = document.createElement('button')
    this.next.className = 'next fas fa-arrow-right'
    this.next.setAttribute('id','next')
    this.prev.className = 'prev fas fa-arrow-left'
    this.prev.setAttribute('id','prev')
    for (let i = 0; i < document.body.children.length; i++) {
      const element = document.body.children[i];
      if (!element.button && !element.next && !element.prev && element.classList.contains("slider")) {
        this.slider.append(this.next)
        this.slider.append(this.prev)
      }
    }
  }

  btnClick(btn) {
    if (btn === this.next) {
      this.move(this.next, '')
    } else {
      this.move(this.prev, '-')
    }
    this.btnDisable([this.prev, this.next])
    clearInterval(this.interval);
    setTimeout(this.autoMove(), this.autoPlayTime * 2);
  }

  autoMove() {
    this.interval = setInterval(() => {
      this.move(this.next, '');
      this.btnDisable([this.prev, this.next]);
    }, this.autoPlayTime);

  }
  maxHeight() {
    let maxHeight = 0;
    for (let i = 0; i < this.images.length; i++) {
      const img = this.images[i];
      maxHeight = img.clientHeight > maxHeight ? img.clientHeight : maxHeight
    }
    return maxHeight;
  }
  maxWidth() {
    let maxWidth = 0;
    for (let i = 0; i < this.images.length; i++) {
      const img = this.images[i];
      maxWidth = img.clientWidth > maxWidth ? img.clientWidth : maxWidth
    }
    return maxWidth;
  }
  btnDisable(btns) {

    for (let i = 0; i < btns.length; i++) {
      const btn = btns[i];
      btn.disabled = true;
      setTimeout(() => {
        btn.disabled = false
      }, this.transition);
    }
  }
  moveDebug(to) {
    for (let i = 0; i < this.images.length; i++) {
      const img = this.images[i];
      if (i !== this.active) {
        img.style = `
        transform:translate${this.direction}(${to}${this.moveDistance});
        transition:none;
        `
      }
    }
  }

  move(btn, to) {
    let out = to == "-" ? "" : '-';
    for (let i = 0; i < this.images.length; i++) {
      const img = this.images[i];
      if (i !== this.active) {
        img.style = `
        transform:translate${this.direction}(${to}${this.moveDistance});
        transition:none;
        `
      }
    }
    this.images[this.active].style = `transform:translate${this.direction}(${out}${this.moveDistance});
    transition:${this.styleTransition};
    `
    if (btn === this.next) {
      this.active++
    } else {
      this.active--
    }
    if (this.active == -1) {
      this.active = this.images.length - 1
    }
    if (this.active == this.images.length) {
      this.active = 0
    }
    this.images[this.active].style = `transform:translate${this.direction}(0px);
    transition:${this.styleTransition};
    `
  }
}


const slider = new Slider({
  name: '#slider',
  direction: 'x',
  transition: 500,
  autoPlay: true,
  autoPlayTime: 3000,
  button: true
})
// const slider2 = new Slider({
//   name: '#slider2',
//   direction: 'x',
//   transition: 2000
// })
// const slider3 = new Slider({
//   name: '#slider3',
//   direction: 'y',
//   transition: 1000
// })
// const slider4 = new Slider({
//   name: '#slider4'
// })