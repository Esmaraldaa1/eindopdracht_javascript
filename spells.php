<?php
include_once "database.php";

if (isset($_GET["search_query"]) && !empty($_GET["search_query"])) {
    $input = '%' . $_GET["search_query"] . '%';
    $stmt = $pdo->prepare("
    SELECT * 
    FROM `spells`
    WHERE name LIKE :search_query");
    $stmt->execute(["search_query" => $input]);
    $result = $stmt->fetchAll();

    header('Content-Type: application/json; charset=utf-8');  // header = informatie die je geeft over pagina zelf
    echo json_encode($result);
}
else {
    header('Content-Type: application/json; charset=utf-8');
    echo "[]";
}
?>