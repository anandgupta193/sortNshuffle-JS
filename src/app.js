import { CARDS_DATA } from './constants/app.constants.js';
import { Utils } from './utils/utils.js';
import { Cards } from './cards/cards.js';
import { Actions } from './actions/actions.js';
class SortNShuffle {

    setRootElementById(rootId) {
        this.rootElem = document.getElementById(rootId);
        this.rootElem.innerHTML = '';
    }
    
    // render sort and shuffle application
    render() {

        // adding cards component to document
        const cardsWrapper = Utils.createElement({
            name: 'div',
            id: 'cards-wrapper',
            className: 'cards-wrapper'
        });
        this.rootElem.appendChild(cardsWrapper);
        
        // adding action component to document
        const actionWrapper = Utils.createElement({
            name: 'div',
            id: 'action-wrapper',
            className: 'action-wrapper'
        });
        this.rootElem.appendChild(actionWrapper);

        // rendering cards
        const cards = new Cards(CARDS_DATA);
        cards.setParentElement(cardsWrapper);
        cards.render();
        
        // rendering actions
        const actions = new Actions();
        actions.setParentElement(actionWrapper);
        actions.render();

    }
}

// app bootstrap
const App = new SortNShuffle();
App.setRootElementById('main');
document.body.onload = App.render();
