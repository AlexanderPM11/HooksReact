// Función para agregar un elemento al LocalStorage
export function addLocalStorage(clave, valor) {
    localStorage.setItem(clave, JSON.stringify(valor));
}

// Función para leer un elemento del LocalStorage
export function readLocalStorage(clave) {
    const valor = localStorage.getItem(clave);
    return JSON.parse(valor) || [];
}

// Función para eliminar un elemento del LocalStorage
export function deleteLocalStorage(clave) {
    localStorage.removeItem(clave);
}
