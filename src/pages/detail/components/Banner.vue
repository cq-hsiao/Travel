<template>
	<div>
		<div class="banner" @click="handleBannerClick">
			<img class="banner-img" :src="bannerImg" />
			<div class="banner-info">
				<div class="banner-title">{{this.sightName}}</div>
				<div class="banner-number"><span class="iconfont banner-icon">&#xe95b;</span>39</div>
			</div>
		</div>
		<fade-animation>
			<common-gallary
							:imgs="bannerImgs"
							v-show="showGallary"
							@close="handleGallaryClose">
			</common-gallary>
		</fade-animation>
	</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
	name: 'DetailDetail',
	props: {
		sightName: String,
		bannerImg: String,
		bannerImgs: Array
	},
	data () {
		return {
			showGallary:false
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
		CommonGallary,
		FadeAnimation
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
