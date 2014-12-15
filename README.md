# jQuery easingScroll
Use of this plugin requires the presence of [jQuery Easing](http://gsgd.co.uk/sandbox/jquery/easing/)



## Usage

Example Usage: js: (in DOM-ready wrapper)
````javascript     
      
     $('[data-scroll-to]').easingScroll([options]);
```` 

The selector should match the attribute contaniing the scrollTo target
      
````html
    <ul>
        <li><a href="#leadership" data-scroll-to="#leadership">Leadership</a></li>
        <li><a href="#our-values" data-scroll-to="#our-values">Our Values</a></li>
        <li><a href="#statistics" data-scroll-to="#statistics">Statistics</a></li>
    </ul>
````

## Options
The following are valid options to for this plugin:
    
    el        - default selector [data-scroll-to]
    offsetTop - distance in pixes to offset from the top (considering sticky navigation etc), defaults to 0px   
    easing    - the jQuery Easing function to use for the animations.
    duration  - Time in ms for animation duration