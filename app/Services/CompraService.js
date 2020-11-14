class CompraService {
    constructor() {
        this._compras = [];
    }
    
    adiciona(compra) {
        this._compras.push(compra);
    }

    paraArray() {
        return [].concat(this._compras);
    }
}