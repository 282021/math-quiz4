function send(){
 number1=document.getElementById("number1").Value;
 number2=document.getElementById("number2").Value;
 actual_answer=parseInt(number1) * parseInt(number2);
question_number="<h4>" + number1+"X"+ number2+"</h4>";
input_box="<br>Answer :<input type='text' id='input_check_bpox'>";
check-button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row=question_number+input_box+check_button;
document.getElementById("outpput").innerHTML=row;
document.getElementById("number1").value="";
document.getElementById("number").value="";
}
question_turn ="player1";
answer_turn="player2";

function Check()
{
get_answer=document.getElementById("input_ckeck_box").value;
if(get_answer==actual_answer)
{
    if(answer_turn=="player1")
    {
        update_player1-score=player1_score+1;
        document.getElementById("player1_score").innerHTML=update_player1_score;
    }
    else
    {
        update_player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=update_player2_score;
    }
}
if(question_turn=="player2")
{
    question_number=="player2"
    document.getElementById("player_question").innerHTML="Question Turn-"+player2_name;
}
else
{
    question_turn="player1"
    document.getElementById("player_question").innerHTML="Question Turn-"+player1_name;
}
}