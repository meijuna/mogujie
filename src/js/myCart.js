$(function () {
    // tab 样式切换
    $('.content>a').click(function () {

        $(this).addClass('active').siblings().removeClass('active');

    });

    var shop = cookie.get('shop');

    if (shop) {
        shop = JSON.parse(shop);
        //   console.log(shop);
        var idList = shop.map(elm => elm.id).join(); //转字符串
        $.ajax({
            type: "get",
            url: "../lib/getCartInfo.php",
            data: {
                "idList": idList
            },
            dataType: "json",
            success: function (response) {
                // console.log(response.length);

                var template = ""
                response.forEach(function (elm) {
                    var arr = shop.filter((val, i) => {
                        return val.id === elm.id;
                    })
                    template = `
                    <tr>
                <td colspan="6">
                    <h6>滴油旗舰店</h6>
                    <img src="../image/cart/goods_icon6.gif">
                    <img src="../image/cart/mabyLike_little1.png">
                    <i></i>
                    <p>满89元减5</p>
                    <div class=" arrowdown">优惠卷
                        <div class="cart_coupon">
                            <ul>
                                <!-- x -->
                                <li>
                                    <span class=" close"> X</span>
                                </li>
                                <li>
                                    <h3>5元</h3>
                                    <p>满89元立减</p>
                                    <span>2017.12.13-2018.2.3</span>
                                    <button>领取</button>
                                </li>
                                <!-- 下划线 -->
                                <li class="line"></li>
                                <li>
                                    <h3>5元</h3>
                                    <p>满89元立减</p>
                                    <span>2017.12.13-2018.2.3</span>
                                    <button>领取</button>
                                </li>
                                <li class="line"></li>
                                <li>
                                    <h3>5元</h3>
                                    <p>满89元立减</p>
                                    <span>2017.12.13-2018.2.3</span>
                                    <button>领取</button>
                                </li>
                                <li class="line"></li>
                                <li>
                                    <h3 style="background-color: rgb(255,142,51);">5元</h3>
                                    <p>满89元立减</p>
                                    <span>2017.12.13-2018.2.3</span>
                                    <button style="border: none">无需领取</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <a href="#">去店铺凑单></a>
                </td>
            </tr>
            <!-- 商品第一行 -->
            <tr class="car">
                <td>
                    <input type="checkbox" name="newslist" id=${elm.id}>
                    <img src=".${elm.pic}">
                    <a href="#" title="${elm.title}">${elm.title}</a>

                </td>
                <td>
                    <h2>颜色：卡其</h2>
                    <h2>尺码：均码</h2>
                </td>
                <td>
                    <del>￥${elm.oldPrice}</del>
                    <p>$${elm.nowPrice}</p>
                    <span>新品促销</span>
                </td>
                <td>
                    <button id="add">-</button>
                    <input type="text" name="" id="num" value="${arr[0].num}" min="1" max="${elm.num}">
                    <button id="min">+</button>
                </td>
                <td class="prc"><em class="price">${(arr[0].num * elm.nowPrice).toFixed(2)}</em></td>
                <td>
                    <h4>删除</h4>
                </td>
            </tr>

                    `;
                    $('tbody').append(template);
                })
                $(".allSelect").click(function () {
                    if ($(this).prop('checked')) {
                        $("input[name=newslist]").each(function () {
                            $(this).attr("checked", true);
                        });
                        GetCount();
                    } else {
                        $("input[name=newslist]").each(function () {
                            if ($(this).prop("checked")) {
                                $(this).attr("checked", false);
                            } else {
                                $(this).attr("checked", false);
                            }
                        });
                        GetCount();
                    }
                });



                $("input[name=newslist]").click(function () {
                    GetCount();
                })


                //加 
                $(function () {
                    var num = $("#num").val();
                    console.log(num);
                })

                function GetCount() {
                    var conts = 0; //总价
                    var sum = 0; //数量
                    $("input[name=newslist]").each(function () {
                        if ($(this).prop("checked")) {
                            for (var i = 0; i < $(this).length; i++) {
                                conts += parseInt($(this).parent().siblings().eq(3)
                                    .children('em').html());
                                sum += 1;
                                // console.log();
                            }
                            $(".qfk").css('background-color', 'rgb(255,167,1)');
                        } else {
                            $(".qfk").removeAttr('style');
                        }
                    });
                    $(".sumNum").text(sum);
                    $(".sumPrice").text((conts).toFixed(2));

                }
            }

        });

    }


})