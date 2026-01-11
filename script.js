const imageUrlInput = document.getElementById('imageUrl');
const addImageBtn = document.getElementById('addImageBtn');
const deleteImageBtn = document.getElementById('deleteImageBtn');
const gallery = document.getElementById('gallery');

let selectedImage = null;

// Imágenes locales por defecto (motos)
const defaultImages = [
    'assets/img/foto1.jpg',
    'assets/img/foto2.jpg',
    'assets/img/foto3.jpg'
];

// Cargar imágenes al iniciar
defaultImages.forEach((src) => {
    const img = document.createElement('img');
    img.src = src;

    img.addEventListener('click', () => {
        seleccionarImagen(img);
    });

    gallery.appendChild(img);
});

// Agregar imagen desde URL
addImageBtn.addEventListener('click', () => {
    const url = imageUrlInput.value;

    if (url === '') {
        alert('Por favor ingresa una URL de imagen');
        return;
    }

    const img = document.createElement('img');
    img.src = url;

    img.addEventListener('click', () => {
        seleccionarImagen(img);
    });

    gallery.appendChild(img);
    imageUrlInput.value = '';
});

// Seleccionar imagen (solo una a la vez)
function seleccionarImagen(img) {
    if (selectedImage) {
        selectedImage.classList.remove('selected');
    }

    selectedImage = img;
    selectedImage.classList.add('selected');
}

// Eliminar imagen seleccionada
deleteImageBtn.addEventListener('click', () => {
    if (!selectedImage) {
        alert('No hay ninguna imagen seleccionada');
        return;
    }

    gallery.removeChild(selectedImage);
    selectedImage = null;
});

// Atajo de teclado: tecla Delete
document.addEventListener('keydown', (e) => {
    if (e.key === 'Delete' && selectedImage) {
        gallery.removeChild(selectedImage);
        selectedImage = null;
    }
});