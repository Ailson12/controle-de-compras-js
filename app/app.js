const seletor = document.querySelector.bind(document);

seletor('body').addEventListener('onload', Loader.load());

const controller = new CompraController();
seletor('.form').addEventListener('submit', controller.adiciona.bind(controller));

$('#valor').mask('000.000.000.000.000,00', {reverse: true});