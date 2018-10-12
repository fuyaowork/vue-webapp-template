<script>
    export default{
        name: 'footGuide',
        components: {
        },
        data() {
            return {
            }
        },
        methods: {
            gotoAddress(path){
                this.$router.push(path);
            }
        },
        created() {
        },
        mounted() {
        }
    }
</script>

<template>
    <section class="m-footer">
        <ul>
            <li @click="gotoAddress({path: '/index'})" :class="{active:$route.path.indexOf('index')!==-1}">
                <img class="u-icon" src="~@/assets/img/foot-icon1.png">
                <img class="u-icon icon-active" src="~@/assets/img/foot-icon1.1.png">
                <span>外卖</span>
            </li>
            <li @click="gotoAddress({path: '/find'})" :class="{active:$route.path.indexOf('find')!==-1}">
                <img class="u-icon" src="~@/assets/img/foot-icon2.png">
                <img class="u-icon icon-active" src="~@/assets/img/foot-icon2.png">
                <span>发现</span>
            </li>
            <li @click="gotoAddress({path: '/order'})" :class="{active:$route.path.indexOf('order')!==-1}">
                <img class="u-icon" src="~@/assets/img/foot-icon3.png">
                <img class="u-icon icon-active" src="~@/assets/img/foot-icon3.1.png">
                <span>订单</span>
            </li>
            <li @click="gotoAddress({path: '/profile'})" :class="{active:$route.path.indexOf('profile')!==-1}">
                <img class="u-icon" src="~@/assets/img/foot-icon4.png">
                <img class="u-icon icon-active" src="~@/assets/img/foot-icon4.1.png">
                <span>我的</span>
            </li>
        </ul>

    </section>
</template>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.m-footer{
    position: fixed;
    bottom: 0;
    height: 1.4rem;
    background-color: $foot-bg;
    width: 100%;
    max-width: 1024px;
    border-top: 1px solid #dadada;
    box-sizing: border-box;
    font-size: 0.28rem;
    >ul{
        @include fja;
        width: 100%;
        height: 100%;
        >li{
            height: 100%;
            flex-grow: 1;
            @include fja(center);
            flex-direction: column;
            color: $gray;
            .u-icon{
                height: 0.6rem;
                width: 0.6rem;
            }
            .icon-active{
                display: none;
            }
        }
        .active{
            color: $blue;
            .u-icon{
                display: none;
            }
            .icon-active{
                display: block;
            }
        }
        .active:nth-child(2){
            color: #333;
            .u-icon{
                display: none;
            }
            .icon-active{
                display: block;
            }
        }
    }
}
</style>
