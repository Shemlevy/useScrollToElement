'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var nanoid = require('nanoid');
var react = require('react');

/**
 * ScrollToElement can apply just on "real" element that is on the DOM - will not work on virtual lists etc.
 * @scroll - promise function once solved will scroll to the element by the id was generated from useScroll.
 * @useScroll - should be placed in the Component element, returning the id to attach to the desired scrolled element.
 *
 * @return   {Object}
 *           object with scroll and useScroll
 *
 * @scroll - promise function once solved will scroll to the element by the id was generated from useScroll.
 * @useScroll - should be placed in the Component element, returning the id to attach to the desired scrolled element.
 *
 * @example
 *    export const {
 *      scroll: scrollToImg,
 *      useScroll: useScrollToImg,
 *    } = new ScrollToElement();
 *
 *    **./components/Main.js**
 *
 *    export const Main = () => {
 *      const id = useScrollToImg()
 *
 *      return
 *          (<>
 *            <div>Hello World</div>
 *            {...lotsOfElements}
 *            <img id={id} src='./image.jpg' />
 *          </>)
 *    }
 *
 *
 *    **./modals/Main.js**
 *
 *    export const Main = () =>
 *      (<button onClick={scrollToImg}>Show Image</button>)
 *
 *
 *
 */

var Deferred = function Deferred() {
  var _this = this;

  this.promise = new Promise(function (resolve, reject) {
    _this.resolve = resolve;
    _this.reject = reject;
  });
};

var scrollToElementId = function scrollToElementId(id) {
  var el = document.getElementById(id);
  el == null ? void 0 : el.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  });
};

var ScrollToElement = function ScrollToElement() {
  var _this2 = this;

  this.id = nanoid.nanoid();
  this.df = new Deferred();

  this.scroll = function () {
    _this2.df.promise.then(function () {
      setTimeout(function () {
        return scrollToElementId(_this2.id);
      }, 0);
    });
  };

  this.useScroll = function () {
    react.useLayoutEffect(function () {
      _this2.df.resolve('resolve');

      return function () {
        _this2.df = new Deferred();
      };
    }, []);
    return _this2.id;
  };
};

exports.ScrollToElement = ScrollToElement;
//# sourceMappingURL=use-scroll-to-element.cjs.development.js.map
