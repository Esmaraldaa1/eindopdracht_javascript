<?php
include('config.php');

$charset = 'utf8mb4';
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);  //anders geeft het een error (als die een verbinding geeft)
} catch (\PDOException $e) { //wat gaat er gebeuren als er een foutmelding is
    throw new \PDOException($e->getMessage(), (int)$e->getCode()); // foutmelding terug geven met een bericht
}