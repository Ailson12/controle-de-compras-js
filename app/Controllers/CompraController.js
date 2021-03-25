import CompraService from "../Services/CompraService.js";
import CompraView from "../Views/compra/CompraView.js";
import Compra from "../Models/Compra.js";
import Alert from "../Views/alert/Alert.js";
import seletor from "../uteis/Seletor.js";
export default class CompraController {
    constructor() {
        this._descricao = seletor("#descricao");
        this._quantidade = seletor("#quantidade");
        this._valor = seletor("#valor");

        this._compras = new CompraService();
        this._compraView = new CompraView('#compra-table');
        this._compraView.update(this._compras);
    }

    _criarCompra() {
        return new Compra(
            this._descricao.value,
            parseInt(this._quantidade.value),
            parseFloat(this._valor.value).toFixed(2)
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
        this._compraView.update(this._compras)
        this._limpaFormulario();
        $("#compraModal").modal('hide');
        Alert.template('Compra cadastrada com sucesso!');
    }
}