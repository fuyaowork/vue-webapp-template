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
        message: 'life cycle test',
      }
  },
  methods: {
  },
  beforeCreate() {
    console.group('---------- beforeCreate 创建前 ----------');
    console.log("%c%s", "color:red" , "el     : " + this.$el);
    console.log("%c%s", "color:red", "data   : " + this.$data);
    console.log("%c%s", "color:red", "message: " + this.message);
    console.groupEnd();
  },
  created() {
    console.group('---------- created 创建完毕 ----------');
    console.log("%c%s", "color:red" , "el     : " + this.$el);
    console.log("%c%s", "color:red", "data   : " + this.$data);
    console.log("%c%s", "color:red", "message: " + this.message);
    console.groupEnd();
  },
  beforeMount() {
    console.group('---------- beforeMount 挂载前 ----------');
    console.log("%c%s", "color:red" , "el     : " + this.$el);
    console.log("%c%s", "color:red", "data   : " + this.$data);
    console.log("%c%s", "color:red", "message: " + this.message);
    console.groupEnd();
  },
  mounted() {
    console.group('---------- mounted 挂载结束 ----------');
    console.log("%c%s", "color:red" , "el     : " + this.$el);
    console.log("%c%s", "color:red", "data   : " + this.$data);
    console.log("%c%s", "color:red", "message: " + this.message);
    console.groupEnd();
  },
  beforeUpdate() {
    console.group('---------- beforeUpdate 更新前 ----------');
    console.log("%c%s", "color:red","el     : " + this.$el);
    console.log(this.$el);
    console.log("%c%s", "color:red","data   : " + this.$data);
    console.log("%c%s", "color:red","message: " + this.message);
    console.groupEnd();
  },
  updated() {
    console.group('---------- updated 更新结束 ----------');
    console.log("%c%s", "color:red","el     : " + this.$el);
    console.log(this.$el);
    console.log("%c%s", "color:red","data   : " + this.$data);
    console.log("%c%s", "color:red","message: " + this.message);
    console.groupEnd();
  },
  beforeDestroy() {
    console.group('---------- beforeDestroy 销毁前 ----------');
    console.log("%c%s", "color:red","el     : " + this.$el);
    console.log(this.$el);
    console.log("%c%s", "color:red","data   : " + this.$data);
    console.log("%c%s", "color:red","message: " + this.message);
    console.groupEnd();
  },
  destroyed() {
    console.group('---------- destroyed 销毁完成 ----------');
    console.log("%c%s", "color:red","el     : " + this.$el);
    console.log(this.$el);
    console.log("%c%s", "color:red","data   : " + this.$data);
    console.log("%c%s", "color:red","message: " + this.message);
    console.groupEnd();
  }
}
</script>

<template>
  <section class="m-index">
    <head-search></head-search>
    <img src="../../../static/img/adv1.png" width="100%">
    <menu-swipe></menu-swipe>
    <shop-list></shop-list>
    <foot-guide></foot-guide>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
</style>
