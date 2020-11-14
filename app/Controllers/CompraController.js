class CompraController {
    constructor() {
        let $ = document.querySelector.bind(document);

        this._descricao = $("#descricao");
        this._quantidade = $("#quantidade");
        this._valor = $("#valor");

        this._compras = new CompraService();
    }

    _criarCompra() {
        return new Compra(
            this._descricao.value,
            parseInt(this._quantidade.value),
            parseFloat(this._valor.value)
        );
    }

    _limpaFormulario() {
        this._descricao.value = '';
        this._quantidade.value = 1;
        this._valor.value = 1;
        this._descricao.focus();
    }

    adiciona(evento) {
        evento.preventDefault();
        this._compras.adiciona(this._criarCompra());
        this._limpaFormulario();
        $("#compraModal").modal('hide');
    }
}