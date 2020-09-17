<?php
$_POST = json_decode(file_get_contents('php://input'),true);
$newFile ="../../" . $_POST["name"] . ".html";

if (file_exists($newFile)) {
   unlink($newFile);
} else {
   // header("HTTP/1.0 500 Internal Server Error");
   alert("Такой страницы не найдено!");

}
