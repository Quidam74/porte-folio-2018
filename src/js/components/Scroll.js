
export default class Scroll {

    constructor() {
        this.$body = document.querySelector(".body");

        bindEvent();
        init();
    }

    bindEvent(){
        this.$body.addEventListener("scroll",(data)=>{
            console.log(data)
        })
    }
    init(){

    }


}