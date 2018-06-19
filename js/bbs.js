var docW=window.screen.availWidth;
$(document).ready(function () {
    mob();
});
function mob() {
    var table=document.getElementById('table');
    if(docW<500){
        table.style.width='100%';
        console.log('a');
    }

}
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
};

