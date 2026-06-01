function corrigirQuiz(){

    let pontos = 0;

    const respostas =
        document.querySelectorAll(
            'input[value="certo"]:checked'
        );

    pontos = respostas.length;

    const resultado =
        document.getElementById("resultado");

    if(pontos === 3){

        resultado.innerHTML =
        "🏆 Parabéns! Você acertou tudo!";

        resultado.style.color = "green";

    }else if(pontos >= 2){

        resultado.innerHTML =
        `🎉 Você acertou ${pontos} de 3 questões!`;

        resultado.style.color = "#2e8b57";

    }else{

        resultado.innerHTML =
        `📚 Você acertou ${pontos} de 3. Continue estudando!`;

        resultado.style.color = "red";
    }
}