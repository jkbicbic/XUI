[Back to Table of Contents](https://github.com/jkbicbic/XUI)

# Overriding Styles
----

This framework is maleable!

This means that you can override the existing styles by adding custom `classes`, providing custom `properties` and putting it in `app.scss` located in `v2.wikix.net/app.scss`

example

**index.html**
```HTML
<button class="button prmry custom-class">
    ...
</button>
```

**app.scss**
```CSS
.custom-class{
    /* properties here*/
}
```

but if you want to change the whole design of the `button` class or any other classes, you have to change it in its respective file located in `projectname/scss`. For the comprehensive framework structure click [here](#Framework-Structure)
