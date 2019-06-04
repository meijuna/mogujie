-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-06-04 11:17:26
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydb`
--

-- --------------------------------------------------------

--
-- 表的结构 `productlist`
--

CREATE TABLE `productlist` (
  `id` int(11) NOT NULL,
  `title` varchar(50) COLLATE ucs2_general_mysql500_ci NOT NULL,
  `nowPrice` float NOT NULL,
  `oldPrice` float NOT NULL,
  `num` int(11) NOT NULL,
  `pic` varchar(50) COLLATE ucs2_general_mysql500_ci NOT NULL,
  `productDescribe` varchar(100) COLLATE ucs2_general_mysql500_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=ucs2 COLLATE=ucs2_general_mysql500_ci;

--
-- 转存表中的数据 `productlist`
--

INSERT INTO `productlist` (`id`, `title`, `nowPrice`, `oldPrice`, `num`, `pic`, `productDescribe`) VALUES
(1001, '黑色阔腿裤女夏季新款韩版宽松松紧高腰运动休闲裤女卷边直筒裤', 27.9, 39.86, 999, './image/productList/01.jpg', '是不是你们找了很久的休闲裤，简直好穿到没sei了'),
(1002, '夏季新款百搭V领条纹短款港味针织小吊带内搭背心修身打底女上衣', 22, 31.43, 34, './image/productList/02.jpg', '小店支持七天无理由退换 赠送运费险 让您购物无忧  更多好看的款式等您挑选 欢迎各位进店选购哦！'),
(1003, '2019新款侧边双白条九分小脚裤高腰弹力修身显瘦百搭休闲打底裤女', 49.8, 155, 999, './image/productList/03.jpg', '2019新款侧边双白条九分小脚裤高腰弹力修身显瘦百搭休闲打底裤女'),
(1004, '夏季罗马凉鞋女仙女风平底2019新款百搭学生晚晚一字带温柔鞋', 63, 126, 123, './image/productList/04.jpg', '对不起,\r\n没能给您呈现出天花乱坠的买家秀,\r\n没能给您制造出五彩斑斓的童话评语,\r\n我只有一颗稳中求胜的心,\r\n在期盼某一颗小小幸运,\r\n若喜欢?不妨一试。\r\n不满意?还我即可.'),
(1005, '【垂坠，高品质】韩版冰丝阔腿裤2019夏季新款宽松显瘦百褶裤', 39.9, 57, 321, './image/productList/05.jpg', '很显瘦的百褶裤！'),
(1006, '2019新款网红夏季小清新上衣女韩版宽松百搭宽松短款t恤', 45, 65, 67, './image/productList/06.jpg', '短款T恤，不用那么那么费事将下摆塞入裤头里凹造型，下摆大约在腰头位置，增添了俏皮可爱的感觉，凹造型也变得简单很多~'),
(1007, '网红背带裤森女系2019春夏新款韩版宽松显瘦减龄九分阔腿裤秋', 126, 180, 322, './image/productList/07.jpg', 'vintage网红背带裤森女系2019春新款韩版宽松显瘦减龄九分阔腿裤\r\n'),
(1008, '胖妹妹2019夏季新款法国小众收腰显瘦V领雪纺小碎花大摆裙', 98, 140, 764, './image/productList/08.jpg', '胖妹妹法国小众收腰V领雪纺小碎花大摆裙'),
(1009, '大码女装200斤胖mm黑色雪纺裙 收腰雪纺气质V领藏肉连衣裙', 91.43, 112, 34, './image/productList/09.jpg', '大码女装200斤胖mm黑色雪纺裙 收腰雪纺气质V领藏肉连衣裙'),
(1010, 'ins同款原宿风秋季外套女闺蜜装韩版中学生宽松bf学院风潮', 75.8, 139, 56, './image/productList/10.jpg', 'ins同款原宿风秋季外套女闺蜜装韩版中学生宽松bf学院风潮');

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `user_name` varchar(20) COLLATE ucs2_general_mysql500_ci NOT NULL,
  `user_pwd` varchar(20) COLLATE ucs2_general_mysql500_ci NOT NULL,
  `uer_head` varchar(100) COLLATE ucs2_general_mysql500_ci NOT NULL DEFAULT './image/userInfo/avatar.webp'
) ENGINE=MyISAM DEFAULT CHARSET=ucs2 COLLATE=ucs2_general_mysql500_ci;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`id`, `user_name`, `user_pwd`, `uer_head`) VALUES
(1001, 'meijuna', '123456', './image/userInfo/avatar.webp'),
(1022, '', '', './image/userInfo/avatar.webp');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `productlist`
--
ALTER TABLE `productlist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `productlist`
--
ALTER TABLE `productlist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1011;
--
-- 使用表AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1023;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
