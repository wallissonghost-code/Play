export const state={
goal:0,progress:0,mission:{name:'',icon:'',goal:0,displayUser:null,contributors:new Map()},
host:{id:null,name:'',avatar:null},challenger:null,turn:'challenger',board:Array(9).fill(null),active:false,
challengerTurnSeconds:50,turnSecondsLeft:50,hostAuto:false,hostAutoMinMs:3000,hostAutoMaxMs:7000
};
export function clearMissionProgress(){state.progress=0;state.mission.displayUser=null;state.mission.contributors.clear()}
export function resetMatch(){state.active=false;state.challenger=null;clearMissionProgress();state.turn='challenger';state.board.fill(null);state.turnSecondsLeft=state.challengerTurnSeconds}