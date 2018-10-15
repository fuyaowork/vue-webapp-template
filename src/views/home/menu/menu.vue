<script>
import Swiper from 'swiper'
export default {
  name: 'menuSwiper',
  components: {
  },
  data() {
    return {
      baseUrl: process.env.BASE_URL,
      category: [
        { name: '美食', img: 'meishi.jpeg' },
        { name: '午餐', img: 'wucan.jpeg' },
        { name: '商超便利', img: 'chaoshi.jpeg' },
        { name: '果蔬生鲜', img: 'guoshu.jpeg' },
        { name: '新店特惠', img: 'xindian.jpeg' },
        { name: '大牌简餐', img: 'dapai.jpeg' },
        { name: '医药健康', img: 'yiyao.png' },
        { name: '甜品饮品', img: 'yinpin.jpeg' },
        { name: '浪漫鲜花', img: 'xianhua.jpeg' },
        { name: '披萨意面', img: 'pisha.jpeg' },
        { name: '薯条汉堡', img: 'hanbao.jpeg' },
        { name: '包子粥店', img: 'baozhi.jpeg' },
        { name: '日韩料理', img: 'rihan.jpeg' },
        { name: '川湘菜', img: 'cuanxiang.jpeg' },
        { name: '麻辣烫', img: 'malatang.jpeg' },
        { name: '预定早餐', img: 'zhaocan.jpeg' },
        { name: '准时达', img: 'zhuishi.jpeg' },
        { name: '炸鸡炸串', img: 'meishi.jpeg' },
        { name: '火锅烤鱼', img: 'meishi.jpeg' },
        { name: '鸭脖卤味', img: 'meishi.jpeg' },
      ]
    }
  },
  methods: {},
  created() {
    // console.log(this.baseUrl);
  },
  mounted() {
    var mySwiper = new Swiper ('.swiper-container', {
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },

      // 如果需要前进后退按钮
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },

      // 如果需要滚动条
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
    })
  }
}
</script>
<template>
  <section class="m-swiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="i in category.length/10" :key="i">
          <ul>
            <li v-for="(j,index) in category" :key="i.name" v-if="index<i*10&&index>=(i-1)*10">
                <img :src="`${baseUrl}img/indexMenu/${j.img}`">
                <span>{{j.name}}</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <!-- <div class="swiper-button-prev"></div> -->
      <!-- <div class="swiper-button-next"></div> -->

      <!-- 如果需要滚动条 -->
      <!-- <div class="swiper-scrollbar"></div> -->
  </div>
    <!-- <van-swipe class="u-swiper" :loop="false">
      <van-swipe-item>
        <ul class="">
          <li v-for="(i,index) in category" v-if="index<10" :key="i.name">
              <img :src="'/static/img/indexMenu/'+i.img">
              <span>{{i.name}}</span>
          </li>
        </ul>
      </van-swipe-item>
      <van-swipe-item>
        <ul>
          <li v-for="(i,index) in category" v-if="index>9" :key="i.name">
            <img :src="'/static/img/indexMenu/'+i.img">
            <span>{{i.name}}</span>
          </li>
        </ul>
      </van-swipe-item>
    </van-swipe> -->
  </section>
</template>
<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.swiper-slide{
  ul {
    @include fja;
    flex-wrap: wrap;
    >li {
      height: 2.16rem;
      width: 20%;
      @include fja(center);
      flex-direction: column;

      >img {
        height: 1.333333rem;
      }
    }
  }
}
</style>
<style>
.swiper-container{
  width: 100%;
  height: 100%;
}
</style>