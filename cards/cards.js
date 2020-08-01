import { Utils } from '../utils/utils.js';

class Cards {
    
    data = [];
    parentElem = null;
    instance = null;

    constructor(data) {
        // setting data for cards to render and display
        this.data = data;
    }

    // to set the parent element where cards will get rendered
    setParentElement(elem) {
        this.parentElem = elem;
        this.parentElem.innerHTML = '';
    }

    render() {

        // rendering cards in loop and adding to cards-wrapper element
        this.data.map(card => {
            const cardNode = Utils.createElement({
                name: 'section',
                id: `card-${card.value}`,
                className: 'card-wrapper',
            });
            const cardTextNode = document.createTextNode(card.value);
            cardNode.appendChild(cardTextNode);
            cardNode.style['background-color'] = card.color;
            this.parentElem.appendChild(cardNode);
        });
    }
}
  
export { Cards };