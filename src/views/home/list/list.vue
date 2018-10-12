<script>
export default{
    name: 'shopList',
    components: {
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
    <section class="m-list">
        <div class="m-title">
            <span class="u-line"></span>
            <span class="u-point"></span>
            <span class="u-text">推荐商家</span>
            <span class="u-point"></span>
            <span class="u-line"></span>
        </div>

        <div class="m-filter">
            <ul>
                <li>综合排序</li>
                <li>距离最近</li>
                <li>会员领红包</li>
                <li>筛选</li>
            </ul>
        </div>

        <div class="m-content">
            <ul>
                <li>
                    <!-- <img class="shop-img" src="~@/assets/img/shop1.jpeg"> -->
                    <div class="shop-right">
                        <div></div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.m-list{
    background-color: $foot-bg;
    padding-top: 0.266667rem;
}
.m-title{
    @include fja(center);
    background-color: #fff;
    padding-top: 0.4rem;
    .u-text{
        font-weight: 600;
        font-size: .4rem;
        margin: 0 0.3rem;
    }
    .u-line{
        width: 0.533333rem;
        height: 1px;
        background-color: #aaa;
    }
    .u-point{
        width: 1px;
        height: 1px;
        background-color: #aaa;
        margin: 0 .08rem;
    }
}
.m-filter{
    height: 1.2rem;
    background-color: #fff;
    border-bottom: 1px solid #f5f5f5;
    >ul{
        height: 100%;
        @include fja;
        >li{
            flex-grow: 1;
            text-align: center;
        }
    }
}
.m-content{
    >ul{
        >li{
            @include fja();
            .shop-img{
            }
        }
    }
}
</style>
