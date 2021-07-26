# use-scroll-to-element


> ✨ React hook for using scroll to an element before it been rendered

> ✨ Scroll to an element gives the ability to scroll to any element in the app from a place far ahead 
>    without knowing on the Component anything (if it has been rendered or not)

> useScrollToElement HOOK - a tiny hook that useLayoutEffect, ensuring the element is on Dom.
> let you the ability to dispatch an action before the component has rendered and the scroll will happen right after it appears.

## Install
```bash
npm install --save use-scroll-to-element
```

## Usage
```tsx
import { ScrollToElement } from "use-scroll-to-element";

export const {
  useScroll: useScrollToImg,
  scroll: scrollToImg
} = new ScrollToElement();
```


* ScrollToElement can apply just on "real" elements that is on the DOM - will not work on virtual lists etc.
* @scroll - promise function once solved will scroll to the element by the id was generated from useScroll.
* @useScroll - should be placed in the Component element, returning the id to attach to the desired scrolled element.


* @scroll - promise function once solved will scroll to the element by the id was generated from useScroll.
* @useScroll - should be placed in the Component element, returning the id to attach to the desired scrolled element.

  
**./components/Main.js**
```tsx
export const Main = () => {
  const id = useScrollToImg();

  return (
          <>
            <div>Hello World</div>
            {...lotsOfElements}
            <img id={id} src="./image.jpg" />
          </>
  );
};
```

**./modals/GoToImage.js**
```tsx
export const GoToImage = () => <button onClick={scrollToImg}>Show Image</button>;
```



#Live Example
https://codesandbox.io/s/use-scroll-to-element-3mc2p?file=/src/indexScroll.js:0-229
