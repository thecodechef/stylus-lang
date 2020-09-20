# Expressive, dynamic, robust CSS

## CSS needs a hero

    body {
      font: 12px Helvetica, Arial, sans-serif;
    }
    a.button {
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
    }


### What if we could omit braces?

    body
      font: 12px Helvetica, Arial, sans-serif;

    a.button
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;


### How about semi-colons?

    body
      font: 12px Helvetica, Arial, sans-serif

    a.button
      -webkit-border-radius: 5px
      -moz-border-radius: 5px
      border-radius: 5px


### Keep things DRY

    border-radius()
      -webkit-border-radius: arguments
      -moz-border-radius: arguments
      border-radius: arguments

    body
      font: 12px Helvetica, Arial, sans-serif

    a.button
      border-radius(5px)


### How about transparent mixins?

    border-radius()
      -webkit-border-radius: arguments
      -moz-border-radius: arguments
      border-radius: arguments

    body
      font: 12px Helvetica, Arial, sans-serif

    a.button
      border-radius: 5px


### Create & Share

    @import 'vendor'

    body
      font: 12px Helvetica, Arial, sans-serif

    a.button
      border-radius: 5px


### Even in-language functions!

    sum(nums...)
      sum = 0
      sum += n for n in nums

    sum(1 2 3 4)
    // => 10


### What if it were all optional?

    fonts = Helvetica, Arial, sans-serif

    body {
      padding: 50px;
      font: 14px/1.4 fonts;
    }
