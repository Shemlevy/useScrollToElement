# use-scroll-to-element

> ✨ Scroll to element give the ability to scroll to any element in the app from a place far a head
> without knowing on the Component anything (if it has been rendered or not)

#Getting started

    import { ScrollToElement } from "use-scroll-to-element";

    export const {
        useScroll: useScrollToBottom,
        scroll: scrollToBottom
    } = new ScrollToElement();



* ScrollToElement can apply just on "real" elements that is on the DOM - will not work on virtual lists etc.
* @scroll - promise function once solved will scroll to the element by the id was generated from useScroll.
* @useScroll - should be placed in the Component element, returning the id to attach to the desired scrolled element.

        @return   {Object}   
        object with scroll and useScroll
    

* @scroll - promise function once solved will scroll to the element by the id was generated from useScroll.
* @useScroll - should be placed in the Component element, returning the id to attach to the desired scrolled element.

        @example - 
        export const {
            scroll: scrollToImg,
            useScroll: useScrollToImg,
        } = new ScrollToElement();
  


**./components/Main.js**

    export const Main = () => {
      const id = useScrollToImg()

      return
        (<>
            <div>Hello World</div>
            {...lotsOfElements}
            <img id={id} src='./image.jpg' />
        </>)
      }

  

**./modals/Main.js**

    export const Main = () =>
        (<button onClick={scrollToImg}>Show Image</button>)



#Live Example
https://codesandbox.io/s/use-scroll-to-element-3mc2p?file=/src/indexScroll.js:0-229
