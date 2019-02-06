<template>
    <header>
      <div class="container">
        <div class="row upper-header">
          <div class="col-md-3 col-sm-6 col-xs-6">
            <div class="logo">
              <router-link to="/home">
                <img src="~static/img/logo.png" alt="Logo" />
              </router-link>
            </div>
          </div>
          <div class="col-md-6 in-h-b-col">
            <div class="business-info">
              <ul class="clearfix">
                <li>
                  <span class="title">Phone Number</span>
                  <span class="content">+251 911225143</span>
                </li>
                <li>
                  <span class="title">Email Address</span>
                  <span class="content">salmmohha@yahoo.com</span>
                </li>
                <li>
                  <span class="title">Telephone Number</span>
                  <span class="content">0114701457</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row menu-area">
          <div class="main-menu">
            <ul id="menu" class="clearfix">
              <li :class="{'current-menu-item': $route.path.includes('/home')}">
                <router-link to="/">Home</router-link>
              </li>
              <li :class="{'current-menu-item': $route.path.includes('/products/sino')}">
                <router-link to="/products/sino">Products</router-link>
              </li>
              <li :class="{'current-menu-item': $route.path.includes('/about')}">
                <router-link to="/about">About Us</router-link>
              </li>
              <li :class="{'current-menu-item': $route.path.includes('/contact')}">
                <router-link to="/contact">Contact Us</router-link>
              </li>
            </ul>
          </div>
          <div class="menu-row-search-box">
            <form action="#">
              <input type="search" placeholder="SEARCH" />
              <button type="submit">
                <img src="~static/img/search-icon.png" alt="search icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
</template>
