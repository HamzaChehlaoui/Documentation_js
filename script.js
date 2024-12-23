    let addButton = document.getElementById('addButton');
    let modifyButton = document.getElementById('modifyButton');
    let removeButton = document.getElementById('removeButton');
    let itemList = document.getElementById('itemList');
    let newItemInput = document.getElementById('newItemInput');

    // Add 
    addButton.addEventListener('click', function () {
      let newItemText = newItemInput.value.trim();
      if (newItemText !== '') {
        let newItem = document.createElement('li');
        newItem.textContent = newItemText;
        itemList.appendChild(newItem);
        newItemInput.value = '';
      } else {
        // SweetAlert2 instead of alert
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: "Veuillez entrer un texte pour l'élément.",
        });
      }
    });

    // Modify 
    modifyButton.addEventListener('click', function () {
      if (itemList.children.length > 0) {
        let firstItem = itemList.children[0];
        let newContent = prompt('Entrez le nouveau texte pour le premier élément:', firstItem.textContent);
        if (newContent !== null) {
          firstItem.textContent = newContent;
        }
      } else {
        // SweetAlert2 instead of alert
        Swal.fire({
          icon: 'warning',
          title: 'Liste vide',
          text: 'La liste est vide!',
        });
      }
    });

    // Remove 
    removeButton.addEventListener('click', function () {
      if (itemList.children.length > 0) {
        itemList.removeChild(itemList.children[0]);
      } else {
        // SweetAlert2 instead of alert
        Swal.fire({
          icon: 'warning',
          title: 'Liste vide',
          text: 'La liste est déjà vide!',
        });
      }
    });
  