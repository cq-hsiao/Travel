<template>
    <div class="header">
      <div class="header-left"><div class="iconfont back-icon">&#xe624;</div></div>
        <div class="header-input">
          <span class="iconfont search-icon">&#xe632;</span>输入城市/景点/游玩主题</div>
        <router-link to="/city">
          <div class="header-right">{{this.city}}<span class="iconfont arrow-icon">&#xe64a;</span></div>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']) //将vuex的数据映射到组件的计算属性里
  }
}
</script>
<!--stylus CSS预处理器-->
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header{
      display: flex;
      line-height:$headerHeight;
      background:$bgColor;
      color: #fff;
    }

      .header-left {
        width: .64rem;
        float: left;
      }
        .back-icon{
          text-align: center;
          font-size: 0.4rem;
        }
      .header-input {
        flex: 1;
        line-height: .64rem;
        margin-top: .12rem;
        margin-left: .2rem;
        padding-left: .2rem;
        height: .64rem;
        background: #fff;
        border-radius: .1rem;
        color: #ccc;
      }
        .search-icon{
          padding-right: 0.1rem;
        }

      .header-right{
        text-align:center;
        color: #fff;
        min-width:1.04rem;
        padding: 0 0.1rem;
        float:right;
      }
        .arrow-icon{
          margin-left: 0.04rem;
          font-size: .24rem;
        }

</style>
