# Monster-Library

## The Navbar v2 New 🔥

1. the html navbar compressed to just one navbar and you don't need to repeat your data in the navbar
   now you can put the data just one time
2. JavaScript codes shrinks to just 20 code
   <br/>
   <a href="https://imgbb.com/"><img src="https://i.ibb.co/F8VSyRn/ezgif-com-gif-maker.gif" alt="ezgif-com-gif-maker" border="0" /></a>

## The Links is

```html
<link rel="stylesheet" href="SCSS/navbar.css" />
<link rel="stylesheet" href="Font/style.css" />
<script defer src="index.js"></script>
```

## HTML

<details>
<summary>HTML</summary>
<p>

```html
<header>
  <nav>
    <h1 class="logo"><a href="#">Monster Shop</a></h1>
    <span id="show_icon" class="icon-menu"></span>
    <ul class="grandfather" id="grandFather">
      <li class="main_list">
        <div class="main_top">
          <span class="main_links">HTML</span>
          <span class="icon-plus icon"></span>
        </div>
        <ul class="sub_parent">
          <li><a class="links_href" href="#">HTML</a></li>
          <li><a class="links_href" href="#">HTML</a></li>
          <li><a class="links_href" href="#">HTML</a></li>
        </ul>
      </li>
      <li class="main_list">
        <div class="main_top">
          <span class="main_links">CSS</span>
          <span class="icon-plus icon"></span>
        </div>
        <ul class="sub_parent">
          <li><a class="links_href" href="#">CSS</a></li>
          <li><a class="links_href" href="#">CSS</a></li>
          <li class="sub_main_list">
            <div class="sub_main_top more">
              <span class="dropdown_link">More</span>
              <span class="icon-plus icon"></span>
            </div>
            <ul class="sub_sub_parent">
              <li><a class="sub_links_href" href="#">SCSS</a></li>
              <li><a class="sub_links_href" href="#">Bootstrap</a></li>
              <li><a class="sub_links_href" href="#">Plugin</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="main_list">
        <div class="main_top">
          <a href="#" class="main_links">JavaScript</a>
        </div>
      </li>
    </ul>
  </nav>
</header>
```

</p>
</details>

## CSS

<details>
<summary>CSS</summary>
<p>

```css
@-webkit-keyframes appear_slow {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes appear_slow {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes move {
  0% {
    transform: translateY(-20%);
  }
  50% {
    transform: translateY(20%);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes move {
  0% {
    transform: translateY(-20%);
  }
  50% {
    transform: translateY(20%);
  }
  100% {
    transform: translateY(0);
  }
}
* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

a,
span {
  cursor: pointer;
}

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #1b1b1b;
  color: #fff;
  height: 90px;
  align-items: center !important;
  padding: 0 10px;
}
nav li {
  all: unset;
}
nav a {
  text-decoration: none;
  color: #fff;
}

.sub_list_items,
header nav .grandfather .main_list .sub_parent .sub_main_list .sub_sub_parent,
header nav .grandfather .main_list .sub_parent {
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #1b1b1b;
  border-radius: 5px;
  padding: 10px;
  width: 140px;
  border-top: 1px solid #00ffff;
  transition: 0.3s;
}
.sub_list_items li,
header
  nav
  .grandfather
  .main_list
  .sub_parent
  .sub_main_list
  .sub_sub_parent
  li,
header nav .grandfather .main_list .sub_parent li {
  padding: 15px 0;
  border-bottom: 1px solid #000;
}
.sub_list_items a:hover,
header
  nav
  .grandfather
  .main_list
  .sub_parent
  .sub_main_list
  .sub_sub_parent
  a:hover,
header nav .grandfather .main_list .sub_parent a:hover,
.sub_list_items span:hover,
header
  nav
  .grandfather
  .main_list
  .sub_parent
  .sub_main_list
  .sub_sub_parent
  span:hover,
header nav .grandfather .main_list .sub_parent span:hover {
  color: #00ffff;
  font-weight: bold;
}

header nav .icon-plus {
  display: none;
}
header nav #show_icon {
  display: none;
}
header nav .grandfather {
  display: flex;
  flex-direction: row;
  margin-top: 30px;
}
header nav .grandfather .main_list {
  position: relative;
  padding-bottom: 30px;
}
header nav .grandfather .main_list .main_links {
  font-size: 20px;
  padding: 10px 15px;
  transition: 0.2s;
  margin-right: 60px;
  cursor: pointer;
}
header nav .grandfather .main_list .main_links:hover {
  color: #00ffff;
  box-shadow: 0 0 5px #00ffff;
}
header nav .grandfather .main_list .sub_parent {
  top: 48px;
  left: -30px;
  display: none;
  -webkit-animation: appear_slow 0.5s 1;
  animation: appear_slow 0.5s 1;
}
header nav .grandfather .main_list .sub_parent li {
  padding: 15px 0;
  border-bottom: 1px solid #000;
}
header nav .grandfather .main_list .sub_parent a:hover,
header nav .grandfather .main_list .sub_parent span:hover {
  color: #00ffff;
  font-weight: bold;
}
header nav .grandfather .main_list .sub_parent .sub_main_list {
  width: 160px;
  cursor: pointer;
}
header
  nav
  .grandfather
  .main_list
  .sub_parent
  .sub_main_list
  .sub_main_top
  .main_links {
  font-weight: unset;
  box-shadow: unset;
  padding: 0;
}
header
  nav
  .grandfather
  .main_list
  .sub_parent
  .sub_main_list
  .sub_main_top:hover
  .main_links {
  color: #00ffff !important;
}
header nav .grandfather .main_list .sub_parent .sub_main_list .sub_sub_parent {
  left: 161px;
  top: 104px;
  display: none;
  -webkit-animation: appear_slow 0.5s 1;
  animation: appear_slow 0.5s 1;
}
header
  nav
  .grandfather
  .main_list
  .sub_parent
  .sub_main_list
  .sub_sub_parent
  li {
  padding: 15px 0;
  border-bottom: 1px solid #000;
}
header
  nav
  .grandfather
  .main_list
  .sub_parent
  .sub_main_list
  .sub_sub_parent
  a:hover,
header
  nav
  .grandfather
  .main_list
  .sub_parent
  .sub_main_list
  .sub_sub_parent
  span:hover {
  color: #00ffff;
  font-weight: bold;
}
header nav .grandfather .main_list .sub_parent .sub_main_list:hover {
  color: #00ffff;
  font-weight: bold;
}
header
  nav
  .grandfather
  .main_list
  .sub_parent
  .sub_main_list:hover
  .sub_sub_parent {
  display: flex;
}
header nav .grandfather .main_list .last {
  left: -15px !important;
}
header nav .grandfather .main_list:hover {
  cursor: pointer;
}
header nav .grandfather .main_list:hover .main_links {
  box-shadow: 0 0 5px #00ffff;
}
header nav .grandfather .main_list:hover .sub_parent {
  display: flex;
}

@media (max-width: 700px) {
  body {
    overflow-x: hidden;
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
  }
  nav .icon-plus {
    display: inline-block !important;
  }
  nav #show_icon {
    display: block !important;
    font-size: 40px;
    margin: 0 20px;
  }
  nav .grandfather {
    display: flex !important;
    flex-direction: column !important;
    margin-top: 0 !important;
    position: absolute;
    top: 90px;
    left: 0;
    background-color: #1b1b1b;
    transition: 0.5s;
    width: 100%;
    transform: translateX(100%);
  }
  nav .grandfather .main_links {
    all: unset !important;
  }
  nav .grandfather .main_list {
    padding: 25px 10px;
    cursor: pointer;
    position: relative;
    font-size: 20px;
    border-bottom: 1px solid #000;
  }
  nav .grandfather .main_list .icon-plus {
    position: absolute;
    right: 20px;
  }
  nav .grandfather .main_list .sub_parent {
    all: unset !important;
    display: flex !important;
    flex-direction: column !important;
    margin-left: 20px !important;
    display: none !important;
    -webkit-animation: move 0.5s 1 !important;
    animation: move 0.5s 1 !important;
  }
  nav .grandfather .main_list .sub_parent li {
    border-bottom: unset !important;
  }
  nav .grandfather .main_list .sub_parent a {
    display: block;
    padding: 15px 0 !important;
  }
  nav .grandfather .main_list .sub_parent .sub_main_list {
    width: 100% !important;
    padding: 25px 0;
    cursor: pointer;
    position: relative;
    font-size: 20px;
  }
  nav .grandfather .main_list .sub_parent .sub_main_list .sub_sub_parent {
    all: unset !important;
    margin-left: 20px !important;
    display: flex !important;
    flex-direction: column !important;
    display: none !important;
    -webkit-animation: move 0.5s 1 !important;
    animation: move 0.5s 1 !important;
  }
  nav .grandfather .main_list .sub_parent .sub_main_list .sub_sub_parent a {
    padding-top: 25px !important;
  }
  nav .grandfather .main_list .sub_parent .sub_main_list .show {
    display: flex !important;
  }
  nav .grandfather .main_list .sub_parent .sub_main_list:hover {
    color: unset !important;
    font-weight: unset !important;
  }
  nav
    .grandfather
    .main_list
    .sub_parent
    .sub_main_list:hover
    .sub_main_top:hover {
    color: unset !important;
    font-weight: unset !important;
  }
  nav
    .grandfather
    .main_list
    .sub_parent
    .sub_main_list:hover
    .sub_main_top:hover
    .icon,
  nav
    .grandfather
    .main_list
    .sub_parent
    .sub_main_list:hover
    .sub_main_top:hover
    .main_links {
    color: #00ffff !important;
    font-weight: bold !important;
  }
  nav .grandfather .main_list .show {
    display: flex !important;
  }
  nav .grandfather .main_list .main_top:hover .main_links,
  nav .grandfather .main_list .main_top:hover .icon-plus {
    font-weight: bold !important;
    color: #00ffff !important;
  }
  nav .show {
    transform: translateX(0);
  }
}
```

</p>
</details>

## JavaScript

<p>This is JavaScript codes this codes is very important</p>

<details>
<summary>HTML</summary>
<p>

```js
const icon = document.querySelector("#show_icon");
const plus = document.querySelectorAll(".main_top");
const more = document.querySelector(".more");
icon.addEventListener("click", (eo) => {
  grandFather.classList.toggle("show");
});

// for mobile
plus.forEach((dropdown) => {
  dropdown.addEventListener("click", (eo) => {
    const item = dropdown.parentElement.querySelector(".sub_parent");
    const icon = dropdown.parentElement.querySelector(".icon");
    icon.classList.toggle("icon-minus");
    item.classList.toggle("show");
  });
});

more.addEventListener("click", (eo) => {
  const item = more.parentElement.querySelector(".sub_sub_parent");
  const icon = more.parentElement.querySelector(".icon");
  icon.classList.toggle("icon-minus");
  item.classList.toggle("show");
});
```

</p>
</details>
