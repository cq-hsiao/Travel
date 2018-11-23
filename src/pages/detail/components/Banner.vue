<template>
	<div>
		<div class="banner" @click="handleBannerClick">
			<img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1412/e9/d5c72454d47eda983bd4e857c9c361d8.water.jpg_600x330_396672b0.jpg" />
			<div class="banner-info">
				<div class="banner-title">分界洲岛(AAAAA景区)</div>
				<div class="banner-number"><span class="iconfont banner-icon">&#xe95b;</span>39</div>
			</div>
		</div>
		<common-gallary
						:imgs="bannerImgs"
						v-show="showGallary"
						@close="handleGallaryClose"></common-gallary>
	</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
	name: 'DetailDetail',
	props: {
		bannerImgs: Array
	},
	data () {
		return {
			showGallary:false,
			imgs: []
		}
	},
	methods: {
		handleBannerClick: function () {
			this.showGallary = true
		},
		handleGallaryClose () {
			this.showGallary = false
		}
	},
	components: {
		CommonGallary
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.banner
		position:relative
		overflow: hidden
		height: 0
		padding-bottom: 55%
		.banner-img
			width: 100%
		.banner-info
			display:flex
			position:absolute
			left:0
			bottom:0
			right:0
			line-height:.6rem
			color:#fff
			background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8));
			.banner-title
				flex:1
				font-size: .36rem
				text-shadow: 0 1px 2px rgba(0,0,0,0.70)
				padding: 0 .2rem
			.banner-number
				height:.32rem
				line-height:.32rem
				margin-top:.14rem
				padding:0 .4rem
				border-radius:.2rem
				background:rgba(0,0,0,.5)
				font-size:.24rem
				.banner-icon
					font-size:.24rem
					margin-right:.1rem

</style>
