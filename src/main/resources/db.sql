-- MySQL dump 10.13  Distrib 5.7.25, for Linux (x86_64)
--
-- Host: localhost    Database: wedding
-- ------------------------------------------------------
-- Server version	5.7.25-0ubuntu0.16.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `advertisement`
--

DROP TABLE IF EXISTS `advertisement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `advertisement` (
  `ad_id` int(11) NOT NULL AUTO_INCREMENT,
  `status` int(11) DEFAULT NULL,
  `created_date` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `closing_time` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cover_image_1` varchar(1500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cover_image_2` varchar(1500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cover_image_3` varchar(1500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cover_image_4` varchar(1500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` varchar(3000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `experience` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `expired_date` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `facebook` varchar(1500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `google_map` varchar(3000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `opening_days` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `opening_time` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `professionals` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `twitter` varchar(1500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `view` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `referral` int(11) DEFAULT NULL,
  `category` int(11) NOT NULL,
  `city` int(11) NOT NULL,
  `packages` int(11) NOT NULL,
  `vendor` int(11) DEFAULT NULL,
  PRIMARY KEY (`ad_id`),
  KEY `FKhuceh27cl7ohc1nlbfajlvlhj` (`referral`),
  KEY `FKmqvyt9tr35eefpar3bnmep0su` (`vendor`),
  KEY `UK_tn09ppe0q8b3np0cmhonan9d8` (`category`),
  KEY `UK_6akhl4hwwmevyoumsn25wo5c8` (`city`),
  KEY `UK_phqt8f6gt7ee2mpklg2n26kq6` (`packages`),
  CONSTRAINT `FK7unpfmnx4bak16s2aik75glvw` FOREIGN KEY (`category`) REFERENCES `category` (`category_id`),
  CONSTRAINT `FK9pqdqt56bv51fjw6cthddokr0` FOREIGN KEY (`city`) REFERENCES `city` (`city_id`),
  CONSTRAINT `FKhuceh27cl7ohc1nlbfajlvlhj` FOREIGN KEY (`referral`) REFERENCES `brokers` (`broker_id`),
  CONSTRAINT `FKmqvyt9tr35eefpar3bnmep0su` FOREIGN KEY (`vendor`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKocxas8o032j71jfu02i11rurn` FOREIGN KEY (`packages`) REFERENCES `packages` (`pack_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `advertisement`
--

LOCK TABLES `advertisement` WRITE;
/*!40000 ALTER TABLE `advertisement` DISABLE KEYS */;
INSERT INTO `advertisement` VALUES (5,0,'1-22-2019','10.00pm','http://www.zeebo.lk/ad/downloadFile/Chile_Parks_Mountains_Sky_Lake_Bridges_Scenery_535969_1920x1200.jpg','http://www.zeebo.lk/ad/downloadFile/a8c7eef0f811543a957db841332b1ec7.jpg','http://www.zeebo.lk/ad/downloadFile/283853.jpg','http://www.zeebo.lk/ad/downloadFile/95ee8696f8ed1abb3767928c4d0daf65.jpg','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.','Upto 2 month of service','1-22-2020','https://www.facebook.com/','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18841.418738456472!2d79.8695212723975!3d6.900126899033149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2597f9d09a467%3A0xee0b9455e960eba5!2sBandaranaike+Memorial+International+Conference+Hall!5e0!3m2!1sen!2slk!4v1548171702134','All Days','07.00am','yes we are','Test Advertisement 01','https://www.google.com/','FREE','',NULL,2,2,5,4),(6,0,'1-22-2019','09.00pm','http://www.zeebo.lk/ad/downloadFile/Chile_Parks_Mountains_Sky_Lake_Bridges_Scenery_535969_1920x1200.jpg','http://www.zeebo.lk/ad/downloadFile/a8c7eef0f811543a957db841332b1ec7.jpg','http://www.zeebo.lk/ad/downloadFile/283853.jpg','http://www.zeebo.lk/ad/downloadFile/95ee8696f8ed1abb3767928c4d0daf65.jpg','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.','Upto 2 month of service','1-22-2020','https://www.facebook.com/','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18841.418738456472!2d79.8695212723975!3d6.900126899033149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2597f9d09a467%3A0xee0b9455e960eba5!2sBandaranaike+Memorial+International+Conference+Hall!5e0!3m2!1sen!2slk!4v1548171702134','Week Days Only','10.00am','yes we are','Test Advertisement 02','https://www.google.com/','FREE','',NULL,3,2,6,4),(7,0,'1-23-2019','00.00','http://zeebo.lk:8080/ad/downloadFile/AK1A8610-480x231.jpg','http://zeebo.lk:8080/ad/downloadFile/K1A4140.jpg','http://zeebo.lk:8080/ad/downloadFile/K1A4282.jpg','http://zeebo.lk:8080/ad/downloadFile/K1A4447-1360-480x231.jpg','https://www.facebook.com/ https://www.facebook.com/ https://www.facebook.com/ https://www.facebook.com/ https://www.facebook.com/','Upto 2 month of service','1-23-2020','https://www.facebook.com/','','huh','00.00','yes we are','hklolo','https://www.facebook.com/','FREE','',NULL,10,3,7,6),(8,0,'1-23-2019','','http://zeebo.lk:8080/ad/downloadFile/20882208_1457514327636335_210519058658562915_n.jpg','http://zeebo.lk:8080/ad/downloadFile/21463159_1474735762580858_7945852869529995112_n.jpg','http://zeebo.lk:8080/ad/downloadFile/21557586_1476514732402961_2837784772657928922_n.jpg','http://zeebo.lk:8080/ad/downloadFile/22448547_1500011686719932_8601805271413311379_n.jpg','','Upto 2 month of service','1-23-2020','','','all days','','yes we are','','','FREE','',NULL,10,4,8,6),(9,0,'1-23-2019','','http://zeebo.lk:8080/ad/downloadFile/20882208_1457514327636335_210519058658562915_n.jpg','http://zeebo.lk:8080/ad/downloadFile/21463159_1474735762580858_7945852869529995112_n.jpg','http://zeebo.lk:8080/ad/downloadFile/21557586_1476514732402961_2837784772657928922_n.jpg','http://zeebo.lk:8080/ad/downloadFile/22448547_1500011686719932_8601805271413311379_n.jpg','','Upto 2 month of service','1-23-2020','','','','','yes we are','dilan','','FREE','',NULL,3,4,9,6),(10,0,'1-23-2019','','http://zeebo.lk:8080/ad/downloadFile/285256_470298059691305_1440933310_n.jpg','http://zeebo.lk:8080/ad/downloadFile/424954_308070175914095_852726409_n.jpg','http://zeebo.lk:8080/ad/downloadFile/545638_349571631763949_425984029_n.jpg','http://zeebo.lk:8080/ad/downloadFile/969010_513846808669763_291087092_n.jpg','','Upto 2 month of service','1-23-2020','','','','','yes we are','kasun','','FREE','',NULL,9,4,10,6),(11,0,'1-23-2019','','http://zeebo.lk:8080/ad/downloadFile/22448547_1500011686719932_8601805271413311379_n.jpg','http://zeebo.lk:8080/ad/downloadFile/23380198_1528991447155289_3607067889434770963_n.jpg','http://zeebo.lk:8080/ad/downloadFile/23754713_1534293749958392_6532397741423645370_n.jpg','http://zeebo.lk:8080/ad/downloadFile/48199390_594254151012303_93128308455112704_n.png','','Upto 2 month of service','1-23-2020','','','','','yes we are','jknbhj','','FREE','',NULL,4,4,11,6),(12,0,'1-23-2019','','http://zeebo.lk:8080/ad/downloadFile/22448547_1500011686719932_8601805271413311379_n.jpg','http://zeebo.lk:8080/ad/downloadFile/23380198_1528991447155289_3607067889434770963_n.jpg','http://zeebo.lk:8080/ad/downloadFile/23754713_1534293749958392_6532397741423645370_n.jpg','http://zeebo.lk:8080/ad/downloadFile/48199390_594254151012303_93128308455112704_n.png','','Upto 2 month of service','1-23-2020','','','','','yes we are','ccccc','','FREE','',NULL,3,4,12,6),(13,0,'1-23-2019','','http://zeebo.lk:8080/ad/downloadFile/K1A4282.jpg','http://zeebo.lk:8080/ad/downloadFile/K1A4447-1360-480x231.jpg','http://zeebo.lk:8080/ad/downloadFile/misty.png','http://zeebo.lk:8080/ad/downloadFile/slider-5.jpg','','Upto 2 month of service','1-23-2020','','','','','yes we are','zzzzz','','FREE','',NULL,3,4,13,6),(14,0,'1-24-2019','12.00pm','http://www.zeebo.lk/ad/downloadFile/Wallpaper-wallpaper-10134691.jpg','http://www.zeebo.lk/ad/downloadFile/Warrior-wallpaper-10085984.jpg','http://www.zeebo.lk/ad/downloadFile/Watch_Dog-wallpaper-10286161.jpg','http://www.zeebo.lk/ad/downloadFile/Water_Leaf-wallpaper-10152490.jpg','this one is  a sample adevertiement this one for test purpose','Upto 2 month of service','1-24-2020','www.facebook.com','','week days','12.00am','yes we are','sample adevertiement','www.facebook.com','FREE','',NULL,8,2,14,8),(15,0,'1-28-2019','00.00','http://zeebo.lk:8080/ad/downloadFile/Wedding%20Transport%20Pic%201.jpg','http://zeebo.lk:8080/ad/downloadFile/Wedding%20Transport%20Pic%204%20(Take%20out%20the%20partner%20logo%20and%20place%20pic).jpg','http://zeebo.lk:8080/ad/downloadFile/Wedding%20Transport%20Pic%205.jpg','http://zeebo.lk:8080/ad/downloadFile/Wedding%20Transport%20Pic%206.jpg','ADMIN Sinhala English Translator - Apps on Google Play\nhttps://play.google.com/store/apps/details?id=sba.english.sinhala&hl=en_US\nTranslate text, word or sentence from Sinhala to English or from English to Sinhala language. You can use this apps as a Sinhala to English dictionary or English ...','Upto 2 month of service','1-28-2020','https://www.facebook.com/slegasrilanka/photos/a.423341368093727/535220296905833/?section=PUBLISHED_POSTS&sort[0]=published_time_descending','','all days','00.00','yes we are','car','https://www.facebook.com/slegasrilanka/photos/a.423341368093727/535220296905833/?section=PUBLISHED_POSTS&sort[0]=published_time_descending','FREE','',NULL,3,5,15,13),(16,0,'1-28-2019','00.00pm','http://zeebo.lk:8080/ad/downloadFile/download%20(1).jpg','http://zeebo.lk:8080/ad/downloadFile/download%20(2).jpg','http://zeebo.lk:8080/ad/downloadFile/download%20(3).jpg','http://zeebo.lk:8080/ad/downloadFile/download%20(4).jpg','Enjoy Exclusive Offers with Best Rate Guarantee on the Official Site! Best Price Guarantee. Luxury Experience. Legendary Hospitality. Amenities: Signature Spa Experience, Award-Winning Cuisine, Spacious Rooms & Suites, Swimming Pool, Fitness Center, Business Centre.','Upto 2 month of service','1-28-2020','https://www.facebook.com/slegasrilanka/insights/?section=navMessages','https://www.google.lk/maps/place/6%C2%B058\'22.5%22N+79%C2%B055\'16.9%22E/@6.972926,79.9205922,18z/data=!3m1!4b1!4m13!1m6!3m5!1s0x3ae257f9d55c6bd7:0xf5023c8140457396!2sSampath+Bank+ATM,CDM!8m2!3d6.9739568!4d79.9221388!3m5!1s0x0:0x0!7e2!8m2!3d6.9729255!4d79.9213663','All Days','00.00am','yes we are','Fuking Hotel','https://www.facebook.com/slegasrilanka/insights/?section=navMessages','FREE','',NULL,3,4,16,14),(17,1,'1-30-2019','00.00pm','http://zeebo.lk:8080/ad/downloadFile/04.jpg','http://zeebo.lk:8080/ad/downloadFile/09.jpg','http://zeebo.lk:8080/ad/downloadFile/13.jpg','http://zeebo.lk:8080/ad/downloadFile/14.jpg','Salon La Mondo is one of the leading hair and beauty salons in Sri Lanka which is located in Kandy. In here we offer the widest range of beauty treatments using quality products to give our clients the best possible experience at an affordable price. Our practitioners are fully trained and certified in beauty therapy and bridal dressings; also touch of La mondo you are in the hands of experts who will unwind and relax you in a homely and friendly environment. Salon La Mondo stylists are trained to the highest standards so you can be sure you leave our salon with a fresh new hair look, feeling beautiful and confident to take the world on.','Upto 5 year of service','1-30-2020','http://www.salonlamondo.com/index.html','','All Days','00.00am','yes we are','Salon La Mondo ','http://www.salonlamondo.com/index.html','FREE','',NULL,27,6,17,16),(18,1,'1-30-2019','00.00pm','http://zeebo.lk:8080/ad/downloadFile/splash01.jpg','http://zeebo.lk:8080/ad/downloadFile/splash02.jpg','http://zeebo.lk:8080/ad/downloadFile/splash03.jpg','http://zeebo.lk:8080/ad/downloadFile/splash04.jpg','We take time to understand your hair and the style you desire.\n\nOur professional stylists offer you a unique service using luxury products at affordable rates\n\nRelax and enjoy our wide range of services.\n\nRamzi has made his name famous in hair and beauty for over 3 decades in Sri Lanka. Having been trained in hairdressing & beauty in some of the leading institutions overseas., Ramzi, today operates 4 salons at prime locations in and around Colombo.\n\nHis cutting crew at every salon is trained in the latest worldwide trends, and his clientele include many famous and leading personalities in Sri Lanka.\n\nWe invite you to come and experience the difference at any one of Ramzi\'s salons.','Upto 5 year of service','1-30-2020','http://www.ramzirahaman.lk/salon/index.html','','All DAys','00.00am','yes we are','HAIR & BEAUTY SALONS','http://www.ramzirahaman.lk/salon/index.html','FREE','',NULL,27,8,18,19),(19,1,'2-1-2019','00.00pm','http://zeebo.lk:8080/ad/downloadFile/111111.jpg','http://zeebo.lk:8080/ad/downloadFile/152538723.jpg','http://zeebo.lk:8080/ad/downloadFile/157356482.jpg','http://zeebo.lk:8080/ad/downloadFile/158908001.jpg','3-star guesthouse in Nugegoda with free parking\nPopular property highlights\nFree parking\nFree WiFi\nBusiness centre\nLaundry facilities\nSmoke Free\nLocation\nSituated in Nugegoda, this guesthouse is within 6 miles (10 km) of Traditional Puppet Art Museum, Mount Lavinia Beach and Lanka Hospital. National Zoological Gardens of Sri Lanka and Park Hospital are also within 6 miles (10 km).\n\nProperty features\nAlong with concierge services, this smoke-free guesthouse has laundry facilities and a 24-hour front desk. Free WiFi in public areas and free self parking are also provided. Additionally, a computer station, express check-in and express check-out are on-site.\n\nRoom amenities\nAll 7 rooms provide complimentary wireless Internet access, room service (during limited hours) and coffee/tea makers. Free newspapers, free bottled water and ceiling fans are among the other amenities that guests will find. Limited housekeeping is available.','Upto 5 year of service','2-1-2020','','https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15845.01351601354!2d79.9028268!3d6.8602065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa608504f6ae18e1d!2sBreeze+of+Paradise!5e0!3m2!1sen!2slk!4v1549027571898','All Days','00.00am','yes we are','Breeze of Paradise','','FREE','',NULL,3,4,19,21),(20,1,'2-8-2019','7:00pm','http://zeebo.lk:8080/ad/downloadFile/17103631_1239296336123786_723492246353562514_n.jpg','http://zeebo.lk:8080/ad/downloadFile/24067969_1485147104872040_1229574404365243225_n.jpg','http://zeebo.lk:8080/ad/downloadFile/51620209_2008483829205029_8203524708025499648_n.jpg','http://zeebo.lk:8080/ad/downloadFile/thumb1.jpg','We provide a wide range of services related to hair care with our well trained professionals to cater to all your needs.\n\nYou can email or call us with any inquiries. Follow us on twitter @SalonLIYO Or Contact Us Via Messenger for more details.\n\nWe are ready to serve you. Are you ready for a great new experience?? ','Upto 2 month of service','2-8-2020','https://www.facebook.com/SalonLIYO/','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.1205312918983!2d79.87859621477264!3d6.8761595950311385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a4991f7bad9%3A0x927edbae0b1ca02e!2s224+High+Level+Rd%2C+Colombo+00600!5e0!3m2!1sen!2slk!4v1549631150411','Monday - Sunday','9:00am ','yes we are','Salon LIYO','http://www.salonliyo.com/index.html','FREE','',NULL,27,4,20,22),(21,1,'2-20-2019','Always open','http://zeebo.lk/ad/downloadFile/157452692.jpg','http://zeebo.lk/ad/downloadFile/157453373.jpg','http://zeebo.lk/ad/downloadFile/157453377.jpg','http://zeebo.lk/ad/downloadFile/180417541.jpg','Villa Subuthi is offering accommodation in Battaramulla. Among the various facilities of this property are a garden and a terrace. Certain rooms at the property have a balcony with a garden view.\n\nFree WiFi is accessible to all guests, while some rooms come with a patio.\n\nColombo is 9 km from the guest house, while Negombo is 44 km away. The nearest airport is Bandaranaike International Airport, 37 km from Villa Subuthi.\n\nCouples particularly like the location — they rated it 8.5 for a two-person trip.\n\nWe speak your language!','Upto 2 month of service','2-20-2020','https://www.facebook.com/Villa-Subuthi-153171885360903/','https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15843.497974717835!2d79.9149143!3d6.9056083!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x48b1f27413ab82d3!2sVilla+Subuthi!5e0!3m2!1sen!2slk!4v1550641229054','All Days','Always open','yes we are','Villa Subuthi','https://www.facebook.com/Villa-Subuthi-153171885360903/','FREE','',NULL,3,6,21,23),(22,0,'2-20-2019','','http://zeebo.lk/ad/downloadFile/DSC_0046.jpg','http://zeebo.lk/ad/downloadFile/DSC_0053.jpg','http://zeebo.lk/ad/downloadFile/DSC_0060-2.jpg','http://zeebo.lk/ad/downloadFile/DSC_0069.jpg','This 3-star hotel offers free Wi-Fi, and spacious accommodation. It is situated close to Guaíra Theater, Mueller Mall, and Passeio Público Park.\nBooked 5 times in the last 6 hours\nLatest booking: 13 minutes ago\n','Upto 2 month of service','2-20-2020','','','','','yes we are','best salon','','FREE','',NULL,27,8,22,24),(23,1,'2-22-2019','-','http://zeebo.lk/ad/downloadFile/156672332.jpg','http://zeebo.lk/ad/downloadFile/166583752.jpg','http://zeebo.lk/ad/downloadFile/166583950.jpg','http://zeebo.lk/ad/downloadFile/166584039.jpg','Welcome to Marino Beach Colombo.\n\nA Fascinating Hotel located in the heart of Colombo – Sri Lanka.\n\nWhether it is for business or pleasure, make your visit truly exceptional and memorable by staying at Hotel Marino Beach that offers an experience with a blend of luxury and modernity that you wish would last forever. It boasts of 300 spacious and luxurious rooms, designed with true urban elegance. \n','Upto 5 year of service','2-22-2020','https://www.facebook.com/MarinoBeachColombo/','','all days','24 hours','yes we are','Hotel Marino Beach','https://www.marinobeach.com/welcome.php','FREE','',NULL,3,8,23,25);
/*!40000 ALTER TABLE `advertisement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brokers`
--

DROP TABLE IF EXISTS `brokers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brokers` (
  `broker_id` int(11) NOT NULL AUTO_INCREMENT,
  `active` int(11) DEFAULT NULL,
  `ad_count` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `nic` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`broker_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brokers`
--

LOCK TABLES `brokers` WRITE;
/*!40000 ALTER TABLE `brokers` DISABLE KEYS */;
/*!40000 ALTER TABLE `brokers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `ad_count` int(11) NOT NULL,
  `category_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (2,0,'Wedding Cakes'),(3,0,'Hotels'),(4,0,'Bridal Wear'),(5,0,'Beauticians & Hair Dressers'),(6,0,'DJ Artist'),(7,0,'Photographers'),(8,0,'Flowers'),(9,0,'Car Hire & Limousines'),(10,0,'Bands'),(11,0,'Ashtaka & Jayamangala Gatha'),(12,0,'Balloons'),(13,0,'Accessories & Fancy Items'),(14,0,'Astrologers'),(15,0,'Jewellery - Other'),(16,0,'Cake Structures'),(17,0,'Caterers'),(18,0,'Chocolates'),(19,0,'Cosmetic Products'),(20,0,'Dancing Groups'),(21,0,'Designing & Sewing'),(22,0,'Grooms Wear'),(23,0,'Event Management Companies'),(24,0,'Hiring Tents & Chairs'),(25,0,'Honeymoon & Tour Packages'),(26,0,'Poruwa Suppliers'),(27,0,'Salons'),(28,0,'Wedding Invitations'),(29,0,'Wedding Planners');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `city` (
  `city_id` int(11) NOT NULL AUTO_INCREMENT,
  `ad_count` int(11) NOT NULL,
  `city_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`city_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` VALUES (2,0,'Galle'),(3,0,'Maharagama'),(4,0,'Nugegoda'),(5,0,'kelaniya'),(6,0,'Baththaramulla'),(7,0,'Kandy'),(8,0,'Colombo');
/*!40000 ALTER TABLE `city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inquiry`
--

DROP TABLE IF EXISTS `inquiry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inquiry` (
  `message_id` int(11) NOT NULL AUTO_INCREMENT,
  `city` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `message_date` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `message` varchar(3000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `mobile` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `message_status` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user` int(11) DEFAULT NULL,
  PRIMARY KEY (`message_id`),
  KEY `FKgui61px6fmjnm1yqrdr0ngbjl` (`user`),
  CONSTRAINT `FKgui61px6fmjnm1yqrdr0ngbjl` FOREIGN KEY (`user`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inquiry`
--

LOCK TABLES `inquiry` WRITE;
/*!40000 ALTER TABLE `inquiry` DISABLE KEYS */;
/*!40000 ALTER TABLE `inquiry` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `packages`
--

DROP TABLE IF EXISTS `packages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `packages` (
  `pack_id` int(11) NOT NULL AUTO_INCREMENT,
  `package_desc_1` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `package_des_2` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `package_des_3` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `package_des_4` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `package_des_5` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `package_des_6` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `package_image_1` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `package_image_2` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `package_image_3` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `package_image_4` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `package_image_5` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `package_image_6` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `package_name_1` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `package_name_2` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `package_name_3` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `package_name_4` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `package_name_5` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `package_name_6` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `package_price_1` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `package_price_2` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `package_price_3` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `package_price_4` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `package_price_5` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `package_price_6` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`pack_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `packages`
--

LOCK TABLES `packages` WRITE;
/*!40000 ALTER TABLE `packages` DISABLE KEYS */;
INSERT INTO `packages` VALUES (5,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.','http://www.zeebo.lk/ad/downloadFile/p1.jpg','http://www.zeebo.lk/ad/downloadFile/p2.jpg','http://www.zeebo.lk/ad/downloadFile/p3.jpeg','http://www.zeebo.lk/ad/downloadFile/p4.jpg','http://www.zeebo.lk/ad/downloadFile/p5.jpg','http://www.zeebo.lk/ad/downloadFile/p6.jpg','Test Package  01','Test Package  02','Test Package  03','Test Package  04','Test Package  05','Test Package  06','Rs.1000.00','Rs.2000.00','Rs.3000.00','Rs.4000.00','Rs.5000.00','Rs.6000.00'),(6,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.','http://www.zeebo.lk/ad/downloadFile/wallpaper2you_21019.jpg','http://www.zeebo.lk/ad/downloadFile/michael_jackson_wallpaper_2013.jpg','http://www.zeebo.lk/ad/downloadFile/Fox-Bing-Animal-Photography-HD-Wallpaper-1817119701-1920x1080.jpg','http://www.zeebo.lk/ad/downloadFile/cYY8v4p.jpg','http://www.zeebo.lk/ad/downloadFile/107700.jpg','http://www.zeebo.lk/ad/downloadFile/9851eaa72fd848f4785d21d082dae5f5.jpg','Test Package Ad 02 Pack 01','Test Package Ad 02 Pack 02','Test Package Ad 02 Pack 03','Test Package Ad 02 Pack 04','Test Package Ad 02 Pack 05','Test Package Ad 02 Pack 06','Rs.60000.00','Rs.50000.00','Rs.40000.00','Rs.30000.00','Rs.20000.00','Rs.10000.00'),(7,'https://www.facebook.com/ https://www.facebook.com/','https://www.facebook.com/ https://www.facebook.com/ https://www.facebook.com/ https://www.facebook.com/ https://www.facebook.com/','','','','','http://zeebo.lk:8080/ad/downloadFile/misty.png','http://zeebo.lk:8080/ad/downloadFile/slider-5.jpg',NULL,NULL,NULL,NULL,'01','020','','','','','1000','4000','','','',''),(8,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(9,'','','','','','',NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','','','','','',''),(10,'','','','','','',NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','','','','','',''),(11,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(12,'','','','','','',NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','','','','','',''),(13,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(14,'test package 1 description','test package 2 description ','test package 1 description','test package 4 description','test package 5 description','test package 1 description','http://www.zeebo.lk/ad/downloadFile/Adidas_logo_abstract-wallpaper-10157849.jpg','http://www.zeebo.lk/ad/downloadFile/BeatsAudio-wallpaper-10186179.jpg','http://www.zeebo.lk/ad/downloadFile/Expect_Nothing-wallpaper-9836533.jpg','http://www.zeebo.lk/ad/downloadFile/Eyezzz-wallpaper-10044291.jpg','http://www.zeebo.lk/ad/downloadFile/Elephant-wallpaper-9795434.jpg','http://www.zeebo.lk/ad/downloadFile/Digital_Art-wallpaper-10267343.jpg','test package 1','test package 2','test package 3','test package 4','test package 5 ','test package 6','5000','7500','10000','12500','15000','17500'),(15,'https://www.facebook.com/slegasrilanka/photos/a.423341368093727/535220296905833/?section=PUBLISHED_POSTS&sort[0]=published_time_descending','https://www.facebook.com/slegasrilanka/photos/a.423341368093727/535220296905833/?section=PUBLISHED_POSTS&sort[0]=published_time_descending','','','','','http://zeebo.lk:8080/ad/downloadFile/Wedding%20Transport%20Pic%204%20(Take%20out%20the%20partner%20logo%20and%20place%20pic).jpg','http://zeebo.lk:8080/ad/downloadFile/Wedding%20Transport%20Pic%205.jpg',NULL,NULL,NULL,NULL,'sfgtghtn','danne','','','','','220000','330000','','','',''),(16,'https://www.google.lk/maps/place/6%C2%B058\'22.5%22N+79%C2%B055\'16.9%22E/@6.972926,79.9205922,18z/data=!3m1!4b1!4m13!1m6!3m5!1s0x3ae257f9d55c6bd7:0xf5023c8140457396!2sSampath+Bank+ATM,CDM!8m2!3d6.9739568!4d79.9221388!3m5!1s0x0:0x0!7e2!8m','https://www.google.lk/maps/place/6%C2%B058\'22.5%22N+79%C2%B055\'16.9%22E/@6.972926,79.9205922,18z/data=!3m1!4b1!4m13!1m6!3m5!1s0x3ae257f9d55c6bd7:0xf5023c8140457396!2sSampath+Bank+ATM,CDM!8m2!3d6.9739568!4d79.9221388!3m5!1s0x0:0x0!7e2!8m2!3d6.9729255!4d79.9213663','','','','','http://zeebo.lk:8080/ad/downloadFile/download%20(5).jpg','http://zeebo.lk:8080/ad/downloadFile/download%20(7).jpg',NULL,NULL,NULL,NULL,'gggg','dccccc','','','','','2000','452155','','','',''),(17,'01 Kandyan Style \n02. Indian Style     \n03. Western Style \n04. Goingaway Style \n05. Modern Kandyan Style','01. Facial & Clean up (Gold/Herbals) \n02. Threading & Eye Brow Shaping \n03. Waxing\n04. Manicure & Pedicure \n05 Acralic & Gel \n06. Nails Nail Art  ','01. Hair Cuts (Ladies / Gents) \n02. Hair Coloring / Hair Extention \n03. Blow Dry, Setting, Hair Styling \n04. Re-Bonding \n05. Straightening, Relaxing \n06. Permanent Hair Waving','01. Oil & Tonic Massage \n02. Hair & Scalp Treatments \n03. Henna Treatment \n04. Pimple Treatments \n05. Wart Removing','','','http://zeebo.lk:8080/ad/downloadFile/a_01.jpg','http://zeebo.lk:8080/ad/downloadFile/a_02.jpg','http://zeebo.lk:8080/ad/downloadFile/a_03.jpg','http://zeebo.lk:8080/ad/downloadFile/a_04.jpg',NULL,NULL,'BRIDAL DRESSING','BEAUTY CARE','HAIR CARE','OTHER TREATMENTS','','','','','','','',''),(18,'Our experienced stylists are highly trained in precision cutting, styling & professional colouring. We take great care in making sure you feel at ease discussing your desired look and dedicate ourselves to going the extra mile to listen and help to achieve your dream cut or colour.\n\nOur product offering:\n\nHair Cuts\nBlow-Drys\nLong Hair innovative styles\nPerms\nStraightening / Bonding / Relaxing\nHighlights & Tints\nRoller-sets\nScalp-massages\n','Step into our Beauty Room – where you are offered a wide range of beauty treatments, including full relaxation Gold facials with head and shoulder massages or the option of Sothys skin care facials, with full advice given on skin care & products.\n\nGold Facial - (Jovees)\nFacial (Sothys)\nClean ups\nGalvanic Treatment\nHigh Frequency Treatment\nWatts Burn Treatment\nManicure\nPedicure\nWaxing\nThreading\nEye brow shaping\nBleach','Hair, Makeup, Dressing for all ages for weddings, be at a party, anniversaries or your birthday','Ramzi has dressed some of Sri Lanka\'s most famous and beautiful brides, while coordinating many successful weddings with exceptional flair, meticulous attention to detail and clockwork precision.\nFor your very special day, Ramzi offers you:\n\nDesigning the Bridal attire – distinct, personalized designs in Traditional, western or ethnic styles\nDesign of clothing for bridal retinue\nShopping for accessories for bride, groom and retinue\nHair, make-up and dressing of bride and retinue','Our experienced stylists are highly trained in precision cutting, styling & professional colouring. We take great care in making sure you feel every male ego is satisfied and at ease discussing your desired look and achieving your chosen cut or colour.\n\nHair Cuts\nStraightening / Bonding / Relaxing\nHighlights & Tints\nScalp-massages','Kids haircuts\nBlow-Drys\nStyling for schools, party or any occasion','http://zeebo.lk:8080/ad/downloadFile/01Hi.jpg','http://zeebo.lk:8080/ad/downloadFile/04Hi.jpg','http://zeebo.lk:8080/ad/downloadFile/10Hi.jpg','http://zeebo.lk:8080/ad/downloadFile/03Hi.jpg','http://zeebo.lk:8080/ad/downloadFile/06Hi.jpg','http://zeebo.lk:8080/ad/downloadFile/16Hi.jpg','Real pampering for the lady','Because every woman is naturally beautiful','Dress yourself to look the best, any age, body or face!','Dream weddings become reality…here!','Pure masculine attention','Kids Services','','','','','',''),(19,'Non-refundable\nBreakfast included\nFree parking\nFree Internet','Non-refundable\nFree parking\nFree Internet\nBreakfast optional - US$ 3.50 per person, per night','Non-refundable\nBreakfast included\nFree parking\nFree Internet','Non-refundable\nBreakfast included\nFree parking\nFree Internet','Non-refundable\nBreakfast included\nFree parking\nFree Internet','','http://zeebo.lk:8080/ad/downloadFile/157356668.jpg','http://zeebo.lk:8080/ad/downloadFile/16349214.jpg','http://zeebo.lk:8080/ad/downloadFile/136584735.jpg','http://zeebo.lk:8080/ad/downloadFile/157356482.jpg','http://zeebo.lk:8080/ad/downloadFile/152538723.jpg',NULL,'Twin Room 145 square feet 1 Single Bed Room sleeps 2 guests (up to 1 child)','Double Standard - Room Only','Deluxe Triple Room 226 square feet 1 Double Bed and 1 Single Bed Room sleeps 3 guests (up to 1 child)','Quadruple Room 161 square feet 2 Double Beds Room sleeps 4 guests','Deluxe Single Room 205 square feet 1 Single Bed Room sleeps 1 guest','','Rs:2,500','Rs:2,660','Rs:3,231','Rs:3,877','Exceeds max. adults',''),(20,'Hair Cut / Hair Cut / Hair Highlighting  / Hair Straightening','Hair Relaxing / Hair Setting / Hair Treatments / Keratin Therapy','Hair Brading','Facials & Cleanup / Face Treatments / Whitening Treatments','Threading / Waxing / Makeup','Manicure / Pedicure / Nail Arts','http://zeebo.lk:8080/ad/downloadFile/ser_1_thum1.jpg','http://zeebo.lk:8080/ad/downloadFile/ser_1_thum5.jpg','http://zeebo.lk:8080/ad/downloadFile/ser_1_thum9.jpg','http://zeebo.lk:8080/ad/downloadFile/ser_2_thum2.jpg','http://zeebo.lk:8080/ad/downloadFile/ser_2_thum4.jpg','http://zeebo.lk:8080/ad/downloadFile/ser_2_thum10.jpg','Hair Cut','Hair Relaxing','Hair Brading','Facials & Cleanup','Threading','Manicure','','','','','',''),(21,'Room size 13 m²\nThis double room features a balcony, electric kettle and tile/marble floor.\n\nRoom facilities:\n\n• Shower\n• Balcony\n• Fan\n• Toilet\n• Patio\n• Extra Long Beds (> 2 metres)\n• Bath or Shower\n• Soundproofing\n• Tile/Marble floor\n• View\n• Dining area\n• Towels/Sheets (extra fee)\n• Wardrobe or closet\n• Garden view\n• City view\n• Terrace\n• Towels\n• Linen\n• Dining table\n• Upper floors accessible by stairs only\n• Clothes rack\n• Drying rack for clothing\n• Toilet paper\n• Books, DVDs or music for children\nFree WiFi!','Room size 11 m²\nThis double room features a soundproofing, tile/marble floor and dining area.\n\nRoom facilities:\n\n• Shower\n• Fan\n• Toilet\n• Bath or Shower\n• Soundproofing\n• Tile/Marble floor\n• Dining area\n• Towels/Sheets (extra fee)\n• Terrace\n• Towels\n• Linen\n• Dining table\n• Entire unit located on ground floor\n• Clothes rack\n• Drying rack for clothing\n• Toilet paper\n• Books, DVDs or music for children\nFree WiFi!','Room size 19 m²\nRoom facilities:\n\n• Tea/Coffee Maker\n• Shower\n• Bath\n• Air conditioning\n• Hairdryer\n• Free toiletries\n• Fan\n• Toilet\n• Patio\n• Dressing Room\n• Slippers\n• Satellite Channels\n• Bath or Shower\n• Soundproofing\n• Tile/Marble floor\n• View\n• Dining area\n• Electric kettle\n• Towels/Sheets (extra fee)\n• Wardrobe or closet\n• Bidet\n• Garden view\n• City view\n• Terrace\n• Towels\n• Linen\n• Dining table\n• Clothes rack\n• Drying rack for clothing\n• Toilet paper\n• Books, DVDs or music for children\nFree WiFi!\n\n','Apartment size: 111 m²\nApartment facilities:\n\n• Tea/Coffee Maker\n• Air conditioning\n• Kitchen\n• Flat-screen TV\n• Soundproofing\n• View\n• Electric kettle\n• Kitchenware\n• Towels/Sheets (extra fee)\n• Towels\n• Linen\n• Toilet paper\n• Sofa bed\nFree WiFi!','','','http://zeebo.lk/ad/downloadFile/157452692.jpg','http://zeebo.lk/ad/downloadFile/157452878.jpg','http://zeebo.lk/ad/downloadFile/180415048.jpg','http://zeebo.lk/ad/downloadFile/181725327.jpg',NULL,NULL,'Deluxe Room with Balcony and Private Bathroom','Standard Room with Private External Bathroom on Ground Floor','Deluxe King Room','Two-Bedroom Apartment','','','','','','','',''),(22,'This 3-star hotel offers free Wi-Fi, and spacious accommodation. It is situated close to Guaíra Theater, Mueller Mall, and Passeio Público Park.\nBooked 5 times in the last 6 hours\nLatest booking: 13 minutes ago\n','','','','','','http://zeebo.lk/ad/downloadFile/DSC_0080%20-%20Copy%20(2).jpg',NULL,NULL,NULL,NULL,NULL,'hn','','','','','','1000','','','','',''),(23,'• 35 SQUARE METRES.\n• SPACIOUS BATHROOM WITH GLASS ENCLOSURE.\n• 50” FLAT-SCREEN TELEVISION WITH CABLE CHANNELS & MOVIES ON DEMAND. \n• PRIVILEGED ACCESS TO THE ICONIC INFINITY POOL AND ROOFTOP GARDEN. \n• BALCONY WITH LIMITED SEA VIEW.\n\n','• 35 SQUARE METRES\n• BREAKFAST INCLUDED\n• SPACIOUS BATHROOM WITH GLASS ENCLOSURE\n• 50” FLAT-SCREEN TELEVISION WITH CABLE CHANNELS & MOVIES ON DEMAND\n• PRIVILEGED ACCESS TO THE ICONIC INFINITY POOL AND ROOFTOP GARDEN\n• BALCONY WITH LIMITED SEA VIEW','• 35 SQUARE METRES\n• BREAKFAST INCLUDED\n• SPACIOUS BATHROOM WITH GLASS ENCLOSURE\n• 50” FLAT-SCREEN TELEVISION WITH CABLE CHANNELS & MOVIES ON DEMAND\n• PRIVILEGED ACCESS TO THE ICONIC INFINITY POOL AND ROOFTOP GARDEN\n• BALCONY WITH PARTIAL SEA VIEW','','','','http://zeebo.lk/ad/downloadFile/166566758.jpg','http://zeebo.lk/ad/downloadFile/166558499.jpg','http://zeebo.lk/ad/downloadFile/166570613.jpg',NULL,NULL,NULL,'SUPERIOR ROOM (ROOM ONLY)','SUPERIOR ROOM (WITH BREAK FIRST)','DELUXE ROOM','','','','USD 75 / Night (Taxes Exclusive)','USD 85/ Night (Taxes Exclusive)','USD 95/ Night (Taxes Exclusive)','','','');
/*!40000 ALTER TABLE `packages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payment` (
  `payment_id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`payment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role` (
  `role_id` int(11) NOT NULL AUTO_INCREMENT,
  `role` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (2,'ADMIN'),(3,'ADMIN'),(4,'ADMIN'),(5,'ADMIN'),(6,'ADMIN'),(7,'ADMIN'),(8,'ADMIN'),(9,'ADMIN'),(10,'ADMIN');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `active` int(11) DEFAULT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `profile_image` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `nic` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (3,1,'never mind','ADMIN@ADMIN.COM',NULL,'ADMIN','ADMIN','never mind','ADMIN','never mind'),(4,1,'Galle','dhanushka@zeebo.com','http://www.zeebo.lk/downloadFile/dhanushka.jpg','Sandaruwan','Dhanushka','961723671v','root','0711215863'),(5,1,NULL,'tesr12@zeboo.com',NULL,'please update profile','test12',NULL,'12345',NULL),(6,1,'navinna, maharagama','dilan@zeboo.com','http://zeebo.lk:8080/downloadFile/545638_349571631763949_425984029_n.jpg','please update profile','dilan','913413865v','12345','0171514418'),(7,1,'never mind','ADMIN@ADMIN.COM',NULL,'ADMIN','ADMIN','never mind','ADMIN','never mind'),(8,1,'dallwalla, UNWAtuna','ravindu@gmail.com','http://www.zeebo.lk/downloadFile/3_D_Monster-wallpaper-10079557.jpg','please update profile','ravindu wijepala','960100344v','123456','0755266075'),(9,1,'never mind','ADMIN@ADMIN.COM',NULL,'ADMIN','ADMIN','never mind','ADMIN','never mind'),(10,1,'never mind','ADMIN@ADMIN.COM',NULL,'ADMIN','ADMIN','never mind','ADMIN','never mind'),(11,1,'never mind','ADMIN@ADMIN.COM',NULL,'ADMIN','ADMIN','never mind','ADMIN','never mind'),(12,1,'never mind','ADMIN@ADMIN.COM',NULL,'ADMIN','ADMIN','never mind','ADMIN','never mind'),(13,1,'jhjhgrf  kjfdhhurmsed','anushka@gmail.com','http://zeebo.lk:8080/downloadFile/Wedding%20Transport%20Pic%201.jpg','please update profile','anushka','9134785146v','12345','0171514418'),(14,1,'Navinnaa, maharagama','kasun@zeebo.com','http://zeebo.lk:8080/downloadFile/200px-Frankie_Knuckles_@_ADE_2012.jpg','please update profile','kasun','996548246v','12345','07122475587'),(15,1,'never mind','ADMIN@ADMIN.COM',NULL,'ADMIN','ADMIN','never mind','ADMIN','never mind'),(16,1,'490/B, Tkalangama North, Baththaramulla, Sri Lanka','lamondo@gmail.com','http://zeebo.lk:8080/downloadFile/01.jpg','please update profile','Salon La Mondo','','12345','+94 777 283 123'),(17,1,NULL,'abc@abc.com',NULL,'please update profile','qwe',NULL,'root',NULL),(18,1,'never mind','ADMIN@ADMIN.COM',NULL,'ADMIN','ADMIN','never mind','ADMIN','never mind'),(19,1,'65/7A, D.S. Senanayake Mawatha Borella, Colombo 04, Sri Lanka.','ramzis@eureka.lk','http://zeebo.lk:8080/downloadFile/splash01.jpg','please update profile','ramzi','','12345','0112 69 89 32 , 0112 68 37 22'),(20,1,'never mind','ADMIN@ADMIN.COM',NULL,'ADMIN','ADMIN','never mind','ADMIN','never mind'),(21,1,'Address: 35/8A Meegahawatta Rd, Nugegoda','breeze@gmail.com','http://zeebo.lk:8080/downloadFile/unnamed.jpg','please update profile','Breeze of Paradise','','12345','077 772 5985'),(22,1,' No.224A, Highlevel Road, Jambugasmulla (12.39 km) 10250 Nugegoda','salonliyo@gmail.com','http://zeebo.lk:8080/downloadFile/17103631_1239296336123786_723492246353562514_n.jpg','please update profile','Salon LIYO','','12345',' 077 388 5122'),(23,1,'694 Subuthi Mawatha, Subuthipura, 10120 Battaramulla, Sri Lanka –','villasubuthi@gmail.com','http://zeebo.lk/downloadFile/157453377.jpg','please update profile','Villa Subuthi','','12345',''),(24,1,'','rajithashaminda690@gmail.com',NULL,'please update profile','rajitha','','12345','07121514418'),(25,1,' Hotel Marino Beach, No 590, Marine Drive, Colombo 03','info@marinobeach.com','http://zeebo.lk/downloadFile/156672332.jpg','please update profile','Hotel Marino Beach','','marino123456','(+94) 112 375 375');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_role`
--

DROP TABLE IF EXISTS `user_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_role` (
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`),
  KEY `FKa68196081fvovjhkek5m97n3y` (`role_id`),
  CONSTRAINT `FK859n2jvi8ivhui0rl0esws6o` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKa68196081fvovjhkek5m97n3y` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_role`
--

LOCK TABLES `user_role` WRITE;
/*!40000 ALTER TABLE `user_role` DISABLE KEYS */;
INSERT INTO `user_role` VALUES (3,2),(7,3),(9,4),(10,5),(11,6),(12,7),(15,8),(18,9),(20,10);
/*!40000 ALTER TABLE `user_role` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-02-23  6:29:22
