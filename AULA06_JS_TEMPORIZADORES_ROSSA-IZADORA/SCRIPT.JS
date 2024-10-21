// function acao(){
//     document.write("executando ...<br/>")

// }



// temporizador

// setInterval(acao,2000)


// setInterval(()=>(document.write("executando atraves do arrow functions ...<br/>")),1000)

// clearInterval(timer);

// var timer = setInterval(()=>(document.write("executando atraves do arrow functions ...<br/>")),1000)

// outro temporizador

function acao2() {
    document.write("Executando com o setTimeout! ...<br/>");
}

setTimeout(acao2, 3000);

setTimeout(() => {
    document.write("Executando com arrow function");
}, 4000);
