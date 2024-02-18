let drawAreaOccupied = false, currentObject, translateFactor = 10, scaleFactor = 2, rotateFactor = 20;

function onDragStart(e) {
    e.dataTransfer.setData('text', e.target.id);
}

function onDragOver(e) {
    e.preventDefault();
}

function onDrop(e) {
    if (!drawAreaOccupied) {
        const id = e.dataTransfer.getData('text');
        currentObject = document.getElementById(id);
        const dropzone = e.target;
        dropzone.appendChild(currentObject);
        e.dataTransfer.clearData();
        drawAreaOccupied = true
    }
}

function reloadPage() {
    location.reload();
}

function translate2D() {
    currentObject.style.transform += ` translate(${translateFactor}px, ${translateFactor}px)`;
}

function scale() {
    currentObject.style.transform += ` scale(${scaleFactor}, ${scaleFactor})`;
}

function rotate() {
    currentObject.style.transform += ` rotate(${rotateFactor}deg)`;
}
