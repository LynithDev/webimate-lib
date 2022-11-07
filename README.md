# Webimate
A small (2061 bytes) SCSS and JavaScript library for your websites.

## Features
- [x] Animation queuing
- [x] Create custom animations easily with SCSS
- [x] Extensive
- [x] No configuration required

## Usage
Adding an animation to an element is quite simple. Simply add the `animate` class along with the name of your preferred animation (e.g. `fade`).
You can also add any animation arguments such as `left` so the element can fade and slide from the left.
#### Fade from the left example
```html
<div class="animate fade left">Hello World</div>
```

### Animation queuing
To queue animations, add a `queue` class followed by a `=` and then the index of where in the queue it should be. (e.g. `queue=2` to be second)

#### Animation queue example
```html
<p class="animate fade left queue=1">I'll animated first</p>
<div class="animate fade left queue=3">I'll be animated last</div>
<div class="animate fade left queue=2">I'll be animated after the p element</div>
```

## License
See [MIT License](./LICENSE)