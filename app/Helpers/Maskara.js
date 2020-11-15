class Maskara {
    constructor() {
        throw new Error('Esta classe não pode ser instânciada');
    }

    static dinheiroMask(evento) {
        evento.target.value = parseFloat(evento.target.value).toFixed(2);
    }
}