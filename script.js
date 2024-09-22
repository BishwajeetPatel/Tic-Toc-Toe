let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#btn");
let newgamebtn = document.querySelector("#newbtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
const winnerpatterns =[
    [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const checkwinner = () =>{
    for(let pattern of winnerpatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val === pos2val && pos2val === pos3val){
                showwinner(pos1val);
                return true;
            }
        }
    }

};
let count = 0;
const resetGame = () =>{
  turnO = true;
  count =0;
  enableBoxes();
  msgContainer.classList.add("hide");
}

boxes.forEach((box) =>{
    box.addEventListener("click",() => {
        
        if(turnO){
      box.innerText = "O";
      turnO = false;
        }
      else{
        box.innerText ="X";
        turnO = true;
      }
      box.disabled = true;
      count++;
      let iswinner = checkwinner();
      if (count === 9 && !iswinner){
        gameDraw();
      }
    });
});
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }

};
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }

};
const showwinner = (WINNER) => {
   msg.innerText = `Congratulations, Winner is ${WINNER}`;
   msgContainer.classList.remove("hide");
   disableBoxes();
};
newgamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);


