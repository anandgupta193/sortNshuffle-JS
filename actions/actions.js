import { Utils } from '../utils/utils.js';
import { CARDS_DATA } from '../constants/app.constants.js';
import { Cards } from '../cards/cards.js';

class Actions {

    // to set the parent element where cards will get rendered
    setParentElement(elem) {
        this.parentElem = elem;
        this.parentElem.innerHTML = '';
    }

    renderCards(cardsData) {
        const cards = new Cards(cardsData);
        cards.setParentElement(document.getElementById('cards-wrapper'));
        cards.render();
    }

    // handle shuffle click
    onShuffle() {
        const shuffledCards = Utils.shuffle(CARDS_DATA);
        this.renderCards(shuffledCards);
    }

    // handle sort click
    onSort() {
        const sortedCards = CARDS_DATA;
        this.renderCards(sortedCards);
    }

    render() {
        // create shuffle button and attaching event listener
        const shuffleButtonNode = Utils.createElement({
            name: 'button',
            id: `button-shuffle`,
            className: 'button',
        });
        const shuffleTextNode = document.createTextNode('Shuffle');
        shuffleButtonNode.appendChild(shuffleTextNode);
        shuffleButtonNode.addEventListener('click', this.onShuffle.bind(this));
        this.parentElem.appendChild(shuffleButtonNode);

        // create sort button and attaching event listener
        const sortButtonNode = Utils.createElement({
            name: 'button',
            id: `button-sort`,
            className: 'button',
        });
        const sortTextNode = document.createTextNode('Sort');
        sortButtonNode.appendChild(sortTextNode);
        sortButtonNode.addEventListener('click', this.onSort.bind(this));
        this.parentElem.appendChild(sortButtonNode);

    }
    
}
  
export { Actions };