docW=window.screen.availWidth;
gridsW=0.92*docW;
gridW=0.18*docW;
sps=0.04*docW;

function getTop(i,j) {
    return sps+i*(sps+gridW);
}
function getLeft(i,j) {
    return sps+j*(sps+gridW);
}

function getBgColor(num) {
    switch (num){
        case ar[0]:return "#eee4da";break;
        case ar[1]:return "#ede0c8";break;
        case ar[2]:return "#f2b179";break;
        case ar[3]:return "#f59563";break;
        case ar[4]:return "#f67c5f";break;
        case ar[5]:return "#ede0cb";break;
        case ar[6]:return "#edcf72";break;
        case ar[7]:return "#edcc61";break;
        case ar[8]:return "#9c0";break;
        case ar[9]:return "#33b5e5";break;
        case ar[10]:return "#09c";break;
        case ar[11]:return "#316acc";break;
        case ar[12]:return "#4138cc";break;
        case ar[13]:return "#6f3acc";break;
        case ar[14]:return "#ba2dcc";break;
        case ar[15]:return "#cc30c0";break;
        case ar[15]:return "#cc1c89";break;
    }
    return 'black';
}

function getColor(number) {
    if(number<=4)
        return "#776e65";
    return 'black';
}
function nosps(board) {
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            if(board[i][j]==0){
                return false;
            }
        }
    }
    return true;
}
function nomove() {
    if(canLeft(board)||
        canRight(board)||
        canUp(board)||
        canDown(board)){
        return false;
    }
    return true;
}

function canLeft(board) {
    for(var i=0;i<4;i++){
        for(var j=1;j<4;j++){
            if(board[i][j]!=0){
                if(board[i][j-1]==0 || board[i][j-1]==board[i][j]){
                    return true;
                };
            }
        }
    }
    return false;
}
function canRight(board) {
    for(var i=0;i<4;i++){
        for(var j=2;j>=0;j--){
            if(board[i][j]!=0){
                if(board[i][j+1]==0 || board[i][j+1]==board[i][j]){
                    return true;
                };
            }
        }
    }
    return false;
}
function canUp(board) {
    for(var j=0;j<4;j++){
        for(var i=1;i<4;i++){
            if(board[i][j]!=0){
                if(board[i-1][j]==0 || board[i-1][j]==board[i][j]){
                    return true;
                };
            }
        }
    }
    return false;
}
function canDown(board) {
    for(var j=0;j<4;j++){
        for(var i=2;i>=0;i--){
            if(board[i][j]!=0){
                if(board[i+1][j]==0 || board[i+1][j]==board[i][j]){
                    return true;
                };
            }
        }
    }
    return false;
}

function emptyX(r,c1,c2,board) {
    for(var j=c1+1;j<c2;j++){
        if(board[r][j]!=0){
            return false;
        }
    }
    return true;
}
function emptyY(c,r1,r2,board) {
    for(var i=r1+1;i<r2;i++){
        if(board[i][c]!=0){
            return false;
        }
    }
    return true;
}