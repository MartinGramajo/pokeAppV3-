export function guardarEnLocalStorage(objeto) {
  const datosJson = JSON.stringify(objeto.value);
  localStorage.setItem(objeto.key, datosJson);
}

export function leerDeLocalStorage(key) {
  const json = localStorage.getItem(key);
  const dato = JSON.parse(json);
  return dato;
}
