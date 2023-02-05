let j = 80
let jo = 70

function processData(tab, page) {
    let DATA = Getlocation(tab, page)
    push()
    fill(Sketch.txt.r, Sketch.txt.g, Sketch.txt.b)
    textSize(n(16,"Y"))
    text(DATA.Information.subT, n(10), n(100, "Y"))
    textSize(n(12, "Y"))
    text(wrap(DATA.Information.intro, round(n(170/12))), n(10), n(120, "Y"))
    textSize(n(14, "Y"))
    let ngolist = "";
    for(let i = 0; i<DATA.NGOLinks.length; i++) {
      textLeading(42)
      ngolist = ngolist+DATA.NGOLinks[i].t+"\n"
      ls[i].reason = function () {
        window.open(DATA.NGOLinks[i].a)
      }
    }
  
    text(ngolist, n(315), n(93, "Y"))
    if(tab == 0) {
      let oj = 0
    for(let i = 0; i<Data.home.Pictures.length; i++) {
      if(page == 0 && i < 2) {
        let tim = Data.home.Pictures[i].a
      if(tim.width > n(100)) {
        tim.resize(n(100), 0)
      }
        if(tim.height > n(105)) {
        tim.resize(0, n(105))
      }
      image(Data.home.Pictures[i].a, n(200), n(j*(i+1)+oj, "Y"))
      }else if(page == 1 && i > 1 && i <= 3) {
        let tim = Data.home.Pictures[i].a
      if(tim.width > n(100)) {
        tim.resize(n(100), 0)
      }
        if(tim.height > n(105)) {
        tim.resize(0, n(105))
      }
      image(Data.home.Pictures[i].a, n(200), n(j*(i-1)+oj, "Y"))
      }else if(page == 2 && i > 3 && i <= 5) {
        let tim = Data.home.Pictures[i].a
      if(tim.width > n(100)) {
        tim.resize(n(100), 0)
      }
        if(tim.height > n(105)) {
        tim.resize(0, n(105))
      }
      image(Data.home.Pictures[i].a, n(200), n(j*(i-3)+oj, "Y"))
      }else if(page == 3 && i > 5) {
        let tim = Data.home.Pictures[i].a
      if(tim.width > n(100)) {
        tim.resize(n(100), 0)
      }
        if(tim.height > n(105)) {
        tim.resize(0, n(105))
      }
      image(Data.home.Pictures[i].a, n(200), n(j*(i-5)+oj, "Y"))
      }
      if(oj == 0) {
        oj = jo
      }else {
        oj = 0
      }
    }
    }else if(tab == 1) {
      let oj = 0
    for(let i = 0; i<Data.droughts.Pictures.length; i++) {
      if(page == 0 && i < 2) {
        let tim = Data.droughts.Pictures[i].a
      if(tim.width > n(100)) {
        tim.resize(n(100), 0)
      }
        
      if(tim.height > n(105)) {
        tim.resize(0, n(105))
      }
      image(Data.droughts.Pictures[i].a, n(200), n(j*(i+1)+oj, "Y"))
      }else if(page == 1 && i > 1 && i <= 3) {
        let tim = Data.droughts.Pictures[i].a
      if(tim.width > n(100)) {
        tim.resize(n(100), 0)
      }
        if(tim.height > n(105)) {
        tim.resize(0, n(105))
      }
      image(Data.droughts.Pictures[i].a, n(200), n(j*(i-1)+oj, "Y"))
      }else if(page == 2 && i > 3 && i <= 5) {
        let tim = Data.droughts.Pictures[i].a
      if(tim.width > n(100)) {
        tim.resize(n(100), 0)
      }
        if(tim.height > n(105)) {
        tim.resize(0, n(105))
      }
      image(Data.droughts.Pictures[i].a, n(200), n(j*(i-3)+oj, "Y"))
      }else if(page == 3 && i > 5) {
        let tim = Data.droughts.Pictures[i].a
      if(tim.width > n(100)) {
        tim.resize(n(100), 0)
      }
        if(tim.height > n(105)) {
        tim.resize(0, n(105))
      }
      image(Data.droughts.Pictures[i].a, n(200), n(j*(i-5)+oj, "Y"))
      }
      if(oj == 0) {
        oj = jo
      }else {
        oj = 0
      }
    }
    }else if(tab == 2) {
      let oj = 0
    for(let i = 0; i<Data.tsunamis.Pictures.length; i++) {
      if(page == 0 && i < 2) {
        let tim = Data.tsunamis.Pictures[i].a
      if(tim.width > n(100)) {
        tim.resize(n(100), 0)
      }
        if(tim.height > n(105)) {
        tim.resize(0, n(105))
      }
      image(Data.tsunamis.Pictures[i].a, n(200), n(j*(i+1)+oj, "Y"))
      }else if(page == 1 && i > 1 && i <= 3) {
        let tim = Data.tsunamis.Pictures[i].a
      if(tim.width > n(100)) {
        tim.resize(n(100), 0)
      }
        if(tim.height > n(105)) {
        tim.resize(0, n(105))
      }
      image(Data.tsunamis.Pictures[i].a, n(200), n(j*(i-1)+oj, "Y"))
      }else if(page == 2 && i > 3 && i <= 5) {
        let tim = Data.tsunamis.Pictures[i].a
      if(tim.width > n(100)) {
        tim.resize(n(100), 0)
      }
        if(tim.height > n(105)) {
        tim.resize(0, n(105))
      }
      image(Data.tsunamis.Pictures[i].a, n(200), n(j*(i-3)+oj, "Y"))
      }else if(page == 3 && i > 5) {
        let tim = Data.tsunamis.Pictures[i].a
      if(tim.width > n(100)) {
        tim.resize(n(100), 0)
      }
        if(tim.height > n(105)) {
        tim.resize(0, n(105))
      }
      image(Data.tsunamis.Pictures[i].a, n(200), n(j*(i-5)+oj, "Y"))
      }
      if(oj == 0) {
        oj = jo
      }else {
        oj = 0
      }
    }
    }else {
      let oj = 0
    for(let i = 0; i<Data.floods.Pictures.length; i++) {
      if(page == 0 && i < 2) {
        let tim = Data.floods.Pictures[i].a
      if(tim.width > n(100)) {
        tim.resize(n(100), 0)
      }
        if(tim.height > n(105)) {
        tim.resize(0, n(105))
      }
      image(Data.floods.Pictures[i].a, n(200), n(j*(i+1)+oj, "Y"))
      }else if(page == 1 && i > 1 && i <= 3) {
        let tim = Data.floods.Pictures[i].a
      if(tim.width > n(100)) {
        tim.resize(n(100), 0)
      }
        if(tim.height > n(105)) {
        tim.resize(0, n(105))
      }
      image(Data.floods.Pictures[i].a, n(200), n(j*(i-1)+oj, "Y"))
      }else if(page == 2 && i > 3 && i <= 5) {
        let tim = Data.floods.Pictures[i].a
      if(tim.width > n(100)) {
        tim.resize(n(100), 0)
      }
        if(tim.height > n(105)) {
        tim.resize(0, n(105))
      }
      image(Data.floods.Pictures[i].a, n(200), n(j*(i-3)+oj, "Y"))
      }else if(page == 3 && i > 5) {
        let tim = Data.floods.Pictures[i].a
      if(tim.width > n(100)) {
        tim.resize(n(100), 0)
      }
        if(tim.height > n(105)) {
        tim.resize(0, n(105))
      }
      image(Data.floods.Pictures[i].a, n(200), n(j*(i-5)+oj, "Y"))
      }
      if(oj == 0) {
        oj = jo
      }else {
        oj = 0
      }
    }
    }
    pop()
    
}

function Getlocation(tab, page) {
    let x
    
    if(tab == 1 && page == 0) {
        x = Data.droughts.page1
    }else if(tab == 2 && page == 0) {
        x = Data.tsunamis.page1
    }else if(tab == 3 && page == 0)  {
        x = Data.floods.page1
    }else if(tab == 0 && page == 0) {
        x = Data.home.page1
    }else if(tab == 1 && page == 1) {
        x = Data.droughts.page2
    }else if(tab == 2 && page == 1) {
        x = Data.tsunamis.page2
    }else if(tab == 3 && page == 1)  {
        x = Data.floods.page2
    }else if(tab == 0 && page == 1) {
        x = Data.home.page2
    }else if(tab == 1 && page == 2) {
        x = Data.droughts.page3
    }else if(tab == 2 && page == 2) {
        x = Data.tsunamis.page3
    }else if(tab == 3 && page == 2)  {
        x = Data.floods.page3
    }else if(tab == 0 && page == 2) {
        x = Data.home.page3
    }else if(tab == 1 && page == 3) {
        x = Data.droughts.page4
    }else if(tab == 2 && page == 3) {
        x = Data.tsunamis.page4
    }else if(tab == 3 && page == 3)  {
        x = Data.floods.page4
    }else if (tab == 0 && page == 3) {
        x = Data.home.page4
    }

    return x
}