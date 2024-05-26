-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 08, 2022 at 03:12 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crowdfunding`
--

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `end_date` int(11) DEFAULT NULL,
  `pledged` int(11) DEFAULT NULL,
  `goal` int(11) NOT NULL,
  `status` varchar(64) NOT NULL,
  `ts` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`id`, `project_id`, `end_date`, `pledged`, `goal`, `status`, `ts`) VALUES
(3, 16, 20221228, NULL, 50000, 'In Progress', '2022-12-07 23:35:42');

-- --------------------------------------------------------

--
-- Table structure for table `material`
--

CREATE TABLE `material` (
  `id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `description` text NOT NULL,
  `link` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `material`
--

INSERT INTO `material` (`id`, `project_id`, `description`, `link`) VALUES
(14, 16, 'Documents', 'C:\\fakepath\\html.png');

-- --------------------------------------------------------

--
-- Table structure for table `organization`
--

CREATE TABLE `organization` (
  `id` int(11) NOT NULL,
  `organization_name` varchar(64) NOT NULL,
  `details` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `organization`
--

INSERT INTO `organization` (`id`, `organization_name`, `details`) VALUES
(27, 'Fast NU', 'CS University'),
(28, 'ojoj', 'ojo'),
(29, 'hih', 'iji');

-- --------------------------------------------------------

--
-- Table structure for table `participant`
--

CREATE TABLE `participant` (
  `id` int(11) NOT NULL,
  `user_account_id` int(11) NOT NULL,
  `role` varchar(64) NOT NULL,
  `organization_id` int(11) NOT NULL,
  `participated_in` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `participant`
--

INSERT INTO `participant` (`id`, `user_account_id`, `role`, `organization_id`, `participated_in`) VALUES
(23, 43, 'Student', 27, 1),
(24, 43, 'no', 28, 1),
(25, 40, 'hhu', 29, 1);

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `id` int(11) NOT NULL,
  `project_name` varchar(256) NOT NULL,
  `user_account_id` int(11) NOT NULL,
  `organization_id` int(11) NOT NULL,
  `project_description` text NOT NULL,
  `project_location` varchar(64) NOT NULL,
  `status` varchar(64) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `goal` decimal(15,0) NOT NULL,
  `pledged` decimal(15,0) DEFAULT NULL,
  `investors` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`id`, `project_name`, `user_account_id`, `organization_id`, `project_description`, `project_location`, `status`, `start_date`, `end_date`, `goal`, `pledged`, `investors`) VALUES
(16, 'Biryani Stall', 43, 27, 'Good biryani will now be available at NUCES', 'KHI/PAK', 'In Progress', '2022-12-01', '2022-12-28', '50000', '20000', 1);

--
-- Triggers `project`
--
DELIMITER $$
CREATE TRIGGER `project_to_history` BEFORE UPDATE ON `project` FOR EACH ROW INSERT INTO history SET project_id=OLD.id, status=OLD.status,end_date=OLD.end_date,goal=OLD.goal,pledged=OLD.pledged
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `project_investor`
--

CREATE TABLE `project_investor` (
  `id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `user_account_id` int(11) NOT NULL,
  `pledged` decimal(10,0) NOT NULL,
  `ts` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `project_investor`
--

INSERT INTO `project_investor` (`id`, `project_id`, `user_account_id`, `pledged`, `ts`) VALUES
(15, 16, 43, '20000', '2022-12-07 23:35:42');

-- --------------------------------------------------------

--
-- Table structure for table `user_account`
--

CREATE TABLE `user_account` (
  `id` int(11) NOT NULL,
  `first_name` varchar(64) NOT NULL,
  `last_name` varchar(64) NOT NULL,
  `email` varchar(64) NOT NULL,
  `password` varchar(64) NOT NULL,
  `project_supported` int(11) NOT NULL,
  `total_amount` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_account`
--

INSERT INTO `user_account` (`id`, `first_name`, `last_name`, `email`, `password`, `project_supported`, `total_amount`) VALUES
(40, 'Muhammad Wamiq', 'Akram', 'wamiqakram@gmail.com', '$2a$05$Tov9QThdDRvRFHKUaH9aYea6kZWukZm0pDARTzh9eSYgNbzdqdLtK', 0, '0'),
(43, 'Zulnoor', 'Siddiqui', 'zuni69@gmail.com', '$2a$05$pn7Zf1q08zmJOdm58jmBveNt65rAh0WXjqacnYSlfcdEBhonjf.ji', 0, '0');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `project_history` (`project_id`);

--
-- Indexes for table `material`
--
ALTER TABLE `material`
  ADD PRIMARY KEY (`id`),
  ADD KEY `material_project` (`project_id`);

--
-- Indexes for table `organization`
--
ALTER TABLE `organization`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `participant`
--
ALTER TABLE `participant`
  ADD PRIMARY KEY (`id`),
  ADD KEY `organization_participant_fk` (`organization_id`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `project_name` (`project_name`),
  ADD KEY `project_user_account` (`user_account_id`);

--
-- Indexes for table `project_investor`
--
ALTER TABLE `project_investor`
  ADD PRIMARY KEY (`id`),
  ADD KEY `project_investor_user_account` (`user_account_id`),
  ADD KEY `project_investor_project` (`project_id`);

--
-- Indexes for table `user_account`
--
ALTER TABLE `user_account`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `material`
--
ALTER TABLE `material`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `organization`
--
ALTER TABLE `organization`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `participant`
--
ALTER TABLE `participant`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `project_investor`
--
ALTER TABLE `project_investor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `user_account`
--
ALTER TABLE `user_account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `history`
--
ALTER TABLE `history`
  ADD CONSTRAINT `project_history` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `material`
--
ALTER TABLE `material`
  ADD CONSTRAINT `material_project` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `participant`
--
ALTER TABLE `participant`
  ADD CONSTRAINT `organization_participant_fk` FOREIGN KEY (`organization_id`) REFERENCES `organization` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `project`
--
ALTER TABLE `project`
  ADD CONSTRAINT `project_user_account` FOREIGN KEY (`user_account_id`) REFERENCES `user_account` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `project_investor`
--
ALTER TABLE `project_investor`
  ADD CONSTRAINT `project_investor_project` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `project_investor_user_account` FOREIGN KEY (`user_account_id`) REFERENCES `user_account` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
