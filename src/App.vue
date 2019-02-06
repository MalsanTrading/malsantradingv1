<template>
  <div id="app">
    <top-header/>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
    <bottom-footer/>
  </div>
</template>


<script>
import topHeader from '@/components/header'
import bottomFooter from '@/components/footer'
export default {
  components: {
    topHeader,
    bottomFooter
  }
}
</script>

<style lang="css">
  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
