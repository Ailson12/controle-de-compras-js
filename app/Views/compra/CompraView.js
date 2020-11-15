class CompraView {
    constructor(elemento) {
        this._elemento = document.querySelector(elemento);
    }

    update(model) {
        this._elemento.innerHTML = this.template(model);
    } 

    template(model) {
        return `
        <table class="styled-table w-100">
            <thead>
                <tr>
                    <th>Ações</th>
                    <th>Descrição</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                ${
                    !model.paraArray().length
                    ? `<tr> <td class="text-center" colspan="4">Sem Compras Cadastradas</td> </tr>`
                    : 
                    model.paraArray().map(compra => {
                        return `<tr>
                            <td>
                                <div class="dropdown">
                                    <button class="btn text-white dropdown-toggle azul-escuro" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Ação
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item fundo-acoes" href="#" ><i class="fas fa-edit mr-3"></i> Editar</a>
                                        <a class="dropdown-item fundo-acoes" href="#"><i class="fas fa-trash mr-3"></i>Deletar</a>
                                    </div>
                                </div>  
                            </td>
                            <td>${compra.descricao}</td>
                            <td>${compra.quantidade}</td>
                            <td>R$ ${compra.valor}</td>
                        </tr>
                        `
                    }).join('')
                }
            </tbody>
        </table>
        `
    }
}