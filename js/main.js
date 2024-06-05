import { getHeader } from "./components/header";
import { getPageContainer } from "./components/pageContainer";
import { getProductCard } from "./components/productCard";

const app = document.getElementById('app');

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

    list.append(
        getProductCard('Product 1', 300),
        getProductCard('Product 2', 500),
        getProductCard('Product 3', 200),
    )

    page.append(mainTitle, list); //add main title in page
    return page;

}

const header = getHeader();
const pageContainer = getPageContainer();

function navigation(page) {

    pageContainer.innerHTML = '';

    switch (page) {

        case 'Catalog':
            const catalogPage = getCatalogPage();
            pageContainer.append(catalogPage);
            break;
        case 'Basket':
            const basketPage = getBasketPage();
            pageContainer.append(basketPage);
            break;
        default:
            const mainPage = getMainPage();
            pageContainer.append(mainPage);
            break;

    }
}


function getCatalogPage() {
    const page = document.createElement('div');
    page.classList.add('page', 'catalog-page', 'container');
    return page;
}

function getBasketPage() {
    const page = document.createElement('div');
    page.classList.add('page', 'basket-page', 'container');
    return page;
}

navigation('main-page');

app.append(header, pageContainer)