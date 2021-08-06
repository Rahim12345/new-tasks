<?php
require_once '../../vendor/autoload.php';
use FSCODE\DB;

$db = new DB();
$db->Insert('INSERT INTO regtangles (width, height, randomCoordinateX, randomCoordinateY, color, dataID) VALUES (?,?,?,?,?,?)',[$_POST['width'],$_POST['height'],$_POST['randomCoordinateX'],$_POST['randomCoordinateY'],$_POST['color'],$_POST['dataID']]);