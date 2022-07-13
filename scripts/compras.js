//Primeira função para a coleta de dados

function coletaDados(){
    //Coletando os valores na dom
    let nome = document.getElementById("nome").value;

    let produto = document.getElementById("produto").value;

    let valor = document.getElementById("valor").value;

    console.log(nome, produto, valor);

    if(validaForm(nome,"nome") == true && validaForm(produto,"produto") == true && validaForm(valor,"valor")== true){
        AddWebStorage(nome, produto, valor)
    } 
    console.log('nome, produto, valor:>> ', nome, produto, valor);
    //Adicionar esses dados a um vetor
   
}

function AddWebStorage(nome, produto, valor){
    
    
    //Usar um objeto javascript para receber os dados do formulário

    const compra = {

        "nome": "nome da fita",
        'produto': "produto tal",
       " valor": "preco pago"
    }

    compra.nome = nome;
    compra.produto = produto;
    compra.valor = valor;

    console.log('compra.nome :>> ', compra);

    const compra_string = JSON.stringify(compra);

    
    //Criando um objeto para armazenar os dados em questão

    localStorage.setItem('item comprado',compra_string);


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

//Adicionar esses dados em um vetor de objetos

//Adicionar na local storage 
console.log('entroou :>> ');