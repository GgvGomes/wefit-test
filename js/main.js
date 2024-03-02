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
    itemList.appendChild(quarto);
    itemList.appendChild(quinto);
}

const newCards = [
    '',
    'https://lh3.googleusercontent.com/lTvOiSc4H8MhE86CEVxMMOye8rqBmhZ_P3fabucwrywrkYVWT-Im09onuSkRkReMTaOfJu9A3kcu12ZU7UaFyzN7bw=s1280-w1280-h800',
    'https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0',
    'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/128055969/original/c850efd44900a830ee6b91270c21f89643fe1b4d/write-a-short-summary-report-or-document-in-french.jpg',
]


function ChangeCards() {
    const sectionCards = document.getElementsByClassName('container p-4')[0].getElementsByClassName('row')[2];

    const cards = sectionCards.getElementsByClassName('col-lg-3');


    const newOrderCards = [
        cards.item(3).getElementsByClassName('card')[0],
        cards.item(0).getElementsByClassName('card')[0],
        cards.item(2).getElementsByClassName('card')[0],
        cards.item(1).getElementsByClassName('card')[0]
    ];

    // animais, tecnologia, pessoas, natureza
    // natureza, animais, pessoas, tecnologia
    for (let i = 0; i < newOrderCards.length; i++) {
        const oldCard = cards[0];

        const newCard = document.createElement('div');
        newCard.className = 'col-lg-3 new';
        newCard.appendChild(newOrderCards[i]);

        if (i === 1) {
            const btnActive = newCard.getElementsByClassName('btn-primary')[0];
            btnActive.style.backgroundColor = '#27a844';
            btnActive.style.borderColor = '#27a844';
        }

        sectionCards.removeChild(oldCard);
        sectionCards.append(newCard);
    }
}

function init() {
    // ChangeMenu();
    // ChangeHeader();
    // AddItemList();
    ChangeCards();
}

init();