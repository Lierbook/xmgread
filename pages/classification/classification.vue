<template>
	<view class="classify">
		<!-- 左边分类栏 -->
		<!-- scroll-y="{{true}}" 允许Y轴滚动-->
		<scroll-view class="left" scroll-y>
			<!-- class="{'active' :active==index}" 什么时候有样式 取决于active当前激活的分类下	-->
			<view @click="leftClickHandle(index,item)" v-for="(item,index) in name" :key="item.name" :class="{'active':active==index}">
				{{item.name}}
			</view>
		</scroll-view>
		<!-- 右侧分类栏 -->
		<scroll-view class="right" scroll-y>
			<!-- categoryId 接口中右边分类的ID -->
			<view class="right-nav" v-for="item in items" :key="item.categoryId">
				<view class="right-navs">
					<text>{{item.name}}</text>
					<view class="img">
						<image :src="item.pics[0]">
							<!-- <image :src="item.pics[1]"> -->
						</image>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				items: [], // 小说类型分类
				name: "", // 女生，男生，出版分类
				active: 0, // 当前激活的分类，0代表第一个
			};
		},
		// 获取接口数据
		onReady: function() {
			uni.request({
				url: 'https://wechat.idejian.com/api/wechat/category',
				success: (res) => {
					// 获取接口name数据，男生、女生、出版....
					// 第一层data => 第二层body => 第三层data(包含name和items)
					let name = res.data.body.data;
					// console.log(res, "xxxxxxxxx");
					// console.log(res.data, "xxxxxxxxxll");
					// console.log(name, "fffffffffffffffffffffffffffffffffffffff");
					this.name = name;
					// 获取小说分类，默认name分类的第一个
					this.items = this.name[0].items;
					// console.log(this.items)
				}
			})
		},
		methods: {
			leftClickHandle(index, item) {
				// 激活的分类
				this.active = index;
				// 通过左边分类名字下标获取右边分类栏
				const resobj = this.name[index].items;
				// console.log(resobj)
				this.items = resobj;
				// console.log(this.items)
			}
		}
	}
</script>

<style lang="scss">
	.classify {
		height: 100%;
		display: flex;

		// 左侧分类样式
		.left {
			height: 100%;
			width: 180rpx;
			border-right: 1px solid #eee;

			view {
				height: 90px;
				line-height: 100px;
				text-align: center;
				font-size: 35rpx;
				border-bottom: 1px solid #eee;
			}

			// 激活分类的样式
			.active {
				background-color: #f5f5f5;
				border-left: 3px solid red;
			}
		}

		// 右侧分类样式
		.right {
			height: 100%;
			text-align: center;
			background-color: #f5f5f5;
			padding-top: 20px;
			// 右侧每个盒子样式
			.right-nav {
				width: 180rpx;
				height: 180rpx;
				float: left;
				padding-left: 8px;
				padding-bottom: 30px;
				// 右侧文本图片盒子样式
				
				.right-navs {
				
					width: 180rpx;
					height: 180rpx;
					background-color: white;
					border-radius: 8px;
					
				}

				// 右侧图片盒子样式
				.img {
					text-align: center;
					width: 180rpx;
					height: 150rpx;
					 margin-top: 10rpx;
					padding-top: 20rpx;
					background-color: #eee;
					border-bottom-left-radius: 8px;
					border-bottom-right-radius: 8px;
					image {
						
						width: 100rpx;
						height: 130rpx;
						
					}
				}
			}
		}
	}
</style>
