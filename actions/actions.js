import { Utils } from '../utils/utils.js';
import { CARDS_DATA } from '../constants/app.constants.js';
import { Cards } from '../cards/cards.js';

class Actions {

    cardsData = CARDS_DATA;

    // to set the parent element where cards will get rendered
    setParentElement(elem) {
        this.parentElem = elem;
        this.parentElem.innerHTML = '';
    }

    renderCards() {
        const cards = new Cards(this.cardsData);
        cards.setParentElement(document.getElementById('cards-wrapper'));
        cards.render();
    }

    // handle shuffle click
    onShuffle() {
        this.cardsData = Utils.shuffle(CARDS_DATA);
        this.renderCards();
    }

    // handle sort click
    onSort() {
        this.cardsData = CARDS_DATA;
        this.renderCards();
    }

    onResize() {
        this.renderCards();
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

        // handling dynamic media queries
        window.onresize = this.onResize.bind(this);

    }
    
}
  
export { Actions };