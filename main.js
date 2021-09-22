//var nome = "lindem";
//var idade = 28;
//var idade2 = 2;
//var frase = "Japão é o melhor time do mundo";
//alert(idade + idade2 +" anos");

//console.log(frase.toUpperCase());
//console.log(frase.toLowerCase());
/*var n1 = 4;
var n2 = 5;

console.log(n1 * n2);*/
//arry

//var lista =[ "maça", "pera", "uva"];

//lista.push()
//lista.pop()
//console.log(lista.length);
//console.log(lista[1]);
//console.log(lista.reverse());

//var fruta = [{nome: "amizade", tipo:"divino"}, {nome: "maldade", tipo:"cruel"}]
//console.log(fruta[1].nome);

/*var idade = prompt("Qual é a sua idade?")
//var idade = 18;
if(idade>=18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};*/

/*var caunt = 0
while (caunt <= 100) {
    console.log(caunt);
    caunt = caunt + 1;
}*/

/*var caunt;
for(caunt=0; caunt <= 5; caunt++) {
    console.log(caunt);
};*/

/*var d = new Date();
alert(d.getMinutes());*/

/*function soma(n1,n2){
    return(n1+n2);
}
alert(soma(10,3));*/

/*function setReplace(frase,nome, novo_nome){
    return frase.replace(nome,novo_nome);
}

alert(setReplace("vai Japão","Japão", "USA"));*/

/*function clicou(){
    alert("Obrigado por clicar!");
}*/


/*function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
}
/*function redirecionar(){
    window.open("https://www.youtube.com/watch?v=rIS3hZ3zf4Q/");    
    window.location.href = "https://www.youtube.com/watch?v=rIS3hZ3zf4Q"
}*/

/*function omouse(){
    document.getElementById("usar_o_mouse").innerHTML = "obrigado por";
    //alert("Tocar texto");
}
function voltar(){
    document.getElementById("usar_o_mouse").innerHTML = "Passe o mouse aqui!";
}*/

function omouse(elemento){
    elemento.innerHTML = "Obrigado por clicar!";
}
function voltar(elemento){
    elemento.innerHTML = "Obrigado por clicar!";
}

function load(){
    alert("Pagína carregada!")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}