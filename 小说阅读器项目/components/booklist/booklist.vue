<template>
	<view>


		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
			<swiper-item>
				<view class="swiper-item">
					<image v-bind:src="items[0].picUrl" mode="widthFix"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image v-bind:src="items[1].picUrl" mode="widthFix"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="titlebox">
			<view class="title">
				{{title}}
			</view>
			<view class="more">
				查看更多 >
			</view>

		</view>

		<view class="news">
			<text class="newstext">千万书友共同见证，12月9日更新</text>

		</view>
		<!-- 下面是推荐榜 -->
		<view class="recommend">
			<!-- 12 -->
			<view class="bookbox">


				<view class="recommendbox1" id="recommendbox">
					<image v-bind:src="recommend[0].picUrl" mode="widthFix" class="img001"></image>
					<view class="righttext">
						<text class="top">{{recommend[0].bookName}}</text>
						<view class="bottom">力荐值:<text>{{recommend[0].rankValue}}</text> </view>
					</view>
				</view>
				<view class="recommendbox2" id="recommendbox">
					<image v-bind:src="recommend[1].picUrl" mode="widthFix" class="img001"></image>
					<view class="righttext">
						<text class="top">{{recommend[1].bookName}}</text>
						<view class="bottom">力荐值:<text>{{recommend[1].rankValue}}</text> </view>
					</view>
				</view>
			</view>
			<!-- 34 -->
			<view class="bookbox">


				<view class="recommendbox1" id="recommendbox">
					<image v-bind:src="recommend[2].picUrl" mode="widthFix" class="img001"></image>
					<view class="righttext">
						<text class="top">{{recommend[2].bookName}}</text>
						<view class="bottom">力荐值:<text>{{recommend[2].rankValue}}</text> </view>
					</view>
				</view>
				<view class="recommendbox2" id="recommendbox">
					<image v-bind:src="recommend[3].picUrl" mode="widthFix" class="img001"></image>
					<view class="righttext">
						<text class="top">{{recommend[3].bookName}}</text>
						<view class="bottom">力荐值:<text>{{recommend[3].rankValue}}</text> </view>
					</view>
				</view>
			</view>
			<!-- 56 -->
			<view class="bookbox">
			
			
				<view class="recommendbox1" id="recommendbox">
					<image v-bind:src="recommend[4].picUrl" mode="widthFix" class="img001"></image>
					<view class="righttext">
						<text class="top">{{recommend[4].bookName}}</text>
						<view class="bottom">力荐值:<text>{{recommend[4].rankValue}}</text> </view>
					</view>
				</view>
				<view class="recommendbox2" id="recommendbox">
					<image v-bind:src="recommend[5].picUrl" mode="widthFix" class="img001"></image>
					<view class="righttext">
						<text class="top">{{recommend[5].bookName}}</text>
						<view class="bottom">力荐值:<text>{{recommend[5].rankValue}}</text> </view>
					</view>
				</view>
			</view>
			<!-- 78 -->
			<view class="bookbox">
			
			
				<view class="recommendbox1" id="recommendbox">
					<image v-bind:src="recommend[6].picUrl" mode="widthFix" class="img001"></image>
					<view class="righttext">
						<text class="top">{{recommend[6].bookName}}</text>
						<view class="bottom">力荐值:<text>{{recommend[6].rankValue}}</text> </view>
					</view>
				</view>
				<view class="recommendbox2" id="recommendbox">
					<image v-bind:src="recommend[7].picUrl" mode="widthFix" class="img001"></image>
					<view class="righttext">
						<text class="top">{{recommend[7].bookName}}</text>
						<view class="bottom">力荐值:<text>{{recommend[7].rankValue}}</text> </view>
					</view>
				</view>
			</view>
			<!-- 9 10 -->
			<view class="bookbox">
			
			
				<view class="recommendbox1" id="recommendbox">
					<image v-bind:src="recommend[8].picUrl" mode="widthFix" class="img001"></image>
					<view class="righttext">
						<text class="top">{{recommend[8].bookName}}</text>
						<view class="bottom">力荐值:<text>{{recommend[8].rankValue}}</text> </view>
					</view>
				</view>
				<view class="recommendbox2" id="recommendbox">
					<image v-bind:src="recommend[9].picUrl" mode="widthFix" class="img001"></image>
					<view class="righttext">
						<text class="top">{{recommend[9].bookName}}</text>
						<view class="bottom">力荐值:<text>{{recommend[9].rankValue}}</text> </view>
					</view>
				</view>
			</view>
		</view>

	
</view>
</template>

<script>
	export default {
		data() {
			return {
				items: [],
				title: "",
				recommend: [],
			}
		},
		onReady: function() {
			uni.request({
				url: 'https://wechat.idejian.com/api/wechat/index',
				success: (res) => {
					// 轮播图
					const resobj = res.data.body.data[0].items;
					// console.log(resobj,"xxxxxxxxx")
					this.items = resobj;
					// 标题
					const title = res.data.body.data[1].name
					// console.log(title)
					this.title = title
					// 推荐
					const recommend = res.data.body.data[1].books
					console.log(recommend)
					this.recommend = recommend

				}
			})
		},
		methods: {

		}
	}
</script>
<style lang="scss">
	body{
		background-color: #0055ff;
	}
	swiper-item {
		image {
			width: 100%;
		}
	}

	.titlebox {
		width: 100%;
		position: relative;
		overflow: hidden;
	}

	.title {
		float: left;
		font-size: 35rpx;
		padding: 30rpx;
		padding-bottom: 15rpx;

	}

	.more {
		float: right;
		color: #a6a6a6;
		font-size: 27rpx;
		padding-right: 30rpx;
		padding-top: 30rpx;
	}

	.news {
		width: 100%;
		font-size: 25rpx;
		color: #a6a6a6;
		position: relative;
		margin: 20rpx, 0px, 0px, 30rpx;
	}

	.newstext {
		display: inline-block;

		position: absolute;
		left: 30rpx;
	}

	.recommend {
		background-color: white;
		position: relative;
		height: 135rpx;
		top: 50rpx;
		width: 100%;
		padding-left: 30rpx;
		padding-right: 30rpx;


	}

	// #recommendbox{
	// 	width: 705rpx;
	// 	height: 300rpx;
	// 	border: 2px solid black;
	// 	border-radius: 10px;
	// 	image{

	// 	}
	// }
	.recommendbox1 {
		image {
			width: 100rpx;
			position: absolute;
			left: 0rpx;
		}

	}

	.recommendbox2 {
		image {
			width: 100rpx;
			position: absolute;
			left: 0rpx;
		}
	}

	.top {
		position: absolute;
		width: 190rpx;
		height: 40rpx;
		left: 120rpx;
		top: 20rpx;
		font-size: 28rpx;
		// display: block;
		overflow: hidden;
		text-align: left;
	}

	.bottom {
		position: absolute;
		left: 120rpx;
		bottom: 30rpx;
		font-size: 25rpx;
		color: #C0C0C0;

		text {
			color: red;
		}
	}

	.recommendbox1 {
		float: left;
		width: 330rpx;
		height: 135rpx;
		// border: 1px solid black;
		border-radius: 10rpx;
		position: relative;

	}

	.recommendbox2 {
		float: left;
		margin-left: 30rpx;
		width: 330rpx;
		height: 135rpx;
		// border: 1px solid black;
		border-radius: 10rpx;
		position: relative;

	}

	.bookbox {
		height: 138rpx;
		margin-bottom: 20rpx;
	}
</style>
