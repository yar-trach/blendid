export default class ShortList {
    constructor(el) {
        this.el = el

        let length = el.getElementsByTagName("li").length; 
        console.log(length);

        if (length > 4) {
            // var para = document.createElement("p");
            // var node = document.createTextNode("This is new.");
            // para.appendChild(node);
            // el.appendChild(para);
            // el.prependChild(para);

            el.classList.add('_long');
        }
    }
}
  