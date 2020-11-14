const controller = new CompraController();

document.querySelector('.form').addEventListener('submit', controller.adiciona.bind(controller));