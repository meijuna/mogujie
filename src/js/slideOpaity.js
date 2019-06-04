(function () {
  //整个效果的核心--索引控制
  //1.获取元素
  var box = document.querySelector('.banner_box');
  var picLi = document.querySelectorAll('.banner_box ul li');
  var btnLi = document.querySelectorAll('.banner_box ol li');
  var btnLeft = document.querySelector('.bt1');
  var btnRight = document.querySelector('.bt2');
  var timer = null;

  var num = 0; //定义变量，存放索引

  //2.给btnLi添加鼠标移入事件
  for (var i = 0; i < btnLi.length; i++) {
    btnLi[i].index = i; //自定义索引
    btnLi[i].onmouseover = function () {
      num = this.index; //当前的按钮的索引
      tabSwitch();
    };
  }

  function tabSwitch() {
    for (var j = 0; j < btnLi.length; j++) {
      btnLi[j].className = '';
      bufferMove(picLi[j], 0, 'opacity');
    }
    btnLi[num].className = 'circle_current'; //当前的按钮
    bufferMove(picLi[num], 100, 'opacity');
  }


  // //3.按钮显示和隐藏。
  box.onmouseover = function () {
    btnLeft.style.display = 'block';
    btnRight.style.display = 'block';
    clearInterval(timer);
  };

  box.onmouseout = function () {
    btnLeft.style.display = 'none';
    btnRight.style.display = 'none';
    timer = setInterval(function () {
      btnRight.onclick();
    }, 3000);
  };
  //4.箭头添加事件
  btnRight.onclick = function () {
    num++;
    if (num > btnLi.length - 1) {
      num = 0;
    }
    tabSwitch();
  }
  btnLeft.onclick = function () {
    num--;
    if (num < 0) {
      num = btnLi.length - 1;
    }
    tabSwitch();
  }
  //5.自动轮播
  timer = setInterval(function () {
    btnRight.onclick();
  }, 3000);


  function getStyle(obj, attr) {
    if (window.getComputedStyle) {
      return getComputedStyle(obj)[attr];
    } else {
      return obj.currentStyle[attr];
    }
  }

  //当函数的参数超过三个的时候，参数采用对象的形式传参。

  function bufferMove(obj, target, attr) {
    var speed = 0;
    clearInterval(obj.timer); //防止定时器在事件下面多次操作出现叠加
    obj.timer = setInterval(function () {

      //1.获取初始值
      var currentvalue = 0;
      if (attr == 'opacity') { //透明度
        currentvalue = Math.round(getStyle(obj, attr) * 100);
      } else { //px为单位
        currentvalue = parseInt(getStyle(obj, attr));

      }

      //2.求速度
      speed = (target - currentvalue) / 10; //如果是透明度，目标值扩大100倍
      speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

      //3.判断运动的停止
      if (currentvalue == target) { //不断变化的当前值等于目标点，停止运动
        clearInterval(obj.timer);
      } else { //继续运动
        if (attr == 'opacity') {
          obj.style.opacity = (currentvalue + speed) / 100;
          obj.style.filter = 'alpha(opacity=' + (currentvalue + speed) + ')';
        } else {
          obj.style[attr] = currentvalue + speed + 'px';
        }
      }

    }, 20);
  }
})()