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
            className: 'button-shuffle',
        });

        // create sort button
        const sortButtonNode = Utils.createElement({
            name: 'button',
            id: `button-sort`,
            className: 'button-sort',
        });


    }
    
}
  
export { Actions };