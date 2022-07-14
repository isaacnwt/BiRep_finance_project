
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
    
    localStorage.setItem(localStorage.length + 1, compra_string);


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


function recuperaDadosWS() {

    const storage = localStorage;

    for (let i = 0; i < storage.length; i++) {
        var compra = JSON.parse(storage.getItem(storage.key(i)));
        console.log(compra)

        var tr = $("<tr>");
        var nome = $("<td>").text(compra.nome);
        var produto = $("<td>").text(compra.produto);
        // falta formatar o preço para 'R$00,00' com .toFixed(2), mas o dado tá como string
        var valor = $("<td>").text("R$" + compra.valor);

        tr.append(nome).append(produto).append(valor);

        $("tbody").append(tr);

    }

    
}

///////////// MAIN //////////////////

recuperaDadosWS();