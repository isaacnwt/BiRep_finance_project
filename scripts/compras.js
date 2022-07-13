
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

    
    //Adicionar objetos no WS
    // Se não existir a KEY, salvar direto
    
    if (1 == 1) {
        localStorage.setItem(compra.produto, compra_string);
        console.log(compra.produto + " adicionado >> " + compra_string )    
    } else {
        //  se não, adicionar KEY + 1
        localStorage.setItem(compra.produto, compra_string);
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
