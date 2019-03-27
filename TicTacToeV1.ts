import { question } from 'readline-sync'

//declare variable
var board = ['1','2','3','4','5','6','7','8','9']
const player1 = 'X'
const player2 = 'O'
let state = 0
let isMyTurn = true
let Isinterger:number = -1
let gameOver = false
var sNum:any[] = [0,0,0,0,0,0,0,0,0,0,0,0,0]

//check win
function win(b,c){
    if ((board[0] == b && board[1] == b && board[2] == b) ||
       (board[3] == b && board[4] == b && board[5] == b) ||
       (board[6] == b && board[7] == b && board[8] == b) ||
       (board[0] == b && board[3] == b && board[6] == b) ||
       (board[1] == b && board[4] == b && board[7] == b) ||
       (board[2] == b && board[5] == b && board[8] == b) ||
       (board[0] == b && board[4] == b && board[8] == b) ||
       (board[2] == b && board[4] == b && board[6] == b) )
       {
        console.log("player " +c+ " win")
        state= 10 // break for loop
       }
}

//Print board
function printBoard(array) {
   console.log("-------------")
   let i = 0
   while (i < 9){
   
           console.log('['+array[i]+']['+array[i+1]+']['+array[i+2]+']')
           i=i+3
        }
            console.log("-------------")
        }    
      
console.log('Tic Tac Toe')
printBoard(board)

//play game
for(state=0;state<9;state++)
{
let IsNext = isMyTurn ? player1 : player2
let InsertV = isMyTurn ? 'X' : 'O'

    if(isMyTurn){
        let selectnum= parseInt(question(IsNext+' please select location\n') )
        
        // checking existing number key in
        if (parseInt(sNum[selectnum].toString()) == 1 )
        {           
            console.log('Number Exist Please try other number') ;
            state=-state
            continue
        }
        

        sNum[selectnum] = 1

        //make sure input valid number 
        if((selectnum<10&&selectnum>0)||selectnum === Isinterger)
        { 
        selectnum =selectnum-1 //array start with 0
        board[selectnum]=InsertV 
        printBoard(board)
        win(InsertV,player1) //check win
        state=+state     
        }             
        else
        {
            console.log('Invalid Input') 
            continue
        }
    }
    else{
        let selectnum= parseInt(question(IsNext+' please select location\n') ) 
        
        //checking existing number key in
        if (parseInt(sNum[selectnum].toString()) == 1 )
        {
            console.log('Number Exist Please try other number') ;
            state=-state
            continue
        }

        sNum[selectnum] = 1
    
        if(selectnum<10||selectnum>=0||selectnum === Isinterger){             
        selectnum =selectnum-1      
        board[selectnum]=InsertV        
        printBoard(board)
        win(InsertV,player2)
        state=+state
        }          
         else
        {
        console.log('Invalid Input') 
        continue
        }  
              
}
//check draw
if (state ==8)
{
 console.log('you draw')

}
//switch turn
isMyTurn = !isMyTurn
}


