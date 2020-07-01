
import {getPageContent} from "./helpers/puppeteer";


const VIVINO = 'https://www.vivino.com/poggiocaro-brunello-di-montalcino/w/5402268?ref=nav-search';
const _URL = 'http://178.150.139.40/vine/w-searcher.html';

(async function main() {
    try {
        const pageContent = await getPageContent(_URL);

        console.log(pageContent);
    } catch (e) {
        console.log('An error occurred on\n');
        console.log(e);
    }
})();