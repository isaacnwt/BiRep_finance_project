
function coletaDados(){

    //Coletando os valores na dom
    let nome = document.getElementById("nome").value;
    let produto = document.getElementById("produto").value;
    let valor = document.getElementById("valor").value;

    if(validaForm(nome,"nome") == true && validaForm(produto,"produto") == true && validaForm(valor,"valor")== true){
        AddWebStorage(nome, produto, valor)
    } 
    
    //Adicionar esses dados a um vetor
   
}

function AddWebStorage(nome, produto, valor){
    
    //Usar um objeto javascript para receber os dados do formulário

    const compra = {
        "nome": nome,
        "produto": produto,
        "valor": valor
    }
    const compra_string = JSON.stringify(compra);

    const lista_chaves = [];
    for (let i = 0; i < localStorage.length; i++) {
        var elemento = localStorage.key(i);
        lista_chaves.push(elemento);
    }

    // comparando errado, só dá certo na primeira vez
    if (!lista_chaves.includes(produto)) {
        localStorage.setItem(compra.produto, compra_string);
        console.log("produto adicionado") ;   
    } else {
        // localStorage.setItem(compra.produto + '.1', compra_string);
        console.log("chave duplicada");
    }



}

function validaForm(dado,campo) {

    if(dado == ""){
        alert("Preencha o campo " + campo)
        return false;
    }
    else {
        return true;
    }
  
}
