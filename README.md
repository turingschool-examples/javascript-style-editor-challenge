# JavaScript Style Editor Challenge

## Overview

In this exercise, we're going to play with forms not as tools for sending data to a server, but as a way to allow users to manipulate the DOM using JavaScript.  Specifically, we're going to build a form that will allow a user to dynamically change the styles.

The purpose of this drill is to practice using JavaScript to select data a user has entered in a form and pass it to the desired function.

To make it achieve the desired functionality, you need to be familiar with the following concepts:

- [Basics of jQuery Events][] and [Event Handling][], specifically the `submit`
  event
- The jQuery [val() method][] and [css() method][]

If you bind to the `submit` event, you should consider using the
[event.preventDefault() method][] provided by jQuery.

### Workflow

Fork this repository before working on the solution.

It may seem obvious what you have to do, but just to make it extra clear what the expected behavior is:

1. Enter a CSS selector (e.g. `h1`, `#header`, `.faded`) into the left input field
2. Enter a CSS property (e.g. `color`, `padding`, `background-color`) into the middle input field
3. Enter a CSS value for the property (e.g. if the property is `color`, enter something like `blue` or `#ff30eb`)
4. Click the button and watch the page transform before your eyes!

**Note: Here is a video showing this behavior in action: [Style Editor
Video](https://www.dropbox.com/s/t92rafy5wrgklhs/style_editor.mp4?dl=0)**

The solution to this exercise can be broken down into three parts:

1. **retrieving** the values from the form,
2. **passing** those values into the correct jQuery function for manipulating CSS, and
3. **binding** the previous two parts to a particular event using an event handler.

If you are having trouble solving this problem, ask yourself the following questions:

- Is my code correctly bound to the appropriate event?  If not, how can I test for this?
- Do I know how to retrieve the values from the form?
- Am I correctly passing the user data into the function that modifies the page styles?

### Finished?

Create a PR back to this repository with your completed work. In your PR, include a summary of what was the most challenging part of this challenge.

## Resources

* [jQuery][]
* [Basics of jQuery Events][]
* [Event Handling][]
* [val() method][]
* [css() method][]
* [event.preventDefault() method][]

[jQuery]:http://learn.jquery.com
[Basics of jQuery Events]: http://learn.jquery.com/events/event-basics/
[Event Handling]: http://learn.jquery.com/events/handling-events/
[val() method]: http://api.jquery.com/val/
[css() method]: http://api.jquery.com/css/
[event.preventDefault() method]: http://api.jquery.com/event.preventDefault/
