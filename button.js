let buttons = []
class Button {
  constructor(x, y, w, h, name, r) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.bw = Window.y/Sketch.buttons.bw
    this.name = name
    this.reason = r
    //looks
    this.bc = {r:Sketch.buttons.bc.r, g:Sketch.buttons.bc.g, b:Sketch.buttons.bc.b}
    this.tc = {r:Sketch.buttons.tc.r, g:Sketch.buttons.tc.g, b:Sketch.buttons.tc.b}
    this.lc = {r:Sketch.buttons.lc.r, g:Sketch.buttons.lc.g, b:Sketch.buttons.lc.b}
    buttons.push(this)
  }
  
  show() {
    push()
    noStroke()
    //borders
    fill(this.bc.r, this.bc.g, this.bc.b)
    rect(this.x, this.y, this.w, this.bw)
    circle(this.x, this.y+(1/2*this.bw), this.bw)
    circle(this.x+this.w, this.y+(1/2*this.bw), this.bw)
    rect(this.x, this.y+this.h, this.w, this.bw)
    circle(this.x, this.y+this.h+(1/2*this.bw), this.bw)
    circle(this.x+this.w, this.y+this.h+(1/2*this.bw), this.bw)
    rect(this.x-(1/2*this.bw), this.y+(1/2*this.bw), this.bw, this.h)
    rect(this.x+this.w-(1/2*this.bw), this.y+(1/2*this.bw), this.bw, this.h)
    
    //insides
    fill(this.tc.r, this.tc.g, this.tc.b)
    rect(this.x+(1/2*this.bw), this.y+this.bw, this.w-(1*this.bw), this.h-this.bw)
    textAlign(CENTER)
    textSize(this.h/2)
    fill(this.lc.r, this.lc.g, this.lc.b)
    text(this.name, this.x+(1/2*this.w), this.y+this.bw*1+this.h*3/5)
    pop()
  }
  
  pointed() {
    if(mouseX < this.x+this.w && mouseX > this.x && mouseY < this.y+this.h && mouseY > this.y) {
      if(this.reason != null) {
        this.reason()
      }
      return true
    }
  }
  
  highLight() {
    if(this.pointed()) {
      push()
      fill(Sketch.highlight.color.r, Sketch.highlight.color.g, Sketch.highlight.color.b, Sketch.highlight.effect)
      rect(this.x-this.bw/2, this.y, this.w+this.bw, this.h+this.bw)
      pop()
    }
  }
  
}
