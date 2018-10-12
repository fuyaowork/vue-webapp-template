<script>
    export default{
        name: 'headSearch',
        components: {
        },
        data() {
            return {
                address: '骆家庄西苑三区11幢505室',
                category: ['沙拉', '面', '炸鸡', '满30减15', '一点点', '肯德基', '煲仔饭'],
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
    <section class="m-header">
        <div class="m-address">
            <img class="u-icon" src="~@/assets/img/address-icon.png">
            <section>
                <p class="u-text">{{address}}</p>
                <span class="u-triangle"></span>
            </section>
            <span>
                <img src="~@/assets/img/qi.png">
            </span>
        </div>
        <div class="m-search">
            <div class="u-input">
                <img src="~@/assets/img/search-icon.png">
                <span>大牌外卖节 5折封顶</span>
            </div>
        </div>
        <div class="m-category">
            <ul>
                <li v-for="i in category" :key="i">{{i}}</li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.m-header{
    background: -webkit-linear-gradient(left, $blue, $blue-deep); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(left, $blue, $blue-deep); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(left, $blue, $blue-deep); /* Firefox 3.6 - 15 */
    background: linear-gradient(left, $blue, $blue-deep); /* 标准的语法 */
    color: #fff;
}
.m-address{
    height: 1.533333rem;
    width: 100%;
    @include fja;
    padding: 0.666667rem 0.533333rem 0 0.533333rem;
    box-sizing: border-box;
    .u-icon{
        width: 0.466667rem;
        height: 0.466667rem;
    }
    >section{
        padding-left: 0.266667rem;
        @include fja;
        .u-text{
            max-width: 4.533333rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: .45rem;
            display: inline-block;
        }
    }
    >span{
        flex-grow: 1;
        text-align: right;
        >img{
            height: 0.8rem;
        }
    }
}
.m-search{
    // background-color: @blue;
    height: 1.533333rem;
    width: 100%;
    padding: 0.266667rem;
    box-sizing: border-box;
    .u-input{
        width: 100%;
        height: 100%;
        background-color: #fff;
        @include fja(center);
        color: #aaa;
        border-radius: 2px;
        >img{
            height: 0.466667rem;
            margin-right: .15rem;
        }
    }
}
.m-category{
    height: 0.666667rem;
    padding-bottom: 0.266667rem;
    box-sizing: border-box;
    padding: 0 0.266667rem;
    >ul{
        @include fja;
        >li{
            flex-grow: 1;
            text-align: center;
        }
    }
}
</style>
