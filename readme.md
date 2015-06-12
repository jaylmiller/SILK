# idfive SILK

## Libraries/Packages/Dependencies

* Gulp (various plugins)
* Bourbon
* Neat
* Bitters
* Refills

## Install

Navigate to the project folder in terminal and run:

	git clone https://github.com/idfive/SILK.git

Run gulp to begin compiling sass and concatinating javascript.

It's that simple...


##Using Font Icons

To use any font icons, put an svg of the icon in the Icons folder and change the font name in the gulpfile.js. Run gulp to generate the font. In you html, use the class "icon" and the class name of the icon. To see the class names, go /assets/scss/base/_icons.scss.

```html
<i class="icon icon-facebook"></i>
```

### Using Refills

To use any of the Refills components, go to [Refills](http://refills.bourbon.io/ "Bourbon Refills"), then copy and paste the code you'd like to use. Be sure to remove any variables that are not set from the scss.

## Handlebars

Handlebars templates are compiled directly by browserify

```javascript
var template = require('./templates/mytemplate.handlebars');
var html = template({title: "Handlebars", body: "Compiled with Gulp and Browserify"});
```

## Video Module Notes
- Uses <video> tag, so be wary browser support.
- Add poster image when changing src
- Check hardcoded sizes/etc in modules/_video.scss
- Breakpoint size hardcoded in video.js for window resize. change here if needed.
- TODO: pass breakpoint size as a var to video.js from js config (main)
