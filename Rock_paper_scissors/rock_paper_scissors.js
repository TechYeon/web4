// 1.사용자가 가위바위보를 클릭하면 게임이 시작된다.
// 2.사용자가 선택한 가위바위보 이미지를 보여준다.
// 3.컴퓨터가 가위바위보를 랜덤으로 선택한다.
// 4.컴퓨터가 선택한 가위바위보 이미지를 보여준다.
// 5.승패 여부를 구분하여 보여준다.
// 6.점수를 계산하여 출력한다.

//#scissors
document.querySelector("#scissors").onclick = function () {
  playGame("scissors");
};

//#rock
document.querySelector("#rock").onclick = function () {
  playGame("rock");
};

//#paper
document.querySelector("#paper").onclick = function () {
  playGame("paper");
};

//점수 누적하기
let my_score = 0;
let com_score = 0;

function playGame(user_choice) {
  //사용자가 선택한 가위바위보
  console.log("사용자: " + user_choice);
  //.you>div:nth-child(2) => 여기에 img 넣기
  //${} => f-string과 비슷
  let user_choice_image = `<img src="images/${user_choice}.png" width=70 height=70>`;
  document.querySelector(".you>div:nth-child(2)").innerHTML = user_choice_image;

  //컴퓨터가 선택한 가위바위보
  let choice_list = ["scissors", "rock", "paper"];
  let idx = Math.floor(Math.random() * 3);
  //computer_choice = Math.floor(Math.random() * 3);
  //console.log(choice_list[computer_choice]);
  let computer_choice = choice_list[idx];
  console.log("컴퓨터: " + computer_choice);
  //.computer>div:nth-child(2) => 여기에 img 넣기
  let computer_choice_image = `<img src="images/${computer_choice}.png" width=70 height=70>`;
  document.querySelector(".computer>div:nth-child(2)").innerHTML =
    computer_choice_image;

  //유저가 이기는 경우
  let user_win1 = user_choice === "rock" && computer_choice === "scissors";
  let user_win2 = user_choice === "scissors" && computer_choice === "paper";
  let user_win3 = user_choice === "paper" && computer_choice === "rock";
  //유저가 지는 경우
  //let user_lose1 = user_choice === "rock" && computer_choice === "paper";
  //let user_lose2 = user_choice === "scissors" && computer_choice === "rock";
  //let user_lose3 = user_choice === "paper" && computer_choice === "scissors";

  //message 변수 선언
  let message;

  let text_color;

  if (user_choice === computer_choice) {
    console.log("비겼습니다.");
    message = "비겼습니다.";
    text_color = "yellow";
  } else if (user_win1 || user_win2 || user_win3) {
    // console.log("당신이 이겼습니다.");
    message = "당신이 이겼습니다.";
    text_color = "red";
    my_score = my_score + 1;
    console.log("내 점수: " + my_score);
  } else {
    // console.log("컴퓨터가 이겼습니다.");
    message = "컴퓨터가 이겼습니다.";
    text_color = "blue";
    com_score = com_score + 1;
    console.log("컴퓨터 점수:" + com_score);
  }

  //.result-message => 여기에 승패 보여주기
  document.querySelector(".result-message").innerText = message;
  document.querySelector(".result-message").style.color = text_color;

  document.querySelector(".score>div:nth-child(1)").innerText = my_score;
  document.querySelector(".score>div:nth-child(3)").innerText = com_score;
}
