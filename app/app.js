const seletor = document.querySelector.bind(document);

const controller = new CompraController();

seletor('#valor').addEventListener('change', Maskara.dinheiroMask);
seletor('.form').addEventListener('submit', controller.adiciona.bind(controller));