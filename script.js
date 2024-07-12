function adicionarElemento() {
  var texto = document.getElementById('textInput').value.trim();
  if (texto !== '') {
    var novoElemento = document.createElement('div');
    novoElemento.textContent = texto;
    novoElemento.classList.add('elemento');
    document.getElementById('elementosContainer').appendChild(novoElemento);
    document.getElementById('textInput').value = '';
  }
}