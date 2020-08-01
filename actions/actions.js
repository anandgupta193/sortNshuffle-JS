import { Utils } from '../utils/utils.js';

class Actions {

    // to set the parent element where cards will get rendered
    setParentElement(elem) {
        this.parentElem = elem;
    }

    render() {
        // create shuffle button
        const shuffleButtonNode = Utils.createElement({
            name: 'button',
            id: `button-shuffle`,
            className: 'button',
        });
        const shuffleTextNode = document.createTextNode('Shuffle');
        shuffleButtonNode.appendChild(shuffleTextNode);
        this.parentElem.appendChild(shuffleButtonNode);

        // create sort button
        const sortButtonNode = Utils.createElement({
            name: 'button',
            id: `button-sort`,
            className: 'button',
        });
        const sortTextNode = document.createTextNode('Sort');
        sortButtonNode.appendChild(sortTextNode);
        this.parentElem.appendChild(sortButtonNode);

    }
    
}
  
export { Actions };