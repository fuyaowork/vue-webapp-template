<script>
import footGuide from '@/components/footer/footGuide';
import headSearch from './header/header';
import menuSwipe from './menu/menu';
import shopList from './list/list';
export default{
  name: 'index',
  components: {
      footGuide,
      headSearch,
      menuSwipe,
      shopList
  },
  data() {
      return {
      }
  },
  methods: {
  },
  created() {
  },
  mounted() {
  }
}
</script>

<template>
  <section class="m-index">
    <head-search></head-search>
    <img src="~@/assets/img/adv1.png" width="100%">
    <menu-swipe></menu-swipe>
    <shop-list></shop-list>
    <foot-guide></foot-guide>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
</style>
