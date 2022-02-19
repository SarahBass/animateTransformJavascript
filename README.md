# animateTransformJavascript
How to animate simple floating character using animateTransform

<img src="https://github.com/SarahBass/animateTransformJavascript/blob/main/screenanimationrecording.gif" width="500" height="300">

In the frames files you are provided with sample frames 1-6 that I created using the free software Vectornator for Ipad.
Change the CSS size and coordinates of the images to fit your needs. I also provided a background.jpeg example. 

This simple animation uses 6 frames, but you could definitely add more frames. It is animated frame by frame. 

Contents: | Description:
--------- | ------------
index.js  | Main Javascript Imports
index.view | initializes JS library of resources
widgets.defs | imports to SDK library and formats the animation
styles.css | adds formatting
Frames    | Image Files not included

## Animation groups:

> body(labeled star)- move the body up and down, or stand still every minute
> 
> eyes- change eyes every minute
> 
> cheeks- change cheeks if you want to add blush effects
> 
> mouth- change mouth every second for mouth animations
> 
> object(labeled cute)- change objects that float up and down, or stay still with the body

Also includes code for changing the body of the character for holiday modes! The code has 10 possible bodies for each holiday mode which it changes daily for 10 day periods. These appear when you reach your Fitbit steps goal, but you could easily remove that or change it. 

It uses real time to change animations instead of Delay, so that you can run multiple things at the same time. 
