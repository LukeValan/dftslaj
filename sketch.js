let Window = {x:600, y:400}
let cnv;

let tab = 1
let page = 0
let nextButton;
let backButton;
let droughtButton;
let floodButton;
let tsunamiButton;
let homeButton;
let pageButton1;
let pageButton2;
let pageButton3;
let pageButton4;
let l1b, l2b, l3b, l4b, l5b, l6b, l7b, l8b, l9b, l10b, l11b, l12b;
let ls = []

function preload() {
  for(let i = 0; i<Data.droughts.Pictures.length; i++) {
    let img = Data.droughts.Pictures[i].a
    Data.droughts.Pictures[i].a = loadImage(img)
  }
  for(let i = 0; i<Data.floods.Pictures.length; i++) {
    let img = Data.floods.Pictures[i].a
    Data.floods.Pictures[i].a = loadImage(img)
  }
  for(let i = 0; i<Data.tsunamis.Pictures.length; i++) {
    let img = Data.tsunamis.Pictures[i].a
    Data.tsunamis.Pictures[i].a = loadImage(img)
  }
  for(let i = 0; i<Data.home.Pictures.length; i++) {
    let img = Data.home.Pictures[i].a
    Data.home.Pictures[i].a = loadImage(img)
  }
  
}

function setup() {
    Window.x = windowWidth
    Window.y = windowHeight
    cnv = createCanvas(Window.x, Window.y);
    cnv.mouseClicked(clicks)
    textFont("monospace")

    droughtButton = new Button(n(10), n(10, "Y"), n(40), n(25, "Y"), "Droughts")
    tsunamiButton = new Button(n(60), n(10, "Y"), n(40), n(25, "Y"), "Tsunamis")
    floodButton = new Button(n(110), n(10, "Y"), n(40), n(25, "Y"), "Floods")
    homeButton = new Button(n(354), n(10, "Y"), n(38), n(25, "Y"), "Home")

    backButton = new Button(n(190), n(15, "Y"), n(10), n(15, "Y"), "<")
    backButton.bw = Window.y/150
    pageButton1 = new Button(n(205), n(10, "Y"), n(15), n(25, "Y"), "1")
    pageButton2 = new Button(n(225), n(10, "Y"), n(15), n(25, "Y"), "2")
    pageButton3 = new Button(n(245), n(10, "Y"), n(15), n(25, "Y"), "3")
    pageButton4 = new Button(n(265), n(10, "Y"), n(15), n(25, "Y"), "4")
    nextButton = new Button(n(285), n(15, "Y"), n(10), n(15, "Y"), ">")
    nextButton.bw = Window.y/150
    
    l1b = new Button(n(310), n(75, "Y"), n(85), n(25, "Y"))
  l2b = new Button(n(310), n(100, "Y"), n(85), n(25, "Y"))
  l3b = new Button(n(310), n(125, "Y"), n(85), n(25, "Y"))
  l4b = new Button(n(310), n(150, "Y"), n(85), n(25, "Y"))
  l5b = new Button(n(310), n(175, "Y"), n(85), n(25, "Y"))
    l6b = new Button(n(310), n(200, "Y"), n(85), n(25, "Y"))
    l7b = new Button(n(310), n(225, "Y"), n(85), n(25, "Y"))
    l8b = new Button(n(310), n(250, "Y"), n(85), n(25, "Y"))
    l9b = new Button(n(310), n(275, "Y"), n(85), n(25, "Y"))
    l10b = new Button(n(310), n(300, "Y"), n(85), n(25, "Y"))
  l11b = new Button(n(310), n(325, "Y"), n(85), n(25, "Y"))
  l12b = new Button(n(310), n(350, "Y"), n(85), n(25, "Y"))
  ls.push(l1b)
  ls.push(l2b)
  ls.push(l3b)
  ls.push(l4b)
  ls.push(l5b)
  ls.push(l6b)
  ls.push(l7b)
  ls.push(l8b)
  ls.push(l9b)
  ls.push(l10b)
  ls.push(l11b)
  ls.push(l12b)
}

function draw() {
  noStroke()
   background(Sketch.bg.r,Sketch.bg.g,Sketch.bg.b );
   stroke(Sketch.tables.sc.r, Sketch.tables.sc.g, Sketch.tables.sc.b)
   fill(Sketch.tables.fc.r, Sketch.tables.fc.g, Sketch.tables.fc.b, Sketch.tables.fc.a)
   rect(n(5), n(5, "Y"), n(150), n(40, "Y"))
   rect(n(395), n(5, "Y"), n(-65), n(40, "Y"))
   rect(n(185), n(5, "Y"), n(115), n(40, "Y"))
   rect(n(202+(page*20)), n(5, "Y"), n(21), n(40, "Y"))
   if(tab>0) {
    rect(n(5+(tab*50)-50), n(5, "Y"), n(50), n(40, "Y"))
   }else {
    rect(n(350), n(5, "Y"), n(45), n(40, "Y"))
   }
   rect(n(5), n(50, "Y"), n(390), n(25, "Y"))
   rect(n(5), n(50, "Y"), n(390), n(345, "Y"))
   rect(n(5), n(50, "Y"), n(305), n(345, "Y"))
   push()
   strokeWeight(3)
   line(n(194), n(51, "Y"), n(194), n(394, "Y"))
   line(n(310), n(51, "Y"), n(310), n(394, "Y"))
   pop()
   push()
   noStroke()
   fill(Sketch.headers.r, Sketch.headers.g, Sketch.headers.b)
   textSize(n(20, "Y"))
   text("Information:", n(10), n(70, "Y"))
   text("Pictures:", n(200), n(70, "Y"))
   text("NGO Links:", n(316), n(70, "Y"))
   pop()
   for(let i = 0; i < buttons.length; i++) {
        buttons[i].show()
        buttons[i].highLight()
   }

   push()
   stroke(0)
   strokeWeight(1)
   fill(250)
   processData(tab, page)
   console.log("tab: "+tab+"  page: "+page)
   pop()

}

function n(value, type) {
    if(type == "Y") {
        return value*(Window.y/400)
      }else{
        return value*(Window.x/400)
      }
}