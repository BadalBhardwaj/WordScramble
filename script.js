let words = [
    {
       word:"addition",
       hint:"the process of adding numbers"
    },
    {
       word:"meeting",
       hint:"event in which people come together"
    },
    {
       word:"number",
       hint:"math symbol used for counting"
    },
    {
       word:"exchange",
       hint:"the act of trading"
    },
    {
       word:"canvas",
       hint:"piece of fabric for oil painting"
    },
    {
       word:"garden",
       hint:"space for planting flower and plant"
    },
    {
       word:"position",
       hint:"location of someone or something"
    },
    {
       word:"feather",
       hint:"hair like other covering of birds"
    },
 ]



 //maincode

 const wordText = document.querySelector(".word"),
 hintText = document.querySelector(".hint span"),
 timeText = document.querySelector(".time b"),
 inputField = document.querySelector("input"),
 refreshBtn = document.querySelector(".refresh-word"),
 checkBtn = document.querySelector(".check-word");

 let correctWord,timer;
 const initTimer = maxTime =>{
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0){
            maxTime--;
           return timeText.innerHTML = maxTime;
        }
       
        alert(`times up !!!!! `);
        initGame();
    },1000);
 }

const initGame = () =>{
    initTimer(15);
    let randomObj = words[Math.floor(Math.random() *words.length)];
    let wordArray = randomObj.word.split("");
    for(let i=wordArray.length-1; i>0 ;i--){
        let j = Math.floor(Math.random() *(i+1));
        [wordArray[i],wordArray[j]] = [wordArray[j], wordArray[i]]
    }
    wordText.innerHTML = wordArray.join("");
    hintText.innerHTML = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength",correctWord.length);
    console.log(randomObj);
 }   
 initGame();

 const checkWord = () =>{
    let userWord = inputField.value.toLocaleLowerCase();
    if(!userWord) return alert("please enter a word for check");
    if(userWord !== correctWord)
        return alert(`Oops! ${userWord} is not a correct word`);
         alert(`Congoo!!!!  bhai ${userWord.toLowerCase()} is a correct word`);
        
    console.log(userWord);
 }
 refreshBtn.addEventListener("click", initGame);
 checkBtn.addEventListener("click",checkWord);

 
 