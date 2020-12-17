<template>
	<view class="box">
		<view class="top">
			<view class="top-but">
				<button class="active"  hover-class='button-hover'>全部</button>
				<button class="active" v-for="option in options" :key="option.id">{{option.name}}</button>
			</view>
			<view class="top-but">
				<button class="active" v-for="item in items" :key="item.id">{{item.name}}</button>
			</view>
		</view>
		<!-- #ifdef H5 -->
		<!-- #endif -->
		<view class="below">
			<view class="below-box" v-for="item in books" :key="item.bookId" @click="goBookDetail(item)">
				<view class="below-left">
					<image :src="item.picUrl" style="width: 180rpx;height: 250rpx;"></image>
				</view>
				<view class="below-right">
					<text>{{item.bookName}}</text>
					<text class="text">{{item.desc}}</text>
					<text class="text-l">{{item.author}}</text>
					<text class="text-r">{{item.tag}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: "",
				name: "",
				books: [],
				items: [],
				options: [],




			}
		},
		onLoad(options) {
			this.id = options.id
		},

		onReady: function() {
			uni.request({
				url: `https://wechat.idejian.com/api/wechat/subcategory?categoryId=${this.id}&resourcesId=28&order=1&filterInfo=&page=1`,
				success: (res) => {
					let re = res.data.body;
					this.name = re.category.name;
					// console.log(this.name,44444444444444444)
					this.books = re.books;
					// console.log(this.books)
					this.items = re.category.sort.items;
					this.options = re.category.filter[0].options;

					//在页面渲染生命函数中设置导航栏信息
					uni.setNavigationBarTitle({
						title: this.name
					});
				}
			})


		},


		methods: {
			goBookDetail(item) {
				// console.log(item.bookId,"dddddddddddddd")
				uni.navigateTo({
					url:"../bookdetail/bookdetail?id="+item.bookId
				})
			}
		}
	}
</script>

<style lang="scss">
	.box {
		.top {
			width: 100%;
			height: 150rpx;
			padding: 20rpx;
			margin-bottom: 30rpx;

			.top-but {
				width: 100%;

				button {
					display: inline;
					width: 120rpx;
					height: 50rpx;
					// font: 28rpx;
					color: #777777;
					margin: 0 3rpx;
				}

				.active:hover {
					color: red;
					background: pink;
				}
			}

		}

		.below {
			background: #f5f5f5;

			.below-box {
				height: 300rpx;
				padding: 20rpx;
				box-sizing: border-box;

				.below-left {
					width: 30%;
					height: 300rpx;
					float: left;
				}

				.below-right {
					width: 70%;
					height: 300rpx;
					float: right;
					color: #777777;
					box-sizing: border-box;
					padding: 5rpx;

					text {
						font-size: 38rpx;
					}

					.text {
						margin: 20rpx 0rpx;
						display: block;
						height: 72rpx;
						font-size: 26rpx;
						//超出文本，隐藏并加省略号
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						overflow: hidden;
					}

					.text-l {
						font-size: 26rpx;
						color: #C8C7CC;
					}

					.text-r {
						padding: 3rpx 20rpx;
						font-size: 26rpx;
						border: 1rpx solid #C8C7CC;
						float: right;
					}
				}
			}

		}
	}
</style>
