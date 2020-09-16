<?php 
$htmlfiles = glob("../../*.html");
$response =[];
// принимает строку и возвращает элемент
foreach($htmlfiles as $file) {
   array_push($response, basename($file));
   // echo  '<h3><a >Delete Now!</a></h3>';
}
//работа с json
echo json_encode($response);
