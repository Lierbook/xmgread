<template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view @click="leftClickNav(index,item)" v-for="(item,index) in name" :key="item.name" :class="{'active':active==index}">{{item.name}}</view>
		</scroll-view>
		<scroll-view class="right" scroll-y>

			<block v-for="item in items" :key="item.categoryId">
				<!-- 跳转详情页面 -->

				<view class="right-box" @click="details(item)">
					<view class="right-boxs" style="width: 100%; height: 100%;">
						<text space="nbsp">{{ item.name}}</text>
						<view class="img">
							<image :src="item.pics[0]" class="img-b"></image>
							<image :src="item.pics[1]" class="a"></image>

						</view>
					</view>
				</view>
			</block>

		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items: [],
				//当前激活的分类
				active: 0,
				name: "",
			};
		},
		onReady: function() {
			uni.request({

				url: 'https://wechat.idejian.com/api/wechat/category',
				success: (res) => {
					let name = res.data.body.data;
					// console.log(name,"fffffffffffffffffffffffffffffffffffffff")
					this.name = name;
					this.items = this.name[0].items;

				}

			})
		},
		methods: {
			leftClickNav(index, item) {
				this.active = index;
				// 右边栏
				const resobj = this.name[index].items;
				// console.log(index)
				this.items = resobj;
				// console.log(this.name[index], "sdfdfdfjhjjj ")
			},
			//跳转详情页面
			details(item) {
				
				uni.navigateTo({
					
					url: "../details/details?id=" + item.categoryId
				})
			}
		}

	}
</script>

<style lang="scss">
	.pics {
		font-size: 28rpx;
		display: flex;

		.left {
			flex: 1;
			width: 150rpx;
			height: 100%;

			view {
				flex: 1;
				height: 60px;
				line-height: 60px;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
			}

			.active {
				border-left: 2px solid red;
				background: #f5f5f5;
			}
		}

		.right {
			background: #f5f5f5;
			width: 600rpx;
			height: 100%;
			margin-left: 20rpx;

			.right-box {
				width: 25%;
				// margin-top: 10rpx;
				margin: 40rpx 2.4%;
				height: 190rpx;
				float: left;
				background: #F1F1F1;

				.right-boxs {
					// text-align: center;
					border-radius: 10rpx;
					position: relative;
					// border: 1px solid red;
					// background: #F8F8FF;
					box-shadow: 2px 2px 5px #C8C7CC;

					text {
						border-radius: 10rpx 10rpx 0rpx 0rpx;
						display: inline-block;
						width: 100%;
						height: 20%;
						background: #FFFFFF;
					}

					.img {

						text-align: center;
						position: absolute;
						left: 0rpx;
						top: 67rpx;
						line-height: 100%;
						box-sizing: border-box;
						width: 90%;
						height: 70%;

						image {
							// position: absolute;
							z-index: 1;
							top: 0rpx;
							left: 10rpx;

						}

						.a {
							width: 100rpx;
							height: 90rpx;
							// position: absolute;
							// left: 10rpx;

						}

						.img-b {

							position: absolute;
							right: 20rpx;
							width: 70rpx;
							height: 100rpx;
						}

					}
				}

			}






		}


	}
</style>
