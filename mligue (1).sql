-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 14 mars 2024 à 16:59
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `mligue`
--

-- --------------------------------------------------------

--
-- Structure de la table `panier`
--

CREATE TABLE `panier` (
  `id` int(11) NOT NULL,
  `pid` char(36) NOT NULL,
  `uid` char(36) NOT NULL,
  `name` varchar(100) NOT NULL,
  `details` varchar(200) NOT NULL,
  `price` int(10) NOT NULL,
  `image` varchar(100) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `products`
--

CREATE TABLE `products` (
  `pid` char(36) NOT NULL,
  `name` varchar(100) NOT NULL,
  `details` varchar(200) NOT NULL,
  `price` int(10) NOT NULL,
  `image` varchar(100) NOT NULL,
  `quantity` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `products`
--

INSERT INTO `products` (`pid`, `name`, `details`, `price`, `image`, `quantity`) VALUES
('3d89f0ae-b7f2-43f3-93bd-a9923f209acb', 'Ballon de Foot', 'Ballon Nike', 7, 'uploads\\1710423972826.jpg', 0),
('b3321b07-8c3b-4381-a7c9-8f30f4c58879', 'Ballon de Rugby', 'Rugby', 5, 'uploads\\1710424393054.jpg', 0),
('b6a22553-3ce6-440a-851d-ac8cd5e7cd31', 'Ballon de Basket', 'Ballon de Basket ', 6, 'uploads\\1710424364070.jpg', 0);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `uid` char(36) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `admin` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`uid`, `name`, `email`, `password`, `admin`) VALUES
('0420db7c-e9ea-4dd9-b944-82dd8c3cd034', 'oe', 'oe@a', '$2b$10$gNRftEJ.48sHWkl.SLBySOf27hviGUwFM0/zHcnispm1HFVN4GnOy', 0),
('0666187a-a1dc-4eb5-a74b-8d5c9a065aca', 'Antonio', 'antonio@ipssi.com', '$2b$10$IuI.NeW3CnVgDwX8O6TgtuIb3a7OrvJHcmwgjTGSkhSlJ2UmEyYJS', 0),
('0f8ed3b1-524a-46d1-9e6a-7b9404f02ae2', 'Antonio', 'antonio@ipssi.com', '$2b$10$nUMsbZ6A3YdCu8QOy/dxNu6MNyUpn2djwU6T/M5AyMkdBe0gOdSIG', 0),
('117f67ca-2587-46e6-8601-7692284371be', '51237', '51237@a', '$2b$10$X1RrsGPG86z2ZkPQlwkfDObHE7s.xWkxQ95jFma8hBJ5vemiDzyku', 0),
('11a06d6a-23e5-4424-9569-58170c5654e6', 'Antonio', 'antonio@ipssi.com', '$2b$10$72cvWGf8uMzNvfSrMyQD..QGwrNEXOwinl0cTGRRlmmzw7igbiNN6', 0),
('14bc83da-1576-49f2-b27d-99f77b5f3db2', 'Antonio', 'antonio@ipssi.com', '$2b$10$/aBT2GX94eYjbQgnL8jImOkkodW9Yq3N92Msxfp3YooFtAnNh.hpi', 0),
('189fb870-8b11-49d5-9527-3083e6f09c68', 'Antonio', 'antonio@ipssi.com', '$2b$10$yoH8k9xCyC/tMC3bY2smneBsYRel9y3aLhkTpaNIhvGOLepp1j6OO', 0),
('1fe309dc-7572-4ba7-a3d5-8d009c672711', 'KALOU', 'a@o', '123', 0),
('28bab4b8-5558-4112-af93-da5a7ec08e9d', 'Antonio', 'antonio@ipssi.com', '$2b$10$KBtRdmqIkej9Qg5P7/4ZheXaZKna/0oTtLwA6L8plqbfGkRxtCsZ2', 0),
('31b34d87-4969-4eee-b331-a9245fad03e8', 'ceo@a', 'ceo@a', '$2b$10$LdSmlLwZvFpdqEekBH03XeOQn38QU0vOMe5ksCfz8j8mUw8S9KIgW', 0),
('3205a68d-c378-4243-afac-0391387f78db', 'Antonio', 'antonio@ipssi.com', '$2b$10$GFCP96vKUCHzu8J9gNDJguLzYcC7yAnT3o80H2UCKDLPExp8lUH7y', 0),
('3a6a5683-e7f1-4fd1-90af-bd4d3a620317', 'uu', 'uu@o', '$2b$10$RIl9a5OYMQbanYdESG1kFu9ZBKlzrG0oVnpeR1LkQCSijjyUyvhuq', 0),
('3c71664b-2665-42e1-9467-0bd6025a95af', 'a', 'a@a', '$2b$10$cZ.hVgrjacIN.mTjoOFS7.ug5v8SpXWNJSqlA2MsRDqZfrwe02GwW', 0),
('3ddf37a2-74c4-4c4e-a0b4-fa81d5086375', 'Antonio', 'antonio@ipssi.com', '$2b$10$AUR.KASRdj41qKle8Ln6D.wqRO7lx9Ad2Kg9SNUHdtSt0sdlIoGMm', 0),
('461e4786-3b85-4cc9-8c18-4b7f51e9bf0b', 'Antonio', 'antonio@ipssi.com', '$2b$10$Orzz6b.oiTfm1KN0KUb5aucAku9xpN/xpV7xy/KF5uutTJ78xNhX2', 0),
('4ed6a346-789b-430c-b49d-8c277304327a', 'Antonio', 'antonio@ipssi.com', '$2b$10$EW1QmWKLKPzB.o9kNfglNeFk292IRRzZiXlSb.vWPMZKuD1maIV9e', 0),
('63356bc7-781d-4933-ae37-5532059ec248', 'Antonio', 'antonio@ipssi.com', '$2b$10$LFUmUDX0kUjmTdduykAMUe..Vhos8eOA3/W04XGTO3LQ4fPRIZedG', 0),
('6534e1e0-fa30-410c-8dd3-bd838e6bb1c0', 'Admin', 'admin@m2l.com', '$2b$10$4Eb2dNzCj3.s/FRTQp/L4.zd0C2ot5NW7aD1BfPakI2zTn/m3zgAe', 1),
('749c2624-c3eb-44ae-a754-c6bb7283aa08', 'Antonio', 'antonio@ipssi.com', '$2b$10$I7GuCIafdoVf8SaT8Qh/DeD7GVbtAQe.04RlEq5DQwifyw2nlovYW', 0),
('83455a2b-a78c-4d01-82e1-37f6d6238d7c', 'Antonio', 'antonio@ipssi.com', '$2b$10$JHD0JMApGN6IotYQ2AoUee9bFgFjGGXReiEr.4b4EuRIL7yC1O3hi', 0),
('840b376b-dea9-4785-9bc1-b90a492736c4', 'popo', 'GUI@GUI', '1234', 0),
('89afd4c2-1139-4d4a-acbd-f6654e3deaae', 'Antonio', 'antonio@ipssi.com', '$2b$10$sO3qOc35fJ9YUl0F21MChu3OdklVQOmFplJ33MF.d/m3.mAD6Pv8.', 0),
('8ac67270-abde-40c1-87c0-620b0db4dfa2', 'Antonio', 'antonio@ipssi.com', '$2b$10$Qo.ScpEWZvroaeKKOnf7MeqQEtExarGjZ645Ck9gzw3ZnubtAPrGa', 0),
('8c8d7dd9-ad53-4734-805e-99a0751e4856', 'Antonio94', 'Antonio94@outlook.com', '$2b$10$bMKx7f1zuCZyv4oDN9W/seY5GRwpViG0r5GfHb1cb.gWjp8uSNMrK', 0),
('a62376ba-eaed-4398-b898-75f45fac0b25', 'Antonio', 'antonio@ipssi.com', '$2b$10$65mD5xx32ahZsVz42dnrb.nxZe5mQmCqDDo3OQr.I.9zaGrd/HLq6', 0),
('b0d59fb6-5b70-4b56-ac4f-c3d301e143fa', 'Antonio', 'antonio@ipssi.com', '$2b$10$rjRPlPt58Utd807KDrOi8uHnt8evgvlNHkab3JxH6fCHDJ5Hv/EuC', 0),
('b2eac293-98e0-454e-9301-23d126ae7533', 'Antonio', 'antonio@ipssi.com', '$2b$10$vw./ygprUfal0C9ReV0.DuRMzOByAqA/9aR09z/yKcUc2A6G0Zxiu', 0),
('be8a881f-8ee5-469a-8733-1c180ce1b570', 'Antonio', 'antonio@ipssi.com', '$2b$10$dHMARSzeWcp4KitjhfgZbOtCabTzIlriCWmcHFLQ4nYpdwEXdqkKW', 0),
('c3e2c762-f19b-422e-a96f-019dbf62a4a3', 'aa@o', 'll@m', '$2b$10$.WZn3aWQHOWVX/i3O.GWS.VWUvhv7x0Tw.wdRnvhJVkdpPvL9vNWC', 0),
('c4ed95c2-6f70-4b24-965f-28de0c12193d', 'TEST', 'TEST@A', '$2b$10$FJ/hSwIyPAiHeOqR1tutseIllrdupBRCQsP67XYc6kLKUdV9uZBxy', 0),
('d29b14e8-0e7f-4e4f-bd04-7d25bc139c68', 'Antonio', 'antonio@ipssi.com', '$2b$10$0NyMTtus2EsR6Vr/4M5AtewHfy4XdWPSzPtRxz.ss0rr.FHIO2O9O', 0),
('df81177e-74c9-4c33-a4b0-ffcf449efd57', 'Antonio', 'antonio@ipssi.com', '$2b$10$PC3/7/s.mM4hdHRRhSqRs.NQdHOvDCHzZMf765HgmmfktfyiPgCfK', 0),
('f446e54f-9dcf-4317-a71c-f27f2db9e26e', 'Antonio', 'antonio@ipssi.com', '$2b$10$cbiHPLlp5UyEAulvDKLi5eQ9ODHzi70I8B9rMxBCzksM3oDwyd6Ge', 0),
('fc2a48d7-16cf-40d8-a0c2-48c9d8aeaecc', 'Antonio', 'antonio@ipssi.com', '$2b$10$wsP6NsbDYLlwzdyfyqEDCufrh2/9VQzMSib4SFE4uJvHVFb7/Tzty', 0),
('fcc34148-cf21-4671-9c38-6a920bddc905', 'Antonio', 'antonio@ipssi.com', '$2b$10$O15xW2SjPlY3G9oOc/uBX.gUZdrD2yShFQk0uiCuNfU9Q254QaPue', 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `panier`
--
ALTER TABLE `panier`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_panier_uid` (`uid`),
  ADD KEY `fk_panier_pid` (`pid`);

--
-- Index pour la table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`pid`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`uid`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `panier`
--
ALTER TABLE `panier`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `panier`
--
ALTER TABLE `panier`
  ADD CONSTRAINT `fk_panier_pid` FOREIGN KEY (`pid`) REFERENCES `products` (`pid`),
  ADD CONSTRAINT `fk_panier_uid` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
