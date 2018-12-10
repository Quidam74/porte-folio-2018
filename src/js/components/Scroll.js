
export default class Scroll {

    constructor() {
        this.$body = document.querySelector(".body");
        this.scroll =0;
        this.bindEvent();
        this.init();
    }

    bindEvent(){
        window.addEventListener("scroll",(data)=>{
            this.scroll = window.scrollY;
            window.scrollTo(this.scroll,this.scroll)
            this.$body.style.transform = "translate(,"+this.scroll+"px)";


        })
    }
    init(){

    }


}