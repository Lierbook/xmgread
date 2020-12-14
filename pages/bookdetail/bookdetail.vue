<template>
	<view class="book_detail">
		<view class="book_theme">
			<view class="book_name">
				<view><text class="title">小说名</text></view>
				<!-- 	<text class="author">{{author}} | {{category}}</text> -->
				<text class="author">作者 | </text>
				<text class="type"> 小说类型</text>
				<view><text class="words">字数</text></view>
				<text class="state">状态</text>
			</view>
			<view class="pic">
				<image src=""></image>
			</view>
		</view>
		<view class="introduction">
			<view class="description">撒娇的环节按收到货物</view>
			<view class="catalogue">
				<text class="list">目录</text>
				<view class="situation">
					<text class="state2">已完结</text>
					<text class="number">共132章</text>
				</view>
			</view>
		</view>
		<view class="comment">
			<text class="hotCom">热评</text>
			<view class="comPer">评论人</view>
			<view class="comCon">评论内容</view>
		</view>
		<view class="read">
			<text class="share">分享给好友</text>
			<text class="add">加入书架</text>
			<view class="readNow">立即阅读</view>
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
	/* 小说详情的样式 */
	.book_detail {
		display: flex;
		flex-direction: column;
		height: 300%;
		width: 100%;
		background-color: #EDEDED;

		.book_theme {
			display: flex;
			flex-direction: row;
			background-color: #8B8970;
			width: 100%;
			height: 300rpx;

			.book_name {
				color: #FAFAFA;
				font-size: 34rpx;
				margin-top: 50rpx;
				margin-left: 30rpx;

				.title {
					font-size: 38rpx;
					font-weight: bold;
				}
			}

			.pic {
				width: 200rpx;
				height: 230rpx;
				background-color: #007AFF;
				margin-left: 200rpx;
				margin-top: 40rpx;
			}
		}

		.introduction {
			width: 100%;
			height: 300rpx;
			background-color: #F4F4F4;

			.description {
				width: 100%;
				height: 230rpx;
				color: #808080;
				font-size: 38rpx;
				border-bottom: 1rpx solid #C8C7CC;
			}

			.catalogue {
				width: 100%;
				height: 70rpx;

				.list {
					color: #000;
					line-height: 70rpx;
					text-align: center;
					font-size: 40rpx;
					font-weight: bold;
				}

				.situation {
					margin-top: -55rpx;
					font-size: 32rpx;
					margin-left: 520rpx;

					.state2 {
						color: #FF0000;

					}

					.number {
						padding-left: 20rpx;
						color: #0D0D0D;
					}
				}
			}
		}

		.comment {
			width: 100%;
			height: 900rpx;
			background-color: #F4F4F4;
			margin-top: 10rpx;
			border-bottom: 1rpx solid #C8C7CC;

			.hotCom {
				color: #000;
				font-size: 40rpx;
				font-weight: bold;
			}

			.comPer {
				width: 200rpx;
				height: 50rpx;
			}

			.comCon {
				width: 100%;
				height: 250rpx;
			}

		}

		.read {
			display: flex;
			flex-direction: row;
			width: 100%;
			height: 100rpx;
			background-color: #F4F4F4;

			.share,
			.add {
				width: 25%;
				color: #000;
				font-size: 24rpx;
				margin-top: 60rpx;
				padding-left: 20rpx;

			}

			.add {
				padding-left: 80rpx;
			}

			.readNow {
				width: 50%;
				color: #FAFAFA;
				line-height: 100rpx;
				font-size: 38rpx;
				background-color: #EE0000;
				text-align: center;
			}
		}
	}
</style>
