import { v4 as uuid } from 'uuid';
import { useLayoutEffect } from 'react';

import { Deferred } from './deferred';

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



const scrollToElementId = (id) => {
  const el = document.getElementById(id);
  el?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  });
};

export class ScrollToElement {
  id = uuid();

  df = new Deferred();

  scroll = () => {
    this.df.promise.then(() => {
      setTimeout(() => scrollToElementId(this.id), 0);
    });
  };

  useScroll = () => {
    useLayoutEffect(() => {
      this.df.resolve('resolve');
      return () => {
        this.df = new Deferred();
      };
    }, []);
    return this.id;
  };
}

