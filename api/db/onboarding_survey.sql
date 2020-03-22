-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 22, 2020 at 11:43 PM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `onboarding_survey`
--

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `text` varchar(255) DEFAULT NULL,
  `answer1` varchar(100) DEFAULT NULL,
  `answer2` varchar(100) DEFAULT NULL,
  `answer3` varchar(100) DEFAULT NULL,
  `answer4` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `text`, `answer1`, `answer2`, `answer3`, `answer4`) VALUES
(1, 'How often do you eat meat and dairy?', 'Daily', '3+ times per week', '1 or 2 times', 'Not at all'),
(2, 'How big are your portions sizes?', 'Smaller than average', 'Average', 'Larger than average', 'I\'m not sure'),
(3, 'How much food ends up wasted in your household?', 'None', '1-5 plates per week', '6-10 plates per week', 'More than 10 plates per week'),
(4, 'How often do you eat avocados, asparagus, kiwi, fruit, pineapples?', 'Daily', '1 or 2 times', '3+ times per week', 'Not at all'),
(5, 'How often do you eat seasonal veg from Europe?', 'Daily', '3+ times per week', '1 or 2 times', 'Not at all');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
