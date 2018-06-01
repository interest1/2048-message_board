<?php
include 'conn.php';
//if(isset($_GET['id']) && $_GET['id']!=''){
    $id=$_GET['id'];
//}
$query="delete from message where id=$id";
mysqli_query($conn,$query);

$url = "list.php";
echo "<script>";
echo "window.location.href='$url'";
echo "</script>";
?>