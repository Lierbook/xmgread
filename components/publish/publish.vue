<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="carousel">
			<swiper-item v-for="carousel in carouselList">
				<image :src="carousel.picUrl" mode="widthFix" class="carousel"></image>
			</swiper-item>
		</swiper>
		<!-- 轮播图结束 -->
		<!-- 书籍列表 -->
		<view class="publish">
			<view class="publish1">
				<view class="q">
					<view class="super-hot">
						<view class="hot-title">
							出版小说
						</view>
					</view>
					<view class="booker">
						<!-- 列表 -->
						<view class="books-item" v-for="guess in guessUlikeList">
							<image :src="guess.picUrl" mode="" class="poster"></image>
							<view class="bookName">
								{{guess.bookName}}
							</view>
						</view>
					</view>
				</view>

				<view class="w">
					<view class="super-hot">
						<view class="hot-title">
							经财管理
						</view>
					</view>
					<view class="booker2">
						<view class="books-item2" v-for=" books in booksUlikeList">
							<image :src="books.picUrl" mode="" class="poster"></image>
							</image>
							<view class="right">
								<view class="tong">
									<view class="bookName">
										{{books.bookName}}
									</view>
									<view class="completeState">
										{{books.completeState}}
									</view>
								</view>
								<view class="author">
									{{books.author}}
								</view>
								<view class="desc">
									{{books.desc}}
								</view>
								<view class="category">
									{{books.category}}
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>


			<view class="publish1">
				<!-- 2书籍列表 -->
				<view class="q">
					<view class="super-hot">
						<view class="hot-title">
							科学技术
						</view>
					</view>
					<view class="booker">
						<!-- 列表 -->
						<view class="books-item" v-for="guess in guessUlikeList1">
							<image :src="guess.picUrl" mode="" class="poster"></image>
							<view class="bookName">
								{{guess.bookName}}
							</view>
						</view>
					</view>
				</view>

				<view class="w">
					<view class="super-hot">
						<view class="hot-title">
							健康休闲
						</view>
					</view>
					<view class="booker2">
						<view class="books-item2" v-for=" books in booksUlikeList1">
							<image :src="books.picUrl" mode="" class="poster"></image>
							</image>
							<view class="right">
								<view class="tong">
									<view class="bookName">
										{{books.bookName}}
									</view>
									<view class="completeState">
										{{books.completeState}}
									</view>
								</view>
								<view class="author">
									{{books.author}}
								</view>
								<view class="desc">
									{{books.desc}}
								</view>
								<view class="category">
									{{books.category}}
								</view>
							</view>
						</view>
					</view>
				</view>

			</view>
		</view>

	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				//轮播图
				carouselList: [],
				guessUlikeList: [],
				booksUlikeList: [],
				guessUlikeList1: [],
				booksUlikeList1: []
			}
		},
		onReady: function() {
			// 轮播图js代码
			uni.request({
				url: 'https://wechat.idejian.com/api/wechat/chuban',
				success: (res) => {
					console.log(res);
					var carouselList = res.data.body.data[0].items;
					this.carouselList = carouselList;

					var guessUlikeList = res.data.body.data[1].books;
					// var guessUlikeList = res.data.body.data[2].books;
					this.guessUlikeList = guessUlikeList;

					var booksUlikeList = res.data.body.data[2].books;
					// var guessUlikeList = res.data.body.data[2].books;
					this.booksUlikeList = booksUlikeList;
					//列表2 
					var guessUlikeList1 = res.data.body.data[3].books;
					// var guessUlikeList = res.data.body.data[2].books;
					this.guessUlikeList1 = guessUlikeList1;

					var booksUlikeList1 = res.data.body.data[4].books;
					// var guessUlikeList = res.data.body.data[2].books;
					this.booksUlikeList1 = booksUlikeList1;
				},
			});
		},
		methods: {
			onTabChange(obj) {
				uni.showToast({
					title: '切换成功',
					icon: 'none',
					duration: 500,
					mask: false
				})
			},
			handleSearch() {
				this.loading = true
				setTimeout(() => {
					this.loading = false
					this.infoList = this.infoLists
				}, 2000)
			},
		}
	}
</script>

<style lang="scss" scoped>
	/* 轮播图sass */
	.carousel {
		width: 100%;
	}

	.publish {
		flex: 3;
		display: flex;
		flex-flow: column;

	}

	.publish1 {
		flex: 1;
	}

	.q {
		margin-top: 10px;
	}

	/* 书籍列表css */
	// .super-hot {
	// 	margin-top: 18px;

	// }
	.hot-title {
		font-size: 40rpx;
		font-weight: bold;
	}

	.poster {
		width: 210rpx;
		height: 270rpx;
	}

	.booker {
		width: 100%;
		height: 900upx;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		flex-wrap: wrap;
	}

	.books-item {
		width: 210rpx;
	}

	.booker2 {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.books-item2 {
		display: flex;
		flex-direction: row;
		margin-top: 10px;

		justify-content: space-around;
	}

	.tong {
		display: flex;
		flex-direction: row;
	}

	.completeState {
		border: 1rpx solid green;
		color: green;
		font-size: 10px;
		width: 40px;
		height: 15px;
		text-align: center;
		margin-left: 15px;
	}

	.author {
		margin-top: 8px;
		font-size: 15px;
	}

	.category {
		margin-top: 15px;
		font-size: 13px;
		border: 1rpx solid green;
		color: green;
		width: 60px;
		height: 20px;
		text-align: center;
		margin-left: 15px;
	}

	.desc {
		width: 470upx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		margin-top: 10px;
		font-size: 13px;
	}
</style>
