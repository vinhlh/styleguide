/**
 * Styleguide.js
 *
 * This is the ZALORA styleguide bootloader. Do all you need to do
 * which is not module specific in here.
 */

// init fastclick to remove tap delay on mobiles
document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
}, false);

// Helper functions
var hasClass = function (elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}

var addClass = function (elem, className) {
    if (!hasClass(elem, className)) {
        elem.className += ' ' + className;
    }
}

var removeClass = function (elem, className) {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}

// add class "has-image" to all paragraphs that contain images (in pages that use the "page" template)
var paragraphsInMarkdownPage = document.querySelectorAll('.page__content p > img');

for (i = 0; i < paragraphsInMarkdownPage.length; i++) {
    addClass(paragraphsInMarkdownPage[i].parentNode, 'has-image');
}
