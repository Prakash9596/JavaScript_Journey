document.querySelector('#your_input').innerText = 'Please select your Choice ';
let value; let c_choice; let u_choice; let result; let win; let loss; let tied; let output;

function generateRandom(){
  value = Math.random()*3;
  if(value >0 && value <=1){
    c_choice ='Bat';
    return c_choice;
  }else if(value >1 && value <=2){
    c_choice ='Ball';
    return c_choice;
  }else{
    c_choice ='Wicket';
    return c_choice;
  }
}

function generateResult(u_choice, c_choice){
  if(u_choice === c_choice){ 
    output = 'Match Tied'; score.tied++; displayScore();}
  else if(u_choice ==='Bat' && c_choice ==='Ball'){  
    output = 'User Won'; score.win++; displayScore();}  
  else if(u_choice ==='Bat' && c_choice ==='Wicket'){ 
    output = 'Computer Won'; score.loss++; displayScore();}
  else if(u_choice ==='Ball' && c_choice ==='Bat'){ 
    output = 'Computer Won'; score.loss++; displayScore();}
  else if(u_choice ==='Ball'&& c_choice ==='Wicket' ){ 
    output = 'User Won';score.win++; displayScore();}
  else if(u_choice ==='Wicket' && c_choice ==='Bat'){ 
    output = 'User Won'; score.win++; displayScore();}
  else { 
    output = 'Computer Won'; score.loss++; displayScore();}
}

let scoreStr = localStorage.getItem('score'); //string jo ki score naam se saved hai usko scoreStr me le aaye
let score = JSON.parse(scoreStr) || { // scoreStr ko object bna diye
  win: 0,                             // agar scoreStr me koi value mile to wo score me assign kr do else score ko 0-0 kr do
  loss: 0,
  tied :0,
}
function displayScore(){
    localStorage.setItem('score',JSON.stringify(score));//Result show krne se pahle score(object) ko string bna ke storage me save kr diye
    document.querySelector('#your_input').innerText = `You have choosen ${u_choice}`;
    document.querySelector('#computer_input').innerText = `Computer has choosen ${c_choice}`;
    document.querySelector('#result').innerText = output;
    document.querySelector('#report_calci').innerText = `You Won: ${score.win}, Lost: ${score.loss} and Tied: ${score.tied}`;
};



