<template>
	<view class="Login">
		<view class="icon">
			<image class="Horse" src="../../static/tabbar/马.png"></image>
			<view class="appName">
				<text>垃圾小说</text>
			</view>
		</view>
		<view class="login">
			<view class="after">
				<text class="line">——</text>
				<text class="words">登录后即可同步个人书架</text>
				<text class="line">——</text>
			</view>
			<view class="btn">
				<text class="word">微信一键登录</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.Login {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;

		.icon {
			width: 200rpx;
			height: 200rpx;
			margin: 150rpx auto;
			border: 1rpx solid #FFFFFF;
			background-color: #F0AD4E;
			border-radius: 30rpx;

			.Horse {
				width: 180rpx;
				height: 180rpx;
				margin: 10rpx;
			}

			.appName {
				color: #000;
				font-size: 42rpx;
				letter-spacing: 8rpx;
				font-weight: bold;
				margin: 40rpx auto;
			}
		}

		.login {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;

			.after {
				width: 70%;
				height: 50rpx;
				color: #808080;
				font-size: 28rpx;
				margin: 20rpx auto;

				.words {
					padding-left: 20rpx;
					padding-right: 20rpx;
					letter-spacing: 3rpx;
				}
			}
			.btn{
				width: 80%;
				height: 80rpx;
				margin: 10rpx auto;
				border-radius: 15rpx;
				background-color: #008B00;
				.word{
					width: 300rpx;
					height: 80rpx;
					color: #FFFFFF;
					font-size: 35rpx;
					line-height: 80rpx;
					letter-spacing: 3rpx;
					font-weight: bold;
					margin: 20rpx 190rpx 20rpx;
				}
			}
		}
	}
</style>
