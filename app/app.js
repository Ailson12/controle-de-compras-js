import seletor from "./uteis/Seletor.js";
import Loader from "./uteis/Loader.js"
import CompraController from "./Controllers/CompraController.js";

seletor('body').addEventListener('onload', Loader.load());

const controller = new CompraController();
seletor('.form').addEventListener('submit', controller.adiciona.bind(controller));

$('#valor').mask('000.000.000.000.000,00', {reverse: true});