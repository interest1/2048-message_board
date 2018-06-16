var board= [];
var score=0;
var hasTouched=[];
var ar=['大不自多'+'<br>'+'海纳江河','惟学无际'+'<br>'+'际于天地','形上谓道兮'+'<br>'+'形下谓器',
    '礼主别异兮'+'<br>'+'乐主和同','知其不二兮'+'<br>'+'尔听斯聪','国有成均'+'<br>'+'在浙之滨',
    '昔言求是'+'<br>'+'实启尔求真','习坎示教'+'<br>'+'始见经纶','无曰已是'+'<br>'+'无曰遂真',
    '靡革匪因'+'<br>'+'靡故匪新','何以新之'+'<br>'+'开物前民','嗟尔髦士'+'<br>'+'尚其有闻',
    '念哉典学'+'<br>'+'思睿观通','有文有质'+'<br>'+'有农有工,兼总条贯'+'<br>'+'知至知终',
    '成章乃达'+'<br>'+'若金之在熔','尚亨于野'+'<br>'+'无吝于宗','树我邦国'+'<br>'+'天下来同']
var x=0;
var y=0;
var ex=0;
var ey=0;
// docW=window.screen.availWidth;
// gridsW=0.92*docW;
// gridW=0.18*docW;
// sps=0.04*docW;

$(document).ready(function () {
    preForMb();
    newgame();
});

function newgame() {
    init();
    newNum(1);
    newNum(1);
}
function newNum(n) {
    if(nosps(board))
        return false;
    var rx=parseInt(Math.floor(Math.random()*4));
    var ry=parseInt(Math.floor(Math.random()*4));
    while(true){
        if(board[rx][ry]===0){
            break;
        }else{
            rx=parseInt(Math.floor(Math.random()*4));
            ry=parseInt(Math.floor(Math.random()*4));
        }
    }
    n?rNum=ar[0]:rNum=Math.random() <0.5?ar[0]:ar[1];
    // if(n){
    //     var rNum=ar[0];
    // }else{
    //     var rNum=Math.random() <0.5?ar[0]:ar[1];
    // }
    board[rx][ry]=rNum;
    show(rx,ry,rNum);
    return true;
}
function preForMb() {
    if(docW>500){
        gridsW=500;
        gridW=100;
        sps=20;
    }
    var table=$('#table'),
        grids=$('#grids'),
        grid=$('.grid');
    $('#form').css('font-size','.2rem');
    table.css('font-size','.2rem');
    table.css('width','2rem');

    grids.css('width',gridsW-2*sps);
    grids.css('height',gridsW-2*sps);
    grids.css('padding',sps);
    grids.css('border-radius',0.02*gridsW);

    grid.css('width',gridW);
    grid.css('height',gridW);
    grid.css('border-radius',0.1*gridW);
}

function init() {
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            var grid=$('#grid'+i+j);
            grid.css('top',getTop(i,j));
            grid.css('left',getLeft(i,j))
        }
    }

    for(var i=0;i<4;i++){
        board[i]=[];
        hasTouched[i]=[];
        for(var j=0;j<4;j++){
            board[i][j]=0;
            hasTouched[i][j]=false;
        }
    }
    update();
    newScore(0);
}

function update() {
    var num=$('.num');
    num.remove();
    for(var i=0;i<4;i++) {
        for (var j = 0; j < 4; j++) {
            var str='#num' + i + '-' + j ;
            $('#grids').append('<div class="num" id="num' + i + '-' + j + '"><p></p></div>');
            var t=$('#num'+i+'-'+j);
            var n=$('#num' + i + '-' + j+'>p');
            if (board[i][j] === 0) {
                t.css('width', '0px');
                t.css('height', '0px');
                t.css('top', getTop(i, j) + gridW/2);
                t.css('left', getLeft(i, j) + gridW/2);
            }
            else {
                t.css('width', gridW);
                t.css('height', gridW);
                t.css('top', getTop(i, j));
                t.css('left', getLeft(i, j));
                t.css('background-color', getBgColor(board[i][j]));
                t.css('color', getColor(board[i][j]));
                n.html(board[i][j]);
            }
            hasTouched[i][j]=false;
        }
    }
    num.css('line-height',gridW/3+'px');
    num.css('font-size',0.2*gridW+'px');
    num.css('padding','auto -2px');
}

$(document).keydown(function (e) {
    switch(e.keyCode){
        case 37:
            e.preventDefault();
            if(left()){
                setTimeout('newNum()',210);
                setTimeout('isOver()',300);
            }
            break;
        case 38:
            e.preventDefault();
            if(up()){
                setTimeout('newNum()',210);
                setTimeout('isOver()',300);
            }
            break;
        case 39:
            e.preventDefault();
            if(right()){
                setTimeout('newNum()',210);
                setTimeout('isOver()',300);
            }
            break;
        case 40:
            e.preventDefault();
            if(down()){
                setTimeout('newNum()',210);
                setTimeout('isOver()',300);
            }
            break;
        default:
            break;
    }
});

document.addEventListener('touchstart',function (ev) {
    x=ev.touches[0].pageX;
    y=ev.touches[0].pageY;
});
//bug的解决
document.addEventListener('touchmove',function (ev) {
    ev.preventDefault();
});
document.addEventListener('touchend',function (ev) {
    ex=ev.changedTouches[0].pageX;
    ey=ev.changedTouches[0].pageY;

    var dx=ex-x;
    var dy=ey-y;
    if(Math.abs(dx)<0.1*docW&&Math.abs(dy)<0.1*docW){
        return;
    }

    if(Math.abs(dx)>=Math.abs(dy)){
        if(dx>0){
            if(right()){
                setTimeout('newNum()',210);
                setTimeout('isOver()',300);
            }
        }else{
            if(left()){
                setTimeout('newNum()',210);
                setTimeout('isOver()',300);
            }
        }
    }else{
        if(dy>0){
            if(down()){
                setTimeout('newNum()',210);
                setTimeout('isOver()',300);
            }
        }else{
            if(up()){
                setTimeout('newNum()',210);
                setTimeout('isOver()',300);
            }
        }
    }
});
var flag=0;
function isOver() {
    if(nosps(board)&&nomove(board)){
        alert('Game Over');
    }
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            if(flag===0&&board[i][j]===ar[11]){
                alert('到第12句了，继续刷分吧!')
                flag=1
            }
        }
    }
}

function end(i,j) {
    // if(ar.indexOf(board[i][j])==4){
    //     alert('恭喜你')
    // }
}

function left() {
    if(!canLeft(board)){
        return false;
    }
    for(var i=0;i<4;i++){
        for(var j=1;j<4;j++){
            if(board[i][j]!==0){
                for(var k=0;k<j;k++){
                    if(board[i][k]===0&&emptyX(i,k,j,board)){
                        showMove(i,j,i,k);
                        board[i][k]=board[i][j];
                        board[i][j]=0;
                        //移动并合并的判断
                    }else if(board[i][k]===board[i][j]&&emptyX(i,k,j,board)&&!hasTouched[i][k]){
                        showMove(i,j,i,k);
                        board[i][k]=ar[ar.indexOf(board[i][j])+1];
                        board[i][j]=0;
                        score+=Math.pow(2,ar.indexOf(board[i][j])+3);
                        newScore(score);
                        console.log(score);
                        hasTouched[i][k]=true;
                    }
                }
            }
        }
    }
    setTimeout('update()',200);
    return true;
}
function right() {
    if(!canRight(board)){
        return false;
    }
    for(var i=0;i<4;i++){
        for(var j=2;j>=0;j--){
            if(board[i][j]!==0){
                for(var k=3;k>j;k--){
                    if(board[i][k]===0&&emptyX(i,j,k,board)){
                        showMove(i,j,i,k);
                        board[i][k]=board[i][j];
                        board[i][j]=0;
                    }else if(board[i][k]===board[i][j]&&emptyX(i,j,k,board)&&!hasTouched[i][k]){
                        showMove(i,j,i,k);
                        board[i][k]=ar[ar.indexOf(board[i][j])+1];
                        board[i][j]=0;
                        score+=Math.pow(2,ar.indexOf(board[i][j])+3);
                        newScore(score);
                    }
                }
            }
        }
    }
    setTimeout('update()',200);
    return true;
}
function up() {
    if(!canUp(board)){
        return false;
    }
    for(var j=0;j<4;j++){
        for(var i=1;i<4;i++){
            if(board[i][j]!==0){
                for(var k=0;k<i;k++){
                    if(board[k][j]===0&&emptyY(j,k,i,board)){
                        showMove(i,j,k,j);
                        board[k][j]=board[i][j];
                        board[i][j]=0;
                    }else if(board[k][j]===board[i][j]&&emptyY(j,k,i,board)&&!hasTouched[k][j]){
                        showMove(i,j,k,j);
                        board[k][j]=ar[ar.indexOf(board[i][j])+1];
                        board[i][j]=0;
                        score+=Math.pow(2,ar.indexOf(board[i][j])+3);
                        newScore(score);
                    }
                }
            }
        }
    }
    setTimeout('update()',200);
    return true;
}
function down() {
    if(!canDown(board)){
        return false;
    }
    for(var j=0;j<4;j++){
        for(var i=2;i>=0;i--){
            if(board[i][j]!==0){
                for(var k=3;k>i;k--){
                    if(board[k][j]===0&&emptyY(j,i,k,board)){
                        showMove(i,j,k,j);
                        board[k][j]=board[i][j];
                        board[i][j]=0;
                    }else if(board[k][j]===board[i][j]&&emptyY(j,i,k,board)&&!hasTouched[k][j]){
                        showMove(i,j,k,j);
                        board[k][j]=ar[ar.indexOf(board[i][j])+1];
                        board[i][j]=0;
                        score+=Math.pow(2,ar.indexOf(board[i][j])+3);
                        newScore(score);
                    }
                }
            }
        }
    }
    setTimeout('update()',200);
    return true;
}