class Utils {
    static createElement({ name, id, className }) {
        const elem = document.createElement(name);
        elem.id = id;
        elem.className = className;
        return elem;
    }

    // method to shuffle cards in O(N) time complexity
    static shuffle(cards) {
        const shuffledArray = [...cards];
        for (let i = shuffledArray.length - 1; i >= 0; i -= 1) {
          const randomIndex = Math.floor(Math.random() * shuffledArray.length);
          const temp = shuffledArray[randomIndex];
          shuffledArray[randomIndex] = shuffledArray[i];
          shuffledArray[i] = temp;
        }
        return shuffledArray;
      };
    }
  
export { Utils };