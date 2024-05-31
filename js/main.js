const app = document.getElementById('app');

// headder section code
function getHeader() {

    const header = document.createElement('header');
    header.classList.add('header');

    const container = document.createElement('div');
    container.classList.add('container', 'header__container');

    const nav = document.createElement('nav');
    nav.classList.add('navigation');

    let link1 = document.createElement('a');
    link1.href = '';
    link1.classList.add('btn');
    link1.textContent = 'Home page';

    let link2 = document.createElement('a');
    link2.href = '';
    link2.classList.add('btn');
    link2.textContent = 'Catalog';

    let link3 = document.createElement('a');
    link3.href = '';
    link3.classList.add('btn');
    link3.textContent = 'Basket';

    nav.append(link1, link2, link3);
    container.append(nav);

    header.append(container);
    return header;
}

// main section code 
function getPageContainer() {
    const main = document.createElement('main');
    main.classList.add('page-container');

    return main;
}
function getProductCard(title, price) {
    const item = document.createElement('li');
    item.classList.add('product-list__item');

    const productTitle = document.createElement('h2');
    productTitle.classList.add('product-list__title');
    productTitle.textContent = title;

    const productPrice = document.createElement('strong');
    productPrice.classList.add('product-list__price');
    productPrice.textContent = ` ${price} usd `;

    const addBasket = document.createElement('button');
    addBasket.classList.add('btn');
    addBasket.textContent = 'In basket';

    item.append(productTitle, productPrice, addBasket);

    return item;
}

//сreate  main title code
function getMainTitle(text) {
    const title = document.createElement('h1');
    title.classList.add('main-title');
    title.textContent = text;
    return title;
}

// create description card code
function getDescription(text) {
    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = text;
    return description;
}

//home page code
function getMainPage() {
    const page = document.createElement('div');
    page.classList.add('page', 'main-page', 'container');

    const mainTitle = getMainTitle('Home page');

    const list = document.createElement('ul');
    list.classList.add('product-list', 'list-reset');

    list.append(
        getProductCard('Product 1', 300),
        getProductCard('Product 2', 500),
        getProductCard('Product 3', 200),
    )

    page.append(mainTitle, list); //add main title in page
    return page;

}

//second page  - product page
function getProductPage() {
    const page = document.createElement('div');
    page.classList.add('page', 'main-page', 'container');

    const mainTitle = getMainTitle('Product');
    const description = getDescription('Product description');

    page.append(mainTitle, description); //add productPage in page
    return page;

}

const header = getHeader();
const pageContainer = getPageContainer();

// const mainPage = getMainPage();
// pageContainer.append(mainPage);

const productPage = getProductPage();
pageContainer.append(productPage);

app.append(header, pageContainer) 