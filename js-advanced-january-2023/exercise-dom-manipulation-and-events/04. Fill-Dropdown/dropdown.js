function addItem() {
    const menu = document.getElementById('menu');
    const text = document.getElementById('newItemText');
    const value = document.getElementById('newItemValue');
    const option = document.createElement('option');
    option.textContent = text.value;
    option.value = value.value;
    text.value = '';
    value.value = '';
    menu.appendChild(option);
}