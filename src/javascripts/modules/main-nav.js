export default class MainNav {
    constructor(el) {
        this.el = el
        var doc = document.documentElement;

        var allowToChangeMenu = false;

        // Document sizes
        var docWidth = 0;
        // var docHeight = 0;
        
        // First load
        var lastScrollPosition = 0;
        var menuFixed = false;
        checkMenuPosition();
        getWindowSize();

        window.addEventListener('scroll', function(e) {
            if (allowToChangeMenu) {
                checkMenuPosition();
            }
        });

        window.addEventListener('resize', function(e) {
            getWindowSize();
        });

        function getTop() {
            return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        }

        function getWindowSize() {
            docWidth = doc.clientWidth;
            // docHeight = doc.clientHeight;

            if (docWidth >= 992) {
                allowToChangeMenu = true;
                checkMenuPosition();
            } else {
                allowToChangeMenu = false;
                clearClasses();
            }
        }

        function checkMenuPosition() {
            lastScrollPosition = getTop();

            if (lastScrollPosition > 0 && !menuFixed) {
                menuFixed = true;
                updateMenu(menuFixed);
            } else if(lastScrollPosition === 0) {
                menuFixed = false;
                updateMenu(menuFixed);
            }
        }

        function updateMenu() {
            clearClasses();

            if (menuFixed) {
                el.classList.add('bg-secondary');
            } else {
                el.classList.add('bg-transparent');
            }
        }

        function clearClasses() {
            el.classList.remove('bg-transparent');
            el.classList.remove('bg-secondary');
        }
    };
}
  