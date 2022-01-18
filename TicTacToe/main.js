let player = 1

let board = [
    ['_', '_', '_'],
    ['_', '_', '_'],
    ['_', '_', '_'],
]


function reset(){
    for(i=1; i<10; i++){
        document.getElementById(`cell${i}`).innerText = " ";
        document.getElementById(`cell${i}`).setAttribute("onClick", `click_cell(${i})`);
    }
    
    board = [
        ['_', '_', '_'],
        ['_', '_', '_'],
        ['_', '_', '_'],
    ]
    document.getElementById("result").innerText = " "; 
}


function end_game(){
    document.getElementById("result").innerText = `Player ${player} won the Game!!!`;
    for(i=1; i<10; i++){
        document.getElementById(`cell${i}`).removeAttribute("onClick");
    }
}

function check_win(){
    let win=0;
    if(
        ((board[0][0] === board[0][1]) && (board[0][1] === board[0][2]) && board[0][0] != '_') ||
        ((board[1][0] === board[1][1]) && (board[1][1] === board[1][2]) && board[1][0] != '_') ||
        ((board[2][0] === board[2][1]) && (board[2][1] === board[2][2]) && board[2][0] != '_') ||

        ((board[0][0] === board[1][0]) && (board[1][0] === board[2][0]) && board[0][0] != '_') ||
        ((board[0][1] === board[1][1]) && (board[1][1] === board[2][1]) && board[0][1] != '_') ||
        ((board[0][2] === board[1][2]) && (board[1][2] === board[2][2]) && board[2][2] != '_') ||
        
        ((board[0][0] === board[1][1]) && (board[1][1] === board[2][2]) && board[2][2] != '_') ||
        ((board[2][0] === board[1][1]) && (board[1][1] === board[0][2]) && board[2][0] != '_')
    ){
        win = 1;
        end_game();
    }

}

function click_cell(cell_num){
    let text;
    
    if(player == 1){
        text = "O";
        player = 0;
    }
    else{
        text = "X";
        player = 1;
    }

    if(cell_num==1){
        let cell = document.getElementById("cell1");
        if(board[0][0] === '_'){
            cell.innerText = text;
            board[0][0] = text;
            check_win();
        }
    }
    else if(cell_num==2){
        let cell = document.getElementById("cell2");
        if(board[0][1] === '_'){
            cell.innerText = text;
            board[0][1] = text;
            check_win();
        }
    }

    else if(cell_num==3){
        let cell = document.getElementById("cell3");
        if(board[0][2] === '_'){
            cell.innerText = text;
            board[0][2] = text;
            check_win();
        }
    }

    else if(cell_num==4){
        let cell = document.getElementById("cell4");
        if(board[1][0] === '_'){
            cell.innerText = text;
            board[1][0] = text;
            check_win();
        }
    }
    else if(cell_num==5){
        let cell = document.getElementById("cell5");
        if(board[1][1] === '_'){
            cell.innerText = text;
            board[1][1] = text;
            check_win();
        }
    }
    else if(cell_num==6){
        let cell = document.getElementById("cell6");
        if(board[1][2] === '_'){
            cell.innerText = text;
            board[1][2] = text;
            check_win();
        }
    }
    else if(cell_num==7){
        let cell = document.getElementById("cell7");
        if(board[2][0] === '_'){
            cell.innerText = text;
            board[2][0] = text;
            check_win();
        }
    }
    else if(cell_num==8){
        let cell = document.getElementById("cell8");
        if(board[2][1] === '_'){
            cell.innerText = text;
            board[2][1] = text;
            check_win();
        }
    }
    else if(cell_num==9){
        let cell = document.getElementById("cell9");
        if(board[2][2] === '_'){
            cell.innerText = text;
            board[2][2] = text;
            check_win();
        }
    }
}