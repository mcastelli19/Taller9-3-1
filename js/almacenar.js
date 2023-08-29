document.addEventListener('DOMContentLoaded', function () {
    const agregarButton = document.getElementById('agregar');
    const limpiarButton = document.getElementById('limpiar');
    const itemInput = document.getElementById('item');
    const contenedor = document.getElementById('contenedor');
  
    // Cargar ítems almacenados en el almacenamiento local al cargar la página
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    storedItems.forEach(item => {
      agregarItemALaVista(item);
    });
  
    agregarButton.addEventListener('click', function () {
      const newItemValue = itemInput.value.trim();
      
      if (newItemValue !== '') {
        agregarItemALaVista(newItemValue);
        
        storedItems.push(newItemValue);
        localStorage.setItem('items', JSON.stringify(storedItems));
        
        itemInput.value = '';
      }
    });
  
    limpiarButton.addEventListener('click', function () {
      localStorage.removeItem('items');
      contenedor.innerHTML = '';
    });
  
    function agregarItemALaVista(item) {
      const li = document.createElement('li');
      li.className = 'list-group-item';
      li.textContent = item;
      contenedor.appendChild(li);
    }
  });