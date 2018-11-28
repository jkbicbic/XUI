[Back to Table of Contents](https://github.com/jkbicbic/XUI)

# Navigation Header
----
use the tag `<nav>` for semantics and apply the class `nav`.

example
```HTML
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

```HTML
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

```HTML
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

```HTML
...
<li class="dropdown hl">
    <a class="notify" data-notif="5"><i class="far fa-bell"></i></a>
    ...
</li>
...
```
make sure that the `data-notif` attribute have value.
