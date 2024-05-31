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

//сreate  main title code
function getMainTitle(text) {
    const title = document.createElement('h1');
    title.classList.add('main-title');
    title.textContent = text;
    return title;
}

//home page code
function getMainPage() {
    const page = document.createElement('div');
    page.classList.add('page', 'main-page', 'container');

    const mainTitle = getMainTitle('Home page');

    const list = document.createElement('ul');
    list.classList.add('product-list', 'list-reset');

    page.append(mainTitle); //add main title in page
    return page;

}

const header = getHeader();
const pageContainer = getPageContainer();

const mainPage = getMainPage();
pageContainer.append(mainPage);

app.append(header, pageContainer) 