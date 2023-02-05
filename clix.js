function clicks() {
    //Ribbon
        //Page
    if(nextButton.pointed()) {
        if(page<3) {
            page++
        }
    }
    if(backButton.pointed()) {
        if(page>0) {
            page--
        }
    }
    if(pageButton1.pointed()) {
        page = 0
    }
    if(pageButton2.pointed()) {
        page = 1
    }
    if(pageButton3.pointed()) {
        page = 2
    }
    if(pageButton4.pointed()) {
        page = 3
    }

        //Tabs
    if(tsunamiButton.pointed()) {
        tab = 2
    }
    if(floodButton.pointed()) {
        tab = 3
    }
    if(droughtButton.pointed()) {
        tab = 1
    }
    if(homeButton.pointed()) {
        tab = 0
    }
    
    if(tab == tab){}
}