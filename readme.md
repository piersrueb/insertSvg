### Insert Svg

Dynamically insert SVGs directly into the dom.

Place the path to the svg within the data attribute.

```html
<div class="my-class" data-svg="img/cta.svg"></div>
```

#### Insert

Call the function on your class.

```js
insertSvg('.my-class');
```

#### Replace

By default the svg is inserted within the node. To instead replace the node with the svg add the ```replace``` class to the element. Element classes are preserved.

```html
<div class="my-class replace" data-svg="img/cta.svg"></div>
```
