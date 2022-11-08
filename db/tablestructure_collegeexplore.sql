-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 22, 2022 at 06:56 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tablestructure_collegeexplore`
--

-- --------------------------------------------------------

--
-- Table structure for table `branch_cutoff`
--

CREATE TABLE `branch_cutoff` (
  `branch_name` varchar(255) NOT NULL,
  `college_id` int(10) NOT NULL,
  `cutoff` smallint(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `branch_cutoff`
--

INSERT INTO `branch_cutoff` (`branch_name`, `college_id`, `cutoff`) VALUES
('Information Technology', 1, 80),
('Information Technology', 2, 85),
('Information Technology', 3, 95),
('Information Technology', 4, 75),
('Information Technology', 5, 78),
('Information Technology', 6, 80),
('Information Technology', 7, 85),
('Information Technology', 8, 60),
('Information Technology', 9, 50),
('Information Technology', 10, 55),
('Information Technology', 11, 60),
('Information Technology', 12, 70),
('Information Technology', 13, 80),
('Information Technology', 14, 75),
('Information Technology', 15, 75),
('Information Technology', 16, 75),
('Information Technology', 17, 80),
('Information Technology', 18, 50),
('Computer Science and Engineering', 1, 90),
('Computer Science and Engineering', 2, 120),
('Computer Science and Engineering', 3, 110),
('Computer Science and Engineering', 4, 150),
('Computer Science and Engineering', 5, 120),
('Computer Science and Engineering', 6, 130),
('Computer Science and Engineering', 7, 125),
('Computer Science and Engineering', 8, 125),
('Computer Science and Engineering', 9, 130),
('Computer Science and Engineering', 10, 110),
('Computer Science and Engineering', 11, 120),
('Computer Science and Engineering', 12, 110),
('Computer Science and Engineering', 13, 110),
('Computer Science and Engineering', 14, 125),
('Computer Science and Engineering', 15, 140),
('Computer Science and Engineering', 16, 120),
('Computer Science and Engineering', 17, 125),
('Computer Science and Engineering', 18, 100),
('Ceramic Technology', 1, 90),
('Mechanical Engineering', 2, 95),
('Mechanical Engineering', 3, 95),
('Mechanical Engineering', 4, 90),
('Mechanical Engineering', 5, 100),
('Mechanical Engineering', 6, 120),
('Mechanical Engineering', 7, 90),
('Mechanical Engineering', 8, 90),
('Mechanical Engineering', 9, 90),
('Mechanical Engineering', 10, 80),
('Mechanical Engineering', 11, 95),
('Mechanical Engineering', 12, 110),
('Mechanical Engineering', 13, 120),
('Mechanical Engineering', 14, 110),
('Mechanical Engineering', 15, 100),
('Mechanical Engineering', 16, 100),
('Mechanical Engineering', 17, 90),
('Mechanical Engineering', 18, 99),
('Electrical Engineering', 2, 85),
('Electrical Engineering', 3, 80),
('Electrical Engineering', 4, 85),
('Electrical Engineering', 5, 90),
('Electrical Engineering', 6, 85),
('Electrical Engineering', 7, 75),
('Electrical Engineering', 8, 70),
('Electrical Engineering', 9, 90),
('Electrical Engineering', 10, 100),
('Electrical Engineering', 11, 110),
('Electrical Engineering', 12, 90),
('Electrical Engineering', 13, 100),
('Electrical Engineering', 14, 90),
('Electrical Engineering', 15, 85),
('Electrical Engineering', 16, 90),
('Electrical Engineering', 17, 100),
('Electrical Engineering', 18, 110);

-- --------------------------------------------------------

--
-- Table structure for table `college_data`
--

CREATE TABLE `college_data` (
  `college_id` int(10) NOT NULL,
  `college_name` varchar(255) NOT NULL,
  `state_id` smallint(2) NOT NULL,
  `college_website` varchar(255) DEFAULT NULL,
  `college_fees` int(11) DEFAULT NULL,
  `college_placement` smallint(3) DEFAULT NULL,
  `college_infrastructure` varchar(255) DEFAULT NULL,
  `college_faculty` varchar(255) DEFAULT NULL,
  `address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `college_data`
--

INSERT INTO `college_data` (`college_id`, `college_name`, `state_id`, `college_website`, `college_fees`, `college_placement`, `college_infrastructure`, `college_faculty`, `address`) VALUES
(1, 'Government College of Engineering and Ceramic Technology', 1, 'http://gcect.ac.in/', 8200, 100, 'Average', 'Good', 'Beleghata, Kolkata, West Bengal'),
(2, 'Jadavpur University ', 1, 'http://www.jaduniv.edu.in', 4500, 100, 'Good', 'Good', 'Jadavpur, Kolkata, West Bengal'),
(3, 'Abacus Institute of Engineering and Management', 1, 'http://www.abacusinstitute.org/', 400000, 90, 'Good', 'Fair', 'Hooghly, Mogra, West Bengal'),
(4, 'PES College of Engineering', 2, 'http://www.pescemandya.org', 500000, 100, 'Excellent', 'Good', 'Mandya, Karnataka'),
(5, 'KLE Technological University', 2, 'http://www.kletech.ac.in', 450000, 95, 'Excellent', 'Excellent', 'Hubli, Karnataka'),
(6, 'R.V. College of Engineering', 2, 'https://www.rvce.edu.in/', 550000, 90, 'Good', 'Excellent', 'Bangalore, Karnataka'),
(7, 'SRM Easwari Engineering College', 3, 'http://www.srmeaswari.ac.in', 650000, 100, 'Good ', 'Good', 'Ramapuram, Chennai, Tamil Nadu'),
(8, 'Velammal Engineering College', 3, 'http://www.velammal.edu.in', 455000, 90, 'Good ', 'Excellent', 'Velammal Nagar, Chennai, Tamil Nadu'),
(9, 'Anna University', 3, 'https://www.annauniv.edu/', 138000, 100, 'Excellent', 'Good', 'Guindy, Chennai, Tamil Nadu'),
(10, 'Kalinga Institute of Industrial Technology', 4, 'https://kiit.ac.in/', 200000, 100, 'Excellent', 'Excellent', 'KIIT Road, Bhubaneshwar, Odisha'),
(11, 'CV Raman Global University', 4, 'http://www.cgu-odisha.ac.in/', 300000, 90, 'Good', 'Good', 'Bhubaneshwar,Odisha'),
(12, 'Silicon Institute of Technology', 4, 'https://silicon.ac.in/', 250000, 85, 'Fair', 'Good', 'Bhubaneshwar,Odisha'),
(13, 'ER&DCI Institute of Technology', 5, 'erdciit.ac.in', 40000, 80, 'Good', 'Fair', 'Thiruvananthapuram, Kerala'),
(14, 'TKM College of Engineering', 5, 'https://www.tkmce.ac.in/', 250000, 90, 'Good', 'Good', 'Peroor, Kerala'),
(15, 'Mar Baselios College of Engineering and Technology', 5, 'https://mbcet.ac.in/', 400000, 82, 'Good', 'Fair', 'Thiruvananthapuram, Kerala'),
(16, 'Veermata Jijabai Technological Institute', 6, 'http://www.vjti.ac.in/', 255000, 90, 'Good', 'Excellent', 'Mumbai, Maharashtra'),
(17, 'Dr. D. Y. Patil Institute of Technology', 6, 'https://engg.dypvp.edu.in/', 300000, 95, 'Excellent', 'Good', 'Pimpri, Pune, Maharashtra'),
(18, 'K. J. Somaiya College of Engineering', 6, 'https://kjsce.somaiya.edu/kjsce/', 300000, 90, 'Good ', 'Good', 'Ghatkopar East, Mumbai, Maharashtra');

-- --------------------------------------------------------

--
-- Table structure for table `state`
--

CREATE TABLE `state` (
  `state_id` smallint(2) NOT NULL,
  `state_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `state`
--

INSERT INTO `state` (`state_id`, `state_name`) VALUES
(1, 'West Bengal'),
(2, 'Karnataka'),
(3, 'Tamil Nadu'),
(4, 'Odisha'),
(5, 'Kerala'),
(6, 'Maharastra');

-- --------------------------------------------------------

--
-- Table structure for table `user_data`
--

CREATE TABLE `user_data` (
  `user_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `branch_cutoff`
--
ALTER TABLE `branch_cutoff`
  ADD KEY `college_id` (`college_id`);

--
-- Indexes for table `college_data`
--
ALTER TABLE `college_data`
  ADD PRIMARY KEY (`college_id`),
  ADD KEY `state_id` (`state_id`);

--
-- Indexes for table `state`
--
ALTER TABLE `state`
  ADD PRIMARY KEY (`state_id`);

--
-- Indexes for table `user_data`
--
ALTER TABLE `user_data`
  ADD PRIMARY KEY (`email`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `branch_cutoff`
--
ALTER TABLE `branch_cutoff`
  ADD CONSTRAINT `branch_cutoff_ibfk_1` FOREIGN KEY (`college_id`) REFERENCES `college_data` (`college_id`);

--
-- Constraints for table `college_data`
--
ALTER TABLE `college_data`
  ADD CONSTRAINT `college_data_ibfk_1` FOREIGN KEY (`state_id`) REFERENCES `state` (`state_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
