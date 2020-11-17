const seletor = document.querySelector.bind(document);

const controller = new CompraController();

seletor('.form').addEventListener('submit', controller.adiciona.bind(controller));

$('#valor').mask('000.000.000.000.000,00', {reverse: true});