<?php
require_once '../../vendor/autoload.php';
use FSCODE\DB;

$db = new DB();
$db->Remove('DELETE FROM regtangles WHERE dataID=?',[$_POST['id']]);