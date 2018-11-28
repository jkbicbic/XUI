# WIKIXUI (Incomplete)
CSS framework for WIKIX
#### Table of Contents
----
* [Global Css (incomplete)](#Global%20CSS)
    + [Flex Formatting](#Flex%20Formatting)
        - [Inline Format](#Inline%20Format)
        - [Column Format](#Column%20Format)
    + [Float Formatting](#Float%20Formatting) 
    + [Box Model Modifiers](#Box%20Model%20Modifiers)
    + [Divider](#Divider)
* [Navigation Header](#Navigation%20Header)
    + [Responsive and Mobile Sidebar](#Responsiveness%20and%20Mobile%20Sidebar)
    + [Dropdowns](#Dropdowns)
    + [Notifications](#Notifications)
* [Sections (incomplete)](#Sections)
* [Card (to be improved)](#Card)
    + [Card Images](#Card%20Images)
* [Images (incomplete & to be improved)](#Images)
* [Buttons (incomplete)](#Buttons)
* [Input Groups (incomplete)](#Inputs%20Groups)
    + [Input](#Input)
    + [Button](#Button)

# Global CSS
----
The following classes can be applied to any elements.

#### Flex Formatting
----
Add `flx` to a `<div>` tag to enable flex formatting

#### Inline Format

If you want the childs of a div to be inline and flexible, adding `inline` class will format the child to display inline

example
```
<div class="flx inline">
    <div>inline</div>
    <div>inline</div>
    <div>inline</div>
</div>
```

If you want the child elements to have equal width just add the class `grow`

example
```
<div class="flx inline grow">
    <div>inline</div>
    <div>inline</div>
    <div>inline</div>
</div>
```

Or if you want an specific child to expand width based on remaining space of the container, Just add class `flx-grow` on that child
```
<div class="flx inline">
    <div class="flx-grow">inline</div>
</div>
```

#### Column Format

To display the childs vertically add `column` instead of `inline`

example
```
<div class="flx column">
    <div>inline</div>
    <div>inline</div>
    <div>inline</div>
</div>
```

#### Float Formatting
----
adding `floatable` to an element will make the childs float ready

```
<div class="floatable">
    ...
</div>
```

to float a child element left or right just add `float--left` or `float--right` respectively

```
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
```
<div class="card nb">
    ...
</div>
```

##### No Margin

class `nm` will remove any existing margins of an element

example
```
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

```
<hr class="divider"/>
```

# Navigation Header
----
use the tag `<nav>` for semantics and apply the class `nav`.

example
```
<nav class="nav">
    <div class="nav__container flx inline">
      <div class="nav__brand">
        <h2> <a href="/"> WIKIX </a> </h2>
      </div>
      <button class="nav__button">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="nav__controls floatable flx-grow">
        <ul class="nav__links float--left">
            <li class="link hl"> <a href="#">Link</a> </li>
            <li class="dropdown">
                <a>Dropdown <i class="fas fa-caret-down"></i></a>
                <ul class="dropdown__list">
                    <li class="dropdown__item"> <a href="#">Dropdown Item</a> </li>
                    <li class="dropdown__item"> <a href="#">Dropdown Item</a> </li>
                    <li class="dropdown__item"> <a href="#">Dropdown Item</a> </li>
                </ul>
            </li>
        </ul>
      </div>
    </div>
</nav>
```

#### Responsiveness and Mobile Sidebar

this is already responsive and will require `vue.js` handling to display the sidebar on mobile. Just add class `active` in class `nav__controls` by using `v-on:click` and `v-bind:class`. example below

```
...
<button class="nav__button" v-on:click="sidebarToggle">
    <span></span>
    <span></span>
    <span></span>
</button>
<div class="nav__controls floatable flx-grow" v-bind:class="isSidebarShown ? 'active': ''">
    ...
</div>
...
```
#### Dropdowns
adding dropdown in header by using the structure below. Note: this dropdown only requires you to hover for displaying the menu

```
<li class="dropdown hl">
    <a class="notify" data-notif="5"><i class="far fa-bell"></i></a>
    <ul class="dropdown__list dropdown--right">
        <li class="dropdown__item"><a href=""></a></li>
        <hr class="divider" />
        <li class="dropdown__item">
            <a href="/me/notifications">View All <strong> Dropdowns </strong></a>
        </li>
    </ul>
</li>
```

#### Notifications

to activate the notifications make sure that you include the `data-notif` attribute in `<a>` tag inside `dropdown`,`link` class

```
...
<li class="dropdown hl">
    <a class="notify" data-notif="5"><i class="far fa-bell"></i></a>
    ...
</li>
...
```
make sure that the `data-notif` attribute have value.

# Section
----
apply `section` class to `<section>`

example
```
<section class="section">
    ...
</section>
```

# Card
----
apply the `card` class to a `<div>` tag

```
<div class="card">
    <div class="card__header">
        ...
    </div>
    <div class="card__body">
        ...
    </div>
    <div class="card__footer">
        ...
    </div>
</div>
```

#### Card Images

If you want images to be displayed just add the snippet below indside the `<div class="card">`.

```
<div class="card__img">
    <img src=""/>
</div>
```

# Images
----

add `img` to `<img>` tag

example
```
<img class="img" src="#">
```
#### Img Circle

add `circle` together `img` class to make the image a Circle

example

```
<img class="img circle" src="#">
```

# Buttons
----
add `button` class to a `<button>` tag will format the button

example
```
<button class="button">Submit</button>
```

adding `prmry` will change the button to primary color

```
<button class="button prmry">Submit</button>
```

# Input Groups
----
format inputs with the following snippet

example
```
<div class="input-grp">
    <label>Input Label</label>
    <div class="input__text">
        <input />
    </div>
    <div class="input__error">
        ...
    </div>
</div>
```

#### Input

wrap the `<input>` tag width `<div class="input__text">`

```
...
<div class="input__text">
    <input type="" />
</div>
...
```

#### Button

wrap `<button class='button'>`

```
...
<div classs="input__button">
    ...
</div>
...
```

#### Error Messages

for client side error handling

```
...
<div class="input__error">
    ...
</div>
...
```












