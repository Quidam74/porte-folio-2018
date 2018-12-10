
export default class Scroll {

    constructor() {

        this.bindEvent();
        this.init();
    }

    bindEvent(){
        window.addEventListener("scroll",(data)=>{
            console.log(data)
        })
    }
    init(){

    }


}