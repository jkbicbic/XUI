[Back to Table of Contents](https://github.com/jkbicbic/XUI)

# Input Groups
----
format inputs with the following snippet

example
```HTML
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

```HTML
...
<div class="input__text">
    <input type="" />
</div>
...
```

#### Button

wrap `<button class='button'>`

```HTML
...
<div classs="input__button">
    ...
</div>
...
```

#### Error Messages

for client side error handling

```HTML
...
<div class="input__error">
    ...
</div>
...
```

[Prev: Buttons (incomplete)](https://github.com/jkbicbic/XUI/blob/master/docs/Buttons.md#Buttons) [Next: Colors (incomplete)](https://github.com/jkbicbic/XUI/blob/master/docs/Colors.md#Colors)