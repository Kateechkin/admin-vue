<?php
$newFile ="../../" . $_POST["name"] . ".html";

if (file_exists($newFile)) {
   unlink($newFile);
} else {
   // header("HTTP/1.0 500 Internal Server Error");
   alert("Такой страницы не найдено!");

}
