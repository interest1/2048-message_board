<?php
include ('conn.php');
if(isset($_POST['id']) && $_POST['id']!=''){
    $id=$_POST['id'];
}
$user=$_POST['user'];
//$title=$_POST['title'];
$content=$_POST['content'];

if ($_POST['submit']){
    $sql="INSERT INTO message(id,user,content,lastdate)
VALUES (null,'$_POST[user]','$_POST[content]',now())";

    if (mysqli_query($conn, $sql)) {
        echo "<script>alert('留言成功');location.href='list.php';</script>";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}

?>