- [CSS Cheat Sheet](#css-cheat-sheet)
  - [Fun CSS Game:](#fun-css-game)
  - [Reference:](#reference)
    - [Flexbox:](#flexbox)
  - [What seletors win out in the cascade depends on:](#what-seletors-win-out-in-the-cascade-depends-on)
  - [CSS3](#css3)

# CSS Cheat Sheet

## Fun CSS Game:
* https://flukeout.github.io/

## Reference:
* https://www.w3schools.com/cssref/css_selectors.asp
* https://css-tricks.com/almanac/
* https://unsplash.com/
* https://fonts.google.com/

* https://www.w3schools.com/css/css_quiz.asp
* https://www.w3schools.com/css/exercise.asp
* https://zero-to-mastery.github.io/resources/

* https://www.freecodecamp.org/learn/responsive-web-design/basic-css/

### Flexbox:
* https://css-tricks.com/snippets/css/a-guide-to-flexbox/
* http://flexboxfroggy.com/
  > Ready to become a flexbox master? Play the Flexbox froggy and you will have no problem with CSS layout any more. Although there are many tools like Bootstrap (which we will cover in the next section) and other libraries, flexbox is the most efficient and elegant way to solve website layout. 
* https://darekkay.com/dev/flexbox-cheatsheet.html

Cascading Style Sheets at the most basic level, indicate that the order of CSS rules matter. 


- .class
- #id
- `*`
- element
- element, element -> groups selectors, ie. each listed selector will be subject to the same css styles
- element element
- element > element
- element + element
- :hover
- :last-child
- :first-child
- !important (not recommended)


## What seletors win out in the cascade depends on:
- [Specificity Calculator](https://specificity.keegan.st/) & [Cascade and inheritance + Specificity Score](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)

```css
/* specificity: 0101 */
#outer a {
    background-color: red;
}
        
/* specificity: 0201 */
#outer #inner a {
    background-color: blue;
}

/* specificity: 0104 */
#outer div ul li a {
    color: yellow;
}

/* specificity: 0113 */
#outer div ul .nav a {
    color: white;
}

/* specificity: 0024 */
div div li:nth-child(2) a:hover {
    border: 10px solid black;
}

/* specificity: 0023 */
div li:nth-child(2) a:hover {
    border: 10px dashed black;
}

/* specificity: 0033 */
div div .nav:nth-child(2) a:hover {
    border: 10px double black;
}

a {
    display: inline-block;
    line-height: 40px;
    font-size: 20px;
    text-decoration: none;
    text-align: center;
    width: 200px;
    margin-bottom: 10px;
}

ul {
    padding: 0;
}

li {
    list-style-type: none;
}            
    
```

- Importance

```css
/* important overwrites any of the cascading style-sheet rules */
p {
  color: pink !important;
}
```

- Source Order:
  - if multiple style-sheets are imported in the <head />, then the first style-sheet takes precedence over the following style-sheets

```html
<head>
    <title>My first website!</title>
    <link rel="stylesheet" type="text/css" href="style.css" />
    <link rel="stylesheet" type="text/css" href="style2.css" />
  </head>
  ```

  `style.css > style2.css`

  ## CSS3
  * make websites even more dynamic with properties like transition and transform on e.g. img:hover
  * we need to make sure that a browser supports CSS3: 
    * https://www.w3schools.com/cssref/css3_browsersupport.asp
    * browser prefixes are needed to make a new feature work as an experimental feature in the browser
    * https://caniuse.com/ 
  * https://thoughtbot.com/blog/transitions-and-transforms
    > Want to learn more about what you can do with Transitions and Transforms? This is probably the best resource there is out there: CSS Transitions and Transforms for Beginners