(function () {

  var box = document.querySelector('.mslide_content');
  var pic_ul = document.querySelector('.mslidle_banners');
  var pic_li = document.querySelectorAll('.mslidle_banners .mslide_li');
  var btn_left = document.querySelector('.mslidel_prev_btn');
  var btn_right = document.querySelector('.mslidel_next_btn');

  var obj = {
    box: box,
    pic_ul: pic_ul,
    pic_li: pic_li,
    btn_left: btn_left,
    btn_right: btn_right,
    ul: '.mslidle_banners .mslide_li'
  }
  slideMove(obj);

  var box2 = document.querySelector('.mslide_content_box');
    var pic_ul2 = document.querySelector('.mslide2');
    var pic_li2 = document.querySelectorAll('.mslide2 .mslide_li2');
    var btn_left2 = document.querySelector('.btn1');
    var btn_right2 = document.querySelector('.btn2');

    var obj2 = {
        box: box2,
        pic_ul: pic_ul2,
        pic_li: pic_li2,
        btn_left: btn_left2,
        btn_right: btn_right2,
        ul: '.mslide2  .mslide_li2'
    }


    slideMove(obj2);

  function slideMove(obj) {

    var pic_li = obj.pic_li;
    var pic_ul = obj.pic_ul;
    var box = obj.box;
    var btn_left = obj.btn_left;
    var btn_right = obj.btn_right;
    var ul = obj.ul;

    var num = 0;
    var bstop = true;
    var timer = null;

    var fistPic = pic_li[0].cloneNode(true);
    var lastPic = pic_li[pic_li.length - 1].cloneNode(true);
    pic_ul.insertBefore(lastPic, pic_li[0]);
    pic_ul.appendChild(fistPic);

    pic_li = document.querySelectorAll(ul); //重新得到图片的数量
    var liWidth = pic_li[0].offsetWidth; //获取一个li 的width

    pic_ul.style.width = liWidth * pic_li.length + 'px'; //设置ul的width
    pic_ul.style.left = -liWidth + 'px';


    box.onmouseover = function () {
      btn_left.style.display = 'block';
      btn_right.style.display = 'block'
      clearInterval(timer);
    }
    box.onmouseout = function () {
      btn_left.style.display = 'none';
      btn_right.style.display = 'none'
      // auto();
      timer = setInterval(function () {
        btn_right.onclick();
      }, 3000)
    }


    for (var i = 0; i < pic_li.length - 1; i++) {
      num = i; //当前按钮的索引
      tabSwitch();
    }

    function tabSwitch() {
      bufferMove(pic_ul, {
        left: -(num + 1) * liWidth
      }, function () { //每次运动判断

        // 是否最后一张
        if (pic_ul.offsetLeft <= -liWidth * (pic_li.length - 1)) {
          pic_ul.style.left = -liWidth + 'px';
          num = 0;
        }
        //是否第一张
        if (pic_ul.offsetLeft >= 0) {
          pic_ul.style.left = -liWidth * (pic_li.length - 1) + 'px';
          num = (pic_li.length - 1) - 1;
        }
        bstop = true;
      })

    }

    btn_right.onclick = function () {
      if (bstop) {
        bstop = false;
        num++;
        tabSwitch();
      
      }

    }
    btn_left.onclick = function () {
      if (bstop) {
        bstop = false;
        num--;
        tabSwitch();

      }
    }

    timer = setInterval(function () {
      btn_right.onclick();
    }, 3000)


  }

  function bufferMove(obj, json, fn) {
    var speed = 0;

    function getstyle(obj, attr) {
      if (window.getComputedStyle) {
        return getComputedStyle(obj)[attr];
      } else {
        return obj.currentStyle[attr];
      }
    }
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
      var bstop = true;
      for (var attr in json) {
        var currentvalue = null;
        if (attr == 'opacity') {
          currentvalue = Math.round(getstyle(obj, 'opacity') * 100);
          speed = (json[attr] * 100 - currentvalue) / 10;
        } else {
          currentvalue = parseInt(getstyle(obj, attr));
          speed = (json[attr] - currentvalue) / 25;
        }
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if (currentvalue != json[attr]) {
          if (attr == 'opacity') {
            obj.style.opacity = (currentvalue + speed) / 100;
            obj.style.filter = 'alpha(filter=' + (currentvalue + speed) + ')';
          } else {
            obj.style[attr] = currentvalue + speed + 'px';
          }
          bstop = false;
        }
      }
      if (bstop) {
        clearInterval(obj.timer);
        fn && fn();
      }
    }, 8);
  }




})()