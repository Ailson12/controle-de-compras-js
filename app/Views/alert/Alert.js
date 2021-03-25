export default class Alert {
    constructor() {
        throw new Error("Esta classe não pode ser instânciada");
    }

    static template(mensagem) {
        return iziToast.success({
                message: mensagem,
                position: 'topRight'
            });
    }
}