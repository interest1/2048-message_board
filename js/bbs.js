$(document).ready(function () {
    mob();
});

function mob() {
    var table=$('#table');
    alert('mobile');
    $('#form').css('font-size','.2rem');
    table.css('font-size','.2rem');
    table.css('width','2rem');

function check() {
    if(myform.user.value=="")
    {
        alert("请填写用户");
        myform.user.focus();
        return false;
    }
    if (myform.title.value.length<1)
    {
        alert("标题不能少于1个字符");
        myform.title.focus();
        return false;
    }
    if (myform.content.value=="")
    {
        alert("内容不能为空");
        myform.content.focus();
        return false;
    }
}
function del(id) {
    location.href="del.php?id="+id;
}

