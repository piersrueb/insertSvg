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

By default the svg element is inserted within the element. To instead replace the element with the svg use the method below. The initial element classes are preserved.

```js
insertSvg('.my-class', 'replace');
```
