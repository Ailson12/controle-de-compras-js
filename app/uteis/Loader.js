class Loader {
  static load(ativar = false) {
    if (ativar) {
      seletor('#loader').classList.remove('esconder');
    } else {
      seletor('#loader').classList.add('esconder');
    }
  }
}