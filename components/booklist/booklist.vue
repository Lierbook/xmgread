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


				<view class="recommendbox1" id="recommendbox" >
					<image v-bind:src="recommend[0].picUrl" mode="widthFix" class="img001">
						<view class="ranking">1</view>
					</image>
					<view class="righttext">
						<text class="top">{{recommend[0].bookName}}</text>
						<view class="bottom">力荐值:<text>{{recommend[0].rankValue}}</text> </view>
					</view>
				</view>
				<view class="recommendbox2" id="recommendbox">
					<image v-bind:src="recommend[1].picUrl" mode="widthFix" class="img001">
						<view class="ranking">2</view>
					</image>
					<view class="righttext">
						<text class="top">{{recommend[1].bookName}}</text>
						<view class="bottom">力荐值:<text>{{recommend[1].rankValue}}</text> </view>
					</view>
				</view>
			</view>
			<!-- 34 -->
			<view class="bookbox">


				<view class="recommendbox1" id="recommendbox">
					<image v-bind:src="recommend[2].picUrl" mode="widthFix" class="img001">
						<view class="ranking">3</view>
					</image>
					<view class="righttext">
						<text class="top">{{recommend[2].bookName}}</text>
						<view class="bottom">力荐值:<text>{{recommend[2].rankValue}}</text> </view>
					</view>
				</view>
				<view class="recommendbox2" id="recommendbox">
					<image v-bind:src="recommend[3].picUrl" mode="widthFix" class="img001">
						<view class="ranking rankingmiddle">4</view>
					</image>
					<view class="righttext">
						<text class="top">{{recommend[3].bookName}}</text>
						<view class="bottom">力荐值:<text>{{recommend[3].rankValue}}</text> </view>
					</view>
				</view>
			</view>
			<!-- 56 -->
			<view class="bookbox">


				<view class="recommendbox1" id="recommendbox">
					<image v-bind:src="recommend[4].picUrl" mode="widthFix" class="img001">
						<view class="ranking rankingmiddle">5</view>
					</image>
					<view class="righttext">
						<text class="top">{{recommend[4].bookName}}</text>
						<view class="bottom">力荐值:<text>{{recommend[4].rankValue}}</text> </view>
					</view>
				</view>
				<view class="recommendbox2" id="recommendbox">
					<image v-bind:src="recommend[5].picUrl" mode="widthFix" class="img001">
						<view class="ranking rankingmiddle">6</view>
					</image>
					<view class="righttext">
						<text class="top">{{recommend[5].bookName}}</text>
						<view class="bottom">力荐值:<text>{{recommend[5].rankValue}}</text> </view>
					</view>
				</view>
			</view>
			<!-- 78 -->
			<view class="bookbox">


				<view class="recommendbox1" id="recommendbox">
					<image v-bind:src="recommend[6].picUrl" mode="widthFix" class="img001">
						<view class="ranking rankinglast">7</view>
					</image>
					<view class="righttext">
						<text class="top">{{recommend[6].bookName}}</text>
						<view class="bottom">力荐值:<text>{{recommend[6].rankValue}}</text> </view>
					</view>
				</view>
				<view class="recommendbox2" id="recommendbox">
					<image v-bind:src="recommend[7].picUrl" mode="widthFix" class="img001">
						<view class="ranking rankinglast">8</view>
					</image>
					<view class="righttext">
						<text class="top">{{recommend[7].bookName}}</text>
						<view class="bottom">力荐值:<text>{{recommend[7].rankValue}}</text> </view>
					</view>
				</view>
			</view>
			<!-- 9 10 -->
			<view class="bookbox">


				<view class="recommendbox1" id="recommendbox">
					<image v-bind:src="recommend[8].picUrl" mode="widthFix" class="img001">
						<view class="ranking rankinglast">9</view>
					</image>
					<view class="righttext">
						<text class="top">{{recommend[8].bookName}}</text>
						<view class="bottom">力荐值:<text>{{recommend[8].rankValue}}</text> </view>
					</view>
				</view>
				<view class="recommendbox2" id="recommendbox">
					<image v-bind:src="recommend[9].picUrl" mode="widthFix" class="img001">
						<view class="ranking rankinglast">10</view>
					</image>
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

		<view class="hotbooks" :wx:for="hotbooks" wx:for-item="hotbooks">
			<view class="hotbooks1">
				<image :src="hotbooks.picUrl" mode="widthFix"></image>
				<text>{{hotbooks.bookName}}</text>
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

			<view class="HotBoutiquebox" :wx:for="HotBoutique" wx:for-item="HotBoutique" vx:key="index">
				<view class="HotBoutiquebooks">
					<image :src="HotBoutique.picUrl" mode="widthFix"></image>
					<view class="HotBoutiquebooksname">
						<view class="HotBoutiquebookstitle">{{HotBoutique.bookName}}</view>
						<view class="completeState" style="hotbookscolor[index]">{{HotBoutique.completeState}} </view>
					</view>


					<view class="author">{{HotBoutique.author}}</view>
					<text class="desc">{{HotBoutique.desc}}</text>
					<view class="category">{{HotBoutique.category}}</view>
				</view>
			</view>

		</view>
		<!-- 口碑佳作区域 -->

		<view class="titlebox2">
			<view class="hotname">{{good.name}}</view>
			<view class="change">换一换<dn-icon :type="'shuaxin'" size="20" color=""></dn-icon>
			</view>
		</view>

		<scroll-view scroll-x="true" class="goodworks">




			<view class="hotbooks" :wx:for="goodworks" wx:for-item="goodworks">
				<view class="hotbooks1">
					<image :src="goodworks.picUrl" mode="widthFix"></image>
					<text class="goodname">{{goodworks.bookName}}</text>
				</view>

			</view>

		</scroll-view>

		<!-- 新书优选 -->
		<view class="newbook ">


			<view class="HotBoutique">
				<view class="titlebox2">
					<view class="hotname">{{newbookname.name}}</view>
					<view class="change">查看更多<dn-icon :type="'shuaxin'" size="20" color=""></dn-icon>
					</view>
				</view>

				<view class="HotBoutiquebox" :wx:for="newbook" wx:for-item="newbook" wx:key="index">
					<view class="HotBoutiquebooks">
						<image :src="newbook.picUrl" mode="widthFix"></image>
						<view class="HotBoutiquebooksname">
							<view class="HotBoutiquebookstitle">{{newbook.bookName}}</view>
							<view class="completeState" :style="newbookcolor[index]">{{newbook.completeState}} </view>
						</view>


						<view class="author">{{newbook.author}}</view>
						<text class="desc">{{newbook.desc}}</text>
						<view class="category">{{newbook.category}}</view>
					</view>
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
				hotbookscolor:[],
				headtitle: "",
				headtitle1: "",
				Fantasybooks: [],
				Citybooks: [],
				HotBoutique: [],
				hotname: "",
				good: "",
				goodworks: [],
				// HotBoutiquebooks:[],
				newbook: [],
				newbookname: "",
				newbookcolor: [],
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
					// console.log(HotBoutique[0].bookName)
					const hotname = res.data.body.data[4]
					this.hotname = hotname
					// 口碑佳作
					const good = res.data.body.data[5]
					this.good = good
					// console.log(good.name)
					const goodworks = res.data.body.data[5].books
					// console.log(goodworks)
					this.goodworks = goodworks
					// 新书优选
					const newbook = res.data.body.data[6].books
					this.newbook = newbook
					const newbookname = res.data.body.data[6]
					this.newbookname = newbookname

					// 新书优选标签颜色筛选
					const newbook1 = this.newbook;
					newbook1.forEach((item ,index)=> {
						if (item.completeState === "完结") {
							// console.log("123123");
							console.log(this)
							// document.querySelector(".querySelector").style="color=blue"
							this.newbookcolor[index] = "color:blue;border-color:blue"
						}else{
							this.newbookcolor[index] = "color:red;border-color:red"
							console.log(this.newbookcolor )
						}

					});
					// 火爆精品标签颜色筛选
					const HotBoutique1 = this.HotBoutique;
					HotBoutique1.forEach((item ,index)=> {
						if (item.completeState === "完结") {
							// console.log("123123");
							console.log(this)
							// document.querySelector(".querySelector").style="color=blue"
							this.hotbookscolor[index] = "color:blue;border-color:blue"
						}else{
							this.hotbookscolor[index] = "color:red;border-color:red"
							console.log(this.hotbookscolor )
						}
					
					});
					
					


				}
			})


		},

		methods: {

		}
	}
</script >
<style lang="scss" style="scoped">
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
		white-space: nowrap;
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
		width: 29%;
		display: inline-block;
		height: 300rpx;
		padding-left: 30rpx;

		view {
			width: 200rpx;
			font-size: 28rpx;
			float: left;
			text-align: left;
		}

		text {
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
		text-align: center;
		// display: -webkit-flex;
		// display: flex;
		// flex: 1;
		margin: 0rpx;
		font-weight: 400;
		font-size: 20rpx;
		border: 1px solid red;
		width: 50rpx;
		height: 30rpx;
		line-height: 30rpx;
		color: #ff5101;
		border-radius: 6rpx;
		margin-left: 30rpx;
		float: right;
	}

	.author {
		position: absolute;
		left: 220rpx;
		top: 80rpx;
		font-size: 25rpx;
		color: #a8a8a8;
		font-weight: 500;
	}

	.desc {
		font-weight: 400;
		font-size: 25rpx;
		position: absolute;
		left: 220rpx;
		top: 120rpx;
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

	.category {
		font-weight: 400;
		font-size: 20rpx;
		position: absolute;
		left: 220rpx;
		top: 234rpx;
		width: 60rpx;
		height: 30rpx;
		line-height: 30rpx;
		border: 1px solid #a8a8a8;
		border-radius: 4rpx;
		color: #a8a8a8;
	}

	.goodworks {
		width: 100%;
		white-space: nowrap;
		// height: 160rpx;
	}

	.goodname {
		display: block;
	}

	.newbook {
		margin-top: 20rpx;
	}
	.ranking{
		width: 30rpx;
		height: 50rpx;
		background: linear-gradient(to bottom right, #ff5500, #ff6e70);
		color: #ffffff;
		position: absolute;
		left: 0px;
		top: 0px;
		font-size: 25rpx;
		text-align: center;
		line-height: 50rpx;
	}
	.rankinglast{
		background: linear-gradient(to bottom right, #b4b2b3, #eae4e8);
	}
	.rankingmiddle{
		background: linear-gradient(to bottom right, #ff7802, #ffae4a);
	}
</style>
