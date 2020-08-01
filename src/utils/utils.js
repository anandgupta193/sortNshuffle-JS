class Utils {
    static createElement({ name, id, className }) {
        const elem = document.createElement(name);
        elem.id = id;
        elem.className = className;
        return elem;
    }
}
  
export { Utils };