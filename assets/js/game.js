import{state}from'./state.js';
export function play(index,mark){if(index<0||index>8||state.board[index])return false;state.board[index]=mark;return true}
export function freeCells(){return state.board.map((v,i)=>v?null:i).filter(i=>i!==null)}
export function winner(){const w=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(const [a,b,c] of w)if(state.board[a]&&state.board[a]===state.board[b]&&state.board[a]===state.board[c])return state.board[a];return state.board.every(Boolean)?'draw':null}
function wouldWin(index,mark){if(state.board[index])return false;state.board[index]=mark;const result=winner()===mark;state.board[index]=null;return result}
export function smartAutoMove(mark){const other=mark==='X'?'O':'X',free=freeCells();return free.find(i=>wouldWin(i,mark))??free.find(i=>wouldWin(i,other))??free[Math.floor(Math.random()*free.length)]??null}