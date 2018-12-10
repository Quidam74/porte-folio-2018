
export default class Scroll {

    constructor() {
        this.scroll =0;
        this.bindEvent();
        this.init();
    }

    bindEvent(){
        window.addEventListener("scroll",(data)=>{
            this.scroll = window.scrollY;
            window.scrollTo(this.scroll,this.scroll)
        })
    }
    init(){

    }


}