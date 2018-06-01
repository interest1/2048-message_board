function show(i,j,rNum) {
    var t=$('#num'+i+'-'+j);
    var n = $('#num' + i + '-' + j+'>p');

    t.css('background-color',getBgColor(rNum));
    t.css('color',getColor(rNum));
    n.html(rNum);

    t.animate({
        width:gridW,
        height:gridW,
        top:getTop(i,j),
        left:getLeft(i,j)
    },50);
}

function showMove(x,y,tox,toy) {
    var n=$('#num'+x+'-'+y);
    n.animate({
        top:getTop(tox,toy),
        left:getLeft(tox,toy)
    },200);
}

function newScore(score) {
    $('#score').text(score);
}