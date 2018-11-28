[Back to Table of Contents](https://github.com/jkbicbic/XUI)

# Global CSS

Global classes can be used on any elements to change its shape and look

#### Flex Formatting
----
Add `flx` to a `<div>` tag to enable flex formatting

#### Inline Format

If you want the childs of a div to be inline and flexible, adding `inline` class will format the child to display inline

example
```HTML
<div class="flx inline">
    <div>inline</div>
    <div>inline</div>
    <div>inline</div>
</div>
```

If you want the child elements to have equal width just add the class `grow`

example
```HTML
<div class="flx inline grow">
    <div>inline</div>
    <div>inline</div>
    <div>inline</div>
</div>
```

Or if you want an specific child to expand width based on remaining space of the container, Just add class `flx-grow` on that child
```HTML
<div class="flx inline">
    <div class="flx-grow">inline</div>
</div>
```

#### Column Format

To display the childs vertically add `column` instead of `inline`

example
```HTML
<div class="flx column">
    <div>inline</div>
    <div>inline</div>
    <div>inline</div>
</div>
```

#### Float Formatting
----
adding `floatable` to an element will make the childs float ready

```HTML
<div class="floatable">
    ...
</div>
```

to float a child element left or right just add `float--left` or `float--right` respectively

```HTML
<div class="floatable">
    <div class="float--left">
        ...
    </div>
    <div class="float--right">
        ...
    </div>
</div>
```

#### Box Model Modifiers
----
applying this modifiers will alter the properties of a box model

##### No Border

class `nb` will remove any existing borders of an element

example
```HTML
<div class="card nb">
    ...
</div>
```

##### No Margin

class `nm` will remove any existing margins of an element

example
```HTML
<div class="card nm">
    ...
</div>
```

#### Plump

adding `plump` class will display the element with button paddings and margins

### Divider
----
apply class `divider` to a `<hr/>`

example

```HTML
<hr class="divider"/>
```

[Prev: Getting Started](https://github.com/jkbicbic/XUI/blob/master/docs/Getting-Started.md#Getting-Started) [Next: Navigation Header](https://github.com/jkbicbic/XUI/blob/master/docs/Navigation-Header.md#Navigation-Header)
