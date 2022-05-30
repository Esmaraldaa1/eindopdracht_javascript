<?php

if (isset($_GET["search_query"]) && !empty($_GET["search_query"])) {
    $response = file_get_contents('http://asdasd.be/harry-potter/?name=' . $_GET["search_query"] );
    header('Content-Type: application/json; charset=utf-8');
    echo $response;
} else {
    header('Content-Type: application/json; charset=utf-8');
    echo "[]";
}