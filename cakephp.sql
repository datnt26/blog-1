-- phpMyAdmin SQL Dump
-- version 4.0.10.20
-- https://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 31, 2019 at 12:28 AM
-- Server version: 5.5.60
-- PHP Version: 5.4.45

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `cakephp`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE IF NOT EXISTS `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `postId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `message` text COLLATE utf8_unicode_ci NOT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=6 ;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `postId`, `userId`, `message`, `parent_id`, `created`) VALUES
(1, 1, 1, 'Dù gì cũng ngôi sao mới nổi chưa biết có duy trì ổn định ko mà đã làm giá rồi, thôi ở lại Ajax đê.', NULL, '2019-05-31 00:17:52'),
(2, 1, 1, 'Nên tập trung vào Maguire còn hơn,hàng nội ,có kinh nghiệm..mang ông này về tài năng có đó nhưng vẫn là 50 50 thôi..Ngoại Hạng khác biệt so với phần còn lại', NULL, '2019-05-31 00:18:26'),
(3, 1, 2, 'Cho cu cậu ở lại AJax thôi', 1, '2019-05-31 00:21:03'),
(4, 1, 2, 'Lúc Ramos mới về Real cũng 19t cũng như Ligt nhưng ko đc quan tâm như giờ', 1, '2019-05-31 00:21:23'),
(5, 1, 1, 'Ở lại đi. Năm tới nữa mờ nhạt. Rồi năm sau nữa lại qa MU mà toả sáng nhé', 2, '2019-05-31 00:25:09');

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--

CREATE TABLE IF NOT EXISTS `groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=7 ;

--
-- Dumping data for table `groups`
--

INSERT INTO `groups` (`id`, `name`, `created`, `modified`) VALUES
(5, 'managers', '2019-05-17 16:56:58', '2019-05-17 16:56:58'),
(4, 'administrators', '2019-05-17 16:56:11', '2019-05-17 16:56:11'),
(6, 'users', '2019-05-17 16:57:04', '2019-05-17 16:57:04');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE IF NOT EXISTS `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `content` text COLLATE utf8_unicode_ci,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=2 ;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `user_id`, `content`, `created`, `modified`) VALUES
(1, 1, 'Duncan Castles cho hay Mini Raiola đã bị hớ trong vụ ép Barca nâng giá. Bằng chiêu quen thuộc dùng Instagram thả thính MU. Tiếc là Barca lại không nhất thiết cần mua trung vệ cũng như không muốn vì De Ligt làm phật lòng Messi vì lương. Do đó việc Barca rút lui khiến De Ligt giờ đang phải chọn ở lại Ajax hoặc MU.', '2019-05-31 00:17:20', '2019-05-31 00:17:20');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `avatar` varchar(256) COLLATE utf8_unicode_ci NOT NULL DEFAULT '/img/user-placeholder.png',
  `password` char(40) COLLATE utf8_unicode_ci NOT NULL,
  `group_id` int(11) NOT NULL,
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `avatar`, `password`, `group_id`, `created`, `modified`) VALUES
(1, 'tekachi', '/img/ehm-2.jpg', '96733611cf47ef17fa9de14ce29ece7157a3ecb1', 0, '2019-05-30 19:50:21', '2019-05-30 19:50:21'),
(2, 'admin', '/img/images.jpg', '96733611cf47ef17fa9de14ce29ece7157a3ecb1', 0, '2019-05-31 00:22:11', '2019-05-31 00:22:11');

-- --------------------------------------------------------

--
-- Table structure for table `widgets`
--

CREATE TABLE IF NOT EXISTS `widgets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `part_no` varchar(12) COLLATE utf8_unicode_ci DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
