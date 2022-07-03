let header = document.getElementById("header")
header.innerHTML = `
<header id="header">

<div id="menu-bar" class="fas fa-bars"></div>

<a href="#" class="logo"><span>T</span>ravel</a>

<nav class="navbar">
    <a href="#china">china</a>
    <a href="#vietnam">vietnam</a>
    <a href="#japan">japan</a>
    <a href="#russia">russia</a>
</nav>

<div class="icons">
    <a href="#home" class="logo"><span>h</span>ome</a>
</div>

<form action="" class="search-bar-container">
    <input type="search" id="search-bar" placeholder="search here...">
    <label for="search-bar" class="fas fa-search"></label>
</form>

</header>
`