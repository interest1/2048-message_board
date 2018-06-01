<!DOCTYPE html>
<html lang="utf-8">
<head>
    <?php
    include ("conn.php");
    ?>
    <meta name="viewport"
          content="width=device-width,height=device-height,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <link href="css/bbs.css" rel="stylesheet" type="text/css">
    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/bbs.js"></script>
    <script src="js/main.js"></script>
</head>
<body>
<div class="main">
    <form id="form" action="add.php" method="post" name="myform" onsubmit="return check();">
        用户：<input type="text" name="user"><br>
<!--        标题：<input type="text" name="title"><br>-->
        内容：<textarea name="content"></textarea><br>
        <input class="btn" type="submit" name="submit" value="提交">
        <input class="btn" type="button" onclick="location.href='index.html'" value="回到游戏">
    </form>
    <br>
    <table id="table" border="1" align="center" cellpadding="5" cellspacing="1">
        <?php
        $sql="select * from message order by id desc";
        $query=mysqli_query($conn,$sql);
        while($r=mysqli_fetch_array($query)){?>
            <tr class="user"><td>用户： <?php echo $r['user'];?></td></tr>
            <tr class="content"><td>内容:<?php echo $r['content'];?></td></tr>
            <tr class="date"><td><?php echo $r['lastdate'];?></td></tr>
        <?php } ?>
    </table>

</div>

</body>
</html>

<!--<tr>-->
<!--    <td>-->
<!--        <input type="button" onclick="del(echo $r['id'])" value="删除">-->
<!--    </td>-->
<!--</tr>-->