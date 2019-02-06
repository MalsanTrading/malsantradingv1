<template>
  <div class="col-md-3">
    <div class="sol-single-left">
        <ul class="faq-menu custom-menu use-shadow">
            <li :class="{'current-menu-item': $route.path.includes('/products/sino')}">
            <router-link to="/products/sino">Sino truck Parts</router-link>
            </li>
            <li :class="{'current-menu-item': $route.path.includes('/products/weichai')}"><router-link to="/products/weichai">Weichai Power parts</router-link></li>
            <li :class="{'current-menu-item': $route.path.includes('/products/xcmg')}"><router-link to="/products/xcmg">Xcmg parts</router-link></li>
            <li :class="{'current-menu-item': $route.path.includes('/products/glass')}"><router-link to="/products/glass">Glasses</router-link></li>
          </ul>
    </div>
  </div>
</template>

<style lang="css">
 @media screen and (min-width: 800px) {
   .on-desccccc{
      margin-left: 200px
    }

 }
</style>
