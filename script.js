function scrollToSection(id){
  document.getElementById(id).scrollIntoView({
    behavior:'smooth'
  });
}

function checkAnswer(button, correct){

  if(correct){
    button.classList.add("correct");
    button.innerHTML = "✅ Resposta correta!";
  }else{
    button.classList.add("wrong");
    button.innerHTML = "❌ Resposta errada!";
  }

}