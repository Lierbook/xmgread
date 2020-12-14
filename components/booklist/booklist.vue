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
		<!-- 分割线 -->
		<view class="fengequyu"></view>

		<!-- 今日热读区域 -->
		<view class="titlebox2">
			<view class="hotname">{{hot.name}}</view>
			<view class="change">换一换<dn-icon :type="'shuaxin'" size="20" color=""></dn-icon>
			</view>
		</view>

		<view class="hotbooks">
			<view class="hotbooks1">
				<image :src="hotbooks[0].picUrl" mode="widthFix"></image>
				<text>{{hotbooks[0].bookName}}</text>
			</view>
			<view class="hotbooks2">
				<image :src="hotbooks[1].picUrl" mode="widthFix"></image>
				<text>{{hotbooks[1].bookName}}</text>
			</view>
			<view class="hotbooks3">
				<image :src="hotbooks[2].picUrl" mode="widthFix"></image>
				<text>{{hotbooks[2].bookName}}</text>
			</view>
		</view>
		<!-- 玄幻人气榜 -->
		<view class="Fantasy">
			<text class="TOP">TOP</text>

			<view class="Fantasybox">
				<view class="Fantasyhead">
					<text class="headtitle">{{headtitle.name}}</text>
					<view class="Fantasymore">
						<text>查看更多</text>
						<dn-icon :type="'tiaozhuan'" size="8" color="white"></dn-icon>
					</view>

				</view>
				<view class="Fantasybody">
					<view class="recommendbox1" :wx:for="Fantasybooks" wx:for-item="Fantasybooks" style="margin-top: 30rpx;font-size: 20rpx;">
						<image v-bind:src="Fantasybooks.picUrl" mode="widthFix" class="img001"></image>
						<view class="righttext">
							<text class="top Citytop">{{Fantasybooks.bookName}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="Fantasy" style="margin-top: 0px;" id="City">
			<text class="TOP">TOP</text>

			<view class="Fantasybox">
				<view class="Fantasyhead" id="Cityhead" style="background: linear-gradient(to bottom right, #528fff , #9dc0ff);">
					<text class="headtitle">{{headtitle1.name}}</text>
					<view class="Fantasymore">
						<text>查看更多</text>
						<dn-icon :type="'tiaozhuan'" size="8" color="white"></dn-icon>
					</view>

				</view>

				<view class="Fantasybody" style="font-size: 20rpx;">
					<view class="recommendbox1" :wx:for="Citybooks" wx:for-item="Citybooks" style="margin-top: 30rpx;font-size: 20rpx;">
						<image v-bind:src="Citybooks.picUrl" mode="widthFix" class="img001"></image>
						<view class="righttext">
							<text class="top Citytop">{{Citybooks.bookName}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!--火爆精品  -->
		<view class="HotBoutique">
			<view class="titlebox2">
				<view class="hotname">{{hotname.name}}</view>
				<view class="change">查看更多<dn-icon :type="'shuaxin'" size="20" color=""></dn-icon>
				</view>
			</view>

			<view class="HotBoutiquebox" :wx:for="HotBoutique" wx:for-item="HotBoutique">
				<view class="HotBoutiquebooks">
					<image :src="HotBoutique.picUrl" mode="widthFix"></image>
					<view class="HotBoutiquebooksname">
						<view class="HotBoutiquebookstitle">{{HotBoutique.bookName}}</view>
						<view class="completeState">{{HotBoutique.completeState}} </view>
					</view>

					<!-- <text class="state">{{HotBoutique[0].completeState}}</text> -->
					<view class="author">{{HotBoutique.author}}</view>
					<text class="desc">{{HotBoutique.desc}}</text>

				</view>
			</view>

		</view>
	</view>



</template>

<script>
	import icon from "../dn-icon/dn-icon.vue"
	export default {
		components: {
			icon
		},
		data() {
			return {
				items: [],
				title: "",
				recommend: [],
				hot: [],
				hotbooks: [],
				headtitle: "",
				headtitle1: "",
				Fantasybooks: [],
				Citybooks: [],
				HotBoutique: [],
				hotname: "",
				// HotBoutiquebooks:[],
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
					// console.log(recommend)
					this.recommend = recommend
					// 热读
					const hot = res.data.body.data[2]
					this.hot = hot
					// console.log(hot)
					const hotbooks = res.data.body.data[2].books
					this.hotbooks = hotbooks
					// 玄幻人气榜
					const headtitle = res.data.body.data[3].sectionCategory[0]
					this.headtitle = headtitle
					const Fantasybooks = res.data.body.data[3].sectionCategory[0].books
					this.Fantasybooks = Fantasybooks
					// 都市人气榜
					const headtitle1 = res.data.body.data[3].sectionCategory[1]
					this.headtitle1 = headtitle1
					const Citybooks = res.data.body.data[3].sectionCategory[1].books
					this.Citybooks = Citybooks
					// 火爆精品
					const HotBoutique = res.data.body.data[4].books
					this.HotBoutique = HotBoutique
					console.log(HotBoutique[0].bookName)
					const hotname = res.data.body.data[4]
					this.hotname = hotname


				}
			})
		},
		methods: {

		}
	}
</script>
<style lang="scss">
	// body{
	// 	background-color: #0055ff;
	// }
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
		// height: 135rpx;
		top: 50rpx;
		width: 100%;
		padding-left: 30rpx;
		padding-right: 30rpx;
		// background-color: #e8e8e8;


	}

	.fengequyu {
		width: 100%;
		height: 20rpx;
		background-color: #e8e8e8;
		margin-top: 100rpx;
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
		font-weight: 400rpx;
		height: 40rpx;
		left: 120rpx;
		top: 20rpx;
		font-size: 28rpx;
		// display: block;
		overflow: hidden;
		white-space:nowrap; 
		text-overflow: ellipsis;
		text-align: left;
		font-weight: 500;
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
		// background-color: white;
	}

	.titlebox2 {
		padding: 20rpx 30rpx 20rpx 30rpx;
		height: 40rpx;

		view {
			display: inline;

		}
	}

	.hotname {
		float: left;
		font-size: 35rpx;
		line-height: 40rpx;
	}

	.change {
		float: right;
		color: #a6a6a6;
		font-size: 27rpx;
		line-height: 40rpx;

	}

	.hotbooks {
		width: 100%;
		height: 300rpx;
		padding-left: 30rpx;

		view {
			width: 200rpx;
			font-size: 28rpx;
			float: left;
			text-align: left;


		}
		text{
			font-weight: 500;
		}
	}

	.hotbooks1 {
		margin-right: 45rpx;
	}

	.hotbooks2 {
		margin-right: 45rpx;
	}

	.Fantasy {
		margin-top: 70rpx;
		width: 100%;
		background-color: #f8f8f8;
		height: 780rpx;
		// padding-left: 30rpx;
		// padding-right: 30rpx;
		padding-top: 30rpx;

	}

	.Fantasybox {
		width: 690rpx;

		height: 740rpx;
		margin: 0rpx 0rpx 10rpx 30rpx;
		border-radius: 10rpx;
		background-color: white;


	}

	.Fantasyhead {
		height: 200rpx;
		width: 100%;
		background: linear-gradient(to bottom right, #ff8952, #ffc59e);
		opacity: 0.9;
		border-top-left-radius: 10rpx;
		border-top-right-radius: 10rpx;
		position: relative;
		z-index: 3;
	}

	.TOP {
		float: left;
		margin-left: 50rpx;
		font-size: 50rpx;
		z-index: 2;
	}

	.headtitle {
		position: absolute;
		float: left;
		top: 25rpx;
		left: 50rpx;
		color: white;

	}

	.Fantasymore {
		color: #a6a6a6;
		font-size: 27rpx;
		color: white;
		position: absolute;
		bottom: 20rpx;
		right: 20rpx;
	}

	.Fantasybody {
		width: 100%;
		height: 540rpx;
		padding-left: 20rpx;
	}

	#Fantasybookbox {
		margin-top: 20rpx;
	}

	#Cityhead {
		background: linear-gradient(to bottom right, #528fff, #9dc0ff);
	}

	.Citytop {
		color: #919191;
		font-weight: 400;
		font-family: $uni-border-color;
	}

	.HotBoutiquebox {
		padding: 0rpx 30rpx 0rpx 30rpx;
		width: 100%;
		height: 300rpx;
	}

	.HotBoutiquebooks {
		position: relative;

		// width: 500rpx;
		image {
			width: 200rpx;
			position: absolute;
			left: 0px;

		}
	}

	.HotBoutiquebooksname {
		font-size: 35rpx;
		position: absolute;
		left: 220rpx;
		top: 10rpx;
		font-weight: 400;
		width: 400rpx;
		height: 40rpx;
		text-align: left;
		// overflow: hidden;

	}

	.HotBoutiquebookstitle {
		flex: 3;
		display: -webkit-flex;
		display: flex;
		height: 40rpx;
		text-overflow: ellipsis;
		white-space: nowrap;
		display: inline-block;
		line-height: 40rpx;
		width: 300rpx;
		overflow: hidden;
		// -webkit-box-orient: vertical;
		// -webkit-line-clamp: 1;
		text-overflow: ellipsis;
		float: left;

	}

	.completeState {
		display: -webkit-flex;
		display: flex;
		flex: 1;
		margin: 0rpx;
		font-weight: 400;
		font-size: 20rpx;
		border: 1px solid red;
		width: 50rpx;
		height: 30rpx;
		line-height: 30rpx;
		color: #ff5101;
		border-radius: 10rpx;
		margin-left: 30rpx;
		float: right;
	}

	.author {
		position: absolute;
		left: 220rpx;
		top: 80rpx;
		font-size: 25rpx;
		color: #a8a8a8;
		font-weight: 400;
	}

	.desc {
		font-weight: 400;
		font-size: 25rpx;
		position: absolute;
		left: 220rpx;
		top: 160rpx;
		width: 460rpx;
		height: 100rpx;
		overflow: hidden;
		color: #a8a8a8;
		text-align: left;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		text-overflow: ellipsis;
	}
</style>
