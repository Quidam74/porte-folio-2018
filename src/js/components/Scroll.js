
export default class Scroll {

    constructor() {
        this.$body = document.querySelector(".body");

        this.bindEvent();
        this.init();
    }

    bindEvent(){
        this.$body.addEventListener("scroll",(data)=>{
            console.log(data)
        })
    }
    init(){

    }


}