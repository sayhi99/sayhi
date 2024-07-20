const lerp = (a, b, n) => (1 - n) * a + n * b;
const getMousePos = (e) => {
  let posx = 0,
      posy = 0;
  
  if (!e) e = window.event;
  if (e.pageX || e.pageY) {
      posx = e.pageX;
      posy = e.pageY;
  }
  else if (e.clientX || e.clientY) {
      posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
      posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
  }
  return { x: posx, y: posy };
}

class Cursor {
  constructor(el, amt = 1) {
    this.DOM = {el: el};
    this.amt = amt;
    this.bounds = this.DOM.el.getBoundingClientRect();
    this.styles = {
      tx: {prev: 0, now: 0},
      ty: {prev: 0, now: 0}
    };
    this.onMouseMoveEv = () => {
      this.styles.tx.prev = this.styles.tx.now = mousepos.x - this.bounds.width / 2;
      this.styles.ty.prev = this.styles.ty.now = mousepos.y - this.bounds.height / 2;
      this.render();
      window.removeEventListener('mousemove', this.onMouseMoveEv);
    };
    window.addEventListener('mousemove', this.onMouseMoveEv);
  }
  render() {
    this.styles.tx.now = mousepos.x - this.bounds.width / 2;
    this.styles.ty.now = mousepos.y - this.bounds.height / 2;
    for (const key in this.styles) {
      this.styles[key].prev = lerp(
        this.styles[key].prev,
        this.styles[key].now,
        this.amt);
    }
    this.DOM.el.style.transform = `
      translateX(${this.styles.tx.prev}px)
      translateY(${this.styles.ty.prev}px)`;
    requestAnimationFrame(() => this.render());
  }
}

let mousepos = { x: 0, y: 0 };
document.addEventListener('mousemove', ev => mousepos = getMousePos(ev));

// --------------------------
const point = new Cursor(document.querySelector('.cursor__point'), 0.2);
const circle = new Cursor(document.querySelector('.cursor__circle'), 0.12);


