import $ from 'jquery';
import PopperJs from './js/popper.min.js';
import './js/jquery.min.js';

import './js/bootstrap.min.js';

//************ FONTS ****************/
import font1 from './fonts/bernier.ttf';

//************ IMAGES ****************/
import img from './img/arrow_active.png';
import img2 from './img/arrow.png';
import img3 from './img/banner.png';
import img4 from './img/barber1.png';
import img5 from './img/barber2.png';
import img6 from './img/barber3.png';
import img7 from './img/dom.png';
import img8 from './img/fb.png';
import img9 from './img/follow.png';
import img10 from './img/galeria.png';
import img11 from './img/i.png';
import img12 from './img/insta.png';
import img13 from './img/left.png';
import img14 from './img/logo.png';
import img15 from './img/noz.png';
import img16 from './img/noze_close.png';
import img17 from './img/noze_open.png';
import img18 from './img/noze.png';
import img19 from './img/right.png';
import img20 from './img/slider1.png';
import img21 from './img/slider2.png';
import img22 from './img/slider3.png';
import img23 from './img/slider4.png';
import img24 from './img/tekstura.png';
import img25 from './img/twitter.png';

//************** HTML ****************/
import index from './index.html';

//************** CSS ****************/
import stylebootstrap from './css/bootstrap.css';
import stylefontawesome from './css/font-awesome.min.css';

//************** STYLE ****************/
import style from "./_scss/main.scss";


onload = function () {
    $('.card-body img').hover(function() {
        $(this).attr('src', './img/noze_close.png');
      }, function() {
        $(this).attr('src', './img/noze_open.png');
      })

      $('.card-body span').hover(function() {
        $('.card-body img').attr('src', './img/noze_close.png');
      }, function() {
        $('.card-body img').attr('src', './img/noze_open.png');
      })
}



