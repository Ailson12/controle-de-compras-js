var lista = [
    { desc: 'arroz', quantidade: '1', valor: '5.40' },
    { desc: 'bebida', quantidade: '12',valor: '1.99' },
    { desc: 'carne', quantidade: '1', valor: '15.00' }
];

function getTotal(lista) {
    var total = 0;
    for(var key in lista) {
        total += lista[key].valor * lista[key].quantidade;
    }
    document.getElementById('totalValue').innerHTML = formatValue(total);
}

function setList(lista) {

    var table = `<thead><tr><td>DESCRIÇÃO</td><td>QUANTIDADE</td><td>VALOR</td><td>AÇÕES</td></tr></thead><tbody>`;
    for(key in lista) {
        table += `<tr><td>${formatDesc(lista[key].desc)}</td><td>${formatQuantidade(lista[key].quantidade)}</td><td>${formatValue(lista[key].valor)}</td><td><button onclick="setUpdate(${key})">Editar</button><button onclick="deleteDate(${key})">Deletar</button></td></tr>`;
    }
    table += '</tbody>';
    document.getElementById('listTable').innerHTML = table;
    getTotal(lista);
    saveListStorage(lista);
}

function formatDesc(desc) {
    var str = desc.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}

function formatQuantidade(quantidade) {
    return parseInt(quantidade);
}

function formatValue(value) {
    var str = parseFloat(value).toFixed(2) + '';
    str = str.replace(".", ',');
    str = "R$ " + str;
    return str;
}

function addData() {
    if (validation()) {     
        var desc = document.getElementById('desc').value;
        var quantidade = document.getElementById('quantidade').value;
        var valor = document.getElementById('valor').value;

        // o metodo unshift adiciona um ou mais elementos no inicio de um array e retora o numero de elementos atualizados
        lista.unshift({
            desc: desc,
            quantidade: quantidade,
            valor: valor
        });

        setList(lista);   
    }
}

function setUpdate(id) {
    var obj = lista[id];
    document.getElementById('desc').value = obj.desc;
    document.getElementById('quantidade').value = obj.quantidade;
    document.getElementById('valor').value = obj.valor;

    document.getElementById('btnUpdate').style.display = "inline-block";
    document.getElementById('btnAdd').style.display = "none";

    document.getElementById('inputIdUpdate').innerHTML = '<input type="hidden" value="'+id+'" id="idUpdate">';
}

function resetForm() {
    document.getElementById('desc').value = "";
    document.getElementById('quantidade').value = "";
    document.getElementById('valor').value = "";

    document.getElementById('btnUpdate').style.display = "none";
    document.getElementById('btnAdd').style.display = "inline-block";

    document.getElementById('inputIdUpdate').innerHTML = "";

    document.getElementById('errors').style.display = "block";
}

function updateData() {
    if (validation()) {
        var id = document.getElementById('idUpdate').value;
        var desc = document.getElementById('desc').value;
        var quantidade = document.getElementById('quantidade').value;
        var valor = document.getElementById('valor').value;
    
        lista[id] = {
            desc: desc,
            quantidade: quantidade,
            valor: valor
        };
    
        resetForm();
        setList(lista);   
    }
}

function deleteDate(id) {
    if (confirm('deletar este item?')) {
        if (id === lista.length - 1) {
            lista.pop();
        } else if (id === 0) {
            lista.shift();
        } else {
            var arrAuxiIni = lista.slice(0, id);
            var arrAuxEnd = lista.slice(id + 1);
            lista = arrAuxiIni.concat(arrAuxEnd);
        }
        setList(lista);
    }
}

function validation() {
    var desc = document.getElementById('desc').value;
    var quantidade = document.getElementById('quantidade').value;
    var valor = document.getElementById('valor').value;
    var errors = "";
    document.getElementById('errors').style.display = "none";

    if (desc === "") {
        errors += '<p>Digite uma descrição</p>';
    }

    if (quantidade === "") {
        errors += '<p>Digite uma quantidade</p>';
    } else if (quantidade != parseInt(quantidade)) {
        errors += '<p>Digite uma quantidade válida</p>';
    }

    if (valor === "") {
        errors += '<p>Digite um Valor</p>';
    } else if (valor != parseFloat(valor)) {
        errors += '<p>Digite um Valor válido</p>';
    }

    if (errors == "") {
        return true;
    } else {
        document.getElementById('errors').style.display = "block";
        document.getElementById('errors').style.backgroundColor = "rgba(85, 85, 85, 0.3)";
        document.getElementById('errors').style.color = "white";
        document.getElementById('errors').style.padding = "10px";
        document.getElementById('errors').style.margin = "10px";
        document.getElementById('errors').style.borderRadius = "13px";
        document.getElementById('errors').innerHTML = "<h3>Erros: </h3>" + errors;
        return false;
    }
}

function deleteLista() {
    if (confirm('Deletar todos os itens ?')) {
        lista = [];
        setList(lista);
    }
}

function saveListStorage(lista) {
    var jsonStr = JSON.stringify(lista);
    localStorage.setItem('lista', jsonStr);
}

function initListStorage() {
    var testList = localStorage.getItem('list');
    if (testList) {
        lista = JSON.parse(testList);
    }

    setList(lista);
}

initListStorage();