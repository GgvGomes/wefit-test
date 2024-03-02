function ChangeMenu() {
    const groupMenu = document.getElementsByClassName('btn-group-vertical')[0];

    groupMenu.style.flexDirection = 'row';
    groupMenu.style.alignItems = 'center';
    groupMenu.style.justifyContent = 'flex-start';
    groupMenu.style.gap = '12px';
    groupMenu.style.width = '100%';

    const buttonsMenu = groupMenu.getElementsByClassName('btn-secondary');

    for (let i = 0; i < buttonsMenu.length; i++) {
        let item = buttonsMenu.item(i);
        item.style.borderRadius = '5px';
        item.style.width = 'fit-content';
        item.style.flex = 'none';
        item.style.padding = '0.375rem 1.2rem';
    }
}

function ChangeHeader() {
    const header = document.getElementsByClassName('jumbotron')[0];

    header.style.backgroundColor = '#6c757d';
    header.style.color = '#fff';
    header.style.textAlign = 'right';

    const buttonPrimary = document.getElementsByClassName('btn-primary')[0];

    buttonPrimary.style.backgroundColor = '#27a844';
    buttonPrimary.style.borderColor = '#27a844';
    buttonPrimary.style.color = '#fff';
}

function AddItemList() {
    const itemList = document.getElementsByClassName('list-group')[0];

    // remove other actives 
    itemList.getElementsByClassName('active')[0].classList.remove('active');
    itemList.style.fontWeight = '500';

    // Quarto item
    const quarto = document.createElement('li');
    quarto.className = 'list-group-item active';
    quarto.textContent = 'Quarto item';

    // Quinto item
    const quinto = document.createElement('li');
    quinto.className = 'list-group-item';
    quinto.textContent = 'Quinto item';

    // Add to List
    itemList.append(quarto);
    itemList.appendChild(quinto);
}

function init() {
    // ChangeMenu();
    // ChangeHeader();
    // AddItemList();
}

init();