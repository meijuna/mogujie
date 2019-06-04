$(function () {

  $.ajax({
    type: "get",
    url: "./lib/getProductList.php",
    dataType: "json",
    success: function (response) {
      var mabyLike = $('.mabyLike');
      var product_list = $('.product_list');
      var template = '';
      var template2 = '';
      response.forEach(function (elm, i) {

        console.log(elm)
        template = `
              <li> 
                  <a href="html/page.html?id=${elm.id}">
                  
                  <img class="lazy" data-original="${elm.pic}" alt="${elm.title}">
                  <h6 hidden="hidden">找相似</h6>
                  <p class="line_one">${elm.title}</p>
                  <img class="mabyLike_icon" src="./image/search/mabyLike_little1.png"><br>
                  <span>$${elm.nowPrice}</span>&nbsp;&nbsp;
                  <del>$${elm.oldPrice}</del>
                  <img src="./image/search/mabyLike_little3.png" class="start"><em>${elm.num}</em>
                </a>
              </li>
                  `;
        var template2 = `
              <a href="html/page.html?id=${elm.id}">
                  <div class="swiper_item fl">
                    
                          <div class="swiper_img_wrap ">
                              <img class="lazy" data-original="${elm.pic}" alt="${elm.title}">
                          </div>

                          <p class="swiper_item_title">${elm.title}
                          </p>
                          <p class="swiper_item_price">
                              <span>￥</span> ${elm.nowPrice}
                          </p>
                     
                  </div>
              </a>
                  `;
        mabyLike.append(template);
        product_list.append(template2);
      });
      $("img.lazy").lazyload({
        effect: "fadeIn",
        threshold: 180
      });

    }
  });
  var user_name = cookie.get('name');
  if (user_name) {
    $('.base_info').remove();
    $.ajax({
      type: "get",
      url: "./lib/getUserInof.php",
      data: {
        user_name: user_name
      },
      dataType: "json",
      success: function (response) {
        console.log(response);
        var template3 = `

          <div class="base_info">
              <a href="###" >
                  <img src="${response.uer_head}" class="avatar">
                  </a>
              <div class="wecome">
                  <span>您好！</span>
                  <span class="name">${response.user_name},你好！欢迎你的到来~</span>

              </div>
              <div class="privileged">
                  <a href="./html/login.html"><span>会员中心</span></a>
              </div>

          </div>
         
          `;
        $('.user_info').prepend(template3);
      }
    });
  }

});