
import Example from './components/Example'
import Scroll from './components/Scroll'
import {getBrowser} from './utils/environment'

const App = {

    init(){
        document.addEventListener('DOMContentLoaded', this.ready.bind(this), false);
    },

    ready(){
        this.initComponents();
        this.bindEvent();

        console.log(getBrowser());
        new Scroll();
    },

    bindEvent(){

    },

    initComponents(){


    }

};


App.init();