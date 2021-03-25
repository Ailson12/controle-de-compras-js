export default class Compra {
    constructor(_descricao, _quantidade, _valor) {
        Object.assign(this, { _descricao, _quantidade, _valor });
        Object.freeze(this);
    }

    get descricao() {
        return this._descricao;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor.replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
    }
}