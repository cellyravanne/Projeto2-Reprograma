//Array de objetos
let arrayRespostas = [
    {imageSrc: "./assets/img/01-sim.png", answer:"yes"},
    {imageSrc: "./assets/img/02-sim.png", answer:"yes"},
    {imageSrc: "./assets/img/03-sim.png", answer:"yes"},
    {imageSrc: "./assets/img/04-sim.png", answer:"yes"},
    {imageSrc: "./assets/img/05-nao.png", answer:"no"},
    {imageSrc: "./assets/img/06-nao.png", answer:"no"},
    {imageSrc: "./assets/img/07-sim.png", answer:"yes"},
    {imageSrc: "./assets/img/08-sim.png", answer:"yes"},
    {imageSrc: "./assets/img/09-nao.png", answer:"no"},
    {imageSrc: "./assets/img/10-sim.png", answer:"yes"}
];

let imgQuestion = document.querySelector(".imgQuestion");
let i = 0;
let arrayAnswers = [];
let score = 0;

//Código para guardar as respostas e a quantidade de acertos
function sendAnswer(answer){    
    if(i < arrayRespostas.length ){
       
        if(answer === arrayRespostas[i].answer){
            score++;
            //push = Adicionar valor ao array
            arrayAnswers.push("Acertou");
                
        }else{
            arrayAnswers.push("Errou");
        }
        i++;
        // Guardar no storage da sessão
        sessionStorage.setItem("score", score);
        //if ternário
        // pergunta ? caso a resposta seja sim : caso a resposta seja não
        i === arrayRespostas.length ? window.location.href ="resultado.html" : imgQuestion.setAttribute("src", arrayRespostas[i].imageSrc);
    }
    
    sessionStorage.setItem("result", arrayAnswers);

}

//Pegar o valor e tirar as vírgulas
let arrayShowResults = sessionStorage.getItem("result").split(",");

//mostrar os resultados no results.html
let scoreText = document.querySelector("#score-text");
scoreText.innerHTML = sessionStorage.getItem("score");

let news = document.querySelector(".news");
if( sessionStorage.getItem("score") <= 3){
    news.setAttribute("src", "./assets/img/emoticons/Face-chatiado.png");
}else if(sessionStorage.getItem("score")> 7){
    news.setAttribute("src", "./assets/img/emoticons/face-feliz.png");
}else{
    news.setAttribute("src", "./assets/img/emoticons/face-ok.png");
}


arrayShowResults.forEach(function(valor, indicador){
    let p = document.createElement("p");
    p.textContent = (indicador+1) + " " + valor;
    p.id = valor === "Acertou" ? "paragraph-win" : "paragraph-lose";
    document.getElementById("acertos").appendChild(p);
});


//Jogar novamente
function restart(){
    window.location.href="index.html"
}