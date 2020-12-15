<template>
	<view class="box">
		<view class="top">
			<!-- <button v-for="name in name" :key="name.id">{{name.name}}</button> -->
		</view>
		<view class="below"@>
			<view class="below-box" v-for="item in books" :key="item.bookId">
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
		<navigator ></navigator>



		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: "",
				name: "",
				books: []

			}
		},
		onLoad(opcition) {
			this.id = opcition.id
		},
		onReady: function() {
			uni.request({
				url: `https://wechat.idejian.com/api/wechat/subcategory?categoryId=${this.id}&resourcesId=28&order=1&filterInfo=&page=1`,
				success: (res) => {
					let re = res.data.body;

					this.name = re.category.name;
					console.log(this.name)
					this.books = re.books;
					console.log(this.books)
					// setNavigationBarTitle({
					// 	title: this.name
					// })
				}
			})

			// 	uni.setNavigationBarTitle(()=>{

			// 		title: this.name

			// 	})
			// console.log(this.name, "xxxxxxxxxxxxxx")

		},


		//在页面渲染生命函数中设置导航栏信息

		methods: {

		}
	}
</script>

<style lang="scss">
	.box {
		.top {
			width: 100%;
			height: 300rpx;
			border: #007AFF 1rpx solid;
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
					text{
						font-size: 38rpx;
					}
					.text{
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
					.text-l{
						font-size: 26rpx;
						color: #C8C7CC;
					}
					.text-r{
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
