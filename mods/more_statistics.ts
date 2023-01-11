

export function morestats(playerSpeed:number,enemieSpeed:number){
if(playerSpeed > enemieSpeed ){
    return true as boolean;
}
else{
    return false as boolean;
}
}