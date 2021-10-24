var player = true;
var turn = 0;
var score = new Array(9);

for (var i = 0; i < score.length; i++) {
    score[i] = new Array(3);
}


score.addScore = function (e) {
        if(score[0][0] === undefined){
            score[0][0] = turn
            score[0][1] = e
            score[0][2] = player
        } else{
            for (let i = 0; i < score.length; i++) {
                if (score[i+1][0] === undefined){
                    score[i+1][0] = turn
                    score[i+1][1] = e
                    score[i+1][2] = player
                    break
                }
            }
        }
}

function handleClick (e){
    if(player){
        document.getElementById('colum' + e).innerHTML = "x"
        turn = turn +1
        score.addScore(e)
        player = false;

    }else {
        document.getElementById('colum' + e).innerHTML = "o"
        turn = turn +1
        score.addScore(e)
        player = true;
    }
}

function handleReturn (r){
    for (let i = 0; i < score.length; i++) {
        if (score[i][0] !== undefined && score[i][0] > r){
            document.getElementById('colum' + score[i][1]).innerHTML = ""
            score[i][0] = undefined
            score[i][1] = undefined
            score[i][2] = undefined
        }
    }
}