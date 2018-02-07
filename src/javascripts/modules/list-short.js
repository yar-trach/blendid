export default class ShortList {
    constructor(el) {
        this.el = el

        let length = el.getElementsByTagName('li').length; 

        if (length > 4) {
            el.classList.add('_long');

            // Create wrapper
            let wrapper = document.createElement('label');
            wrapper.className = 'w-100';

            // Create helper (checkbox input)
            let helper = document.createElement('input');
            helper.setAttribute('type', 'checkbox');
            helper.className = 'list-short__helper';
            
            // Wrap list with label
            el.parentNode.insertBefore(wrapper, el);
            wrapper.appendChild(el);

            // Insert helper (checkbox) before list
            el.parentNode.insertBefore(helper, el);
        }
    }
}
  