<template>
	<view class="content">
		<aloys-tab :tabs="tabs" @change="onTabChange">
			<view slot="content0" class="xxx">
				<lv-select @handleSearch="handleSearch" @change="change" placeholder="请输入信息" :infoList="infoList" :showValue="showValue"
				 v-model="searchValue" :loading="loading" type="success " :uniShadow="true"></lv-select>

			</view>
			<view slot="content1" class="xxx">


			</view>
			<view slot="content2" class="c">

				<!-- 轮播图开始 -->
				<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="carousel">


					<swiper-item v-for="carousel in carouselList">
						<image :src="carousel.picUrl" mode="" class="carousel"></image>
					</swiper-item>
				</swiper>
				<!-- 轮播图结束 -->

				<!-- 书籍列表 -->
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
							文学艺术
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
		</aloys-tab>
	</view>
</template>

<script>
	import aloysTab from "@/components/aloys-tab/aloys-tab.vue"
	import lvSelect from '../../components/lv-select/lv-select'

	export default {
		components: {
			aloysTab,
			lvSelect

		},
		data() {
			return {
				loading: false,
				showValue: 'name', // 需要显示的数据，必须与infoList中的name对应
				searchValue: '',
				infoList: [],
				infoLists: [{
					name: '吕星辰1'
				}, {
					name: '吕星辰2'
				}, {
					name: '吕星辰3'
				}, {
					name: '吕星辰4'
				}],
				tabs: [{
					title: '男生'
				}, {
					title: '女生'
				}, {
					title: '出版'
				}],
				//轮播图
				carouselList: [],
				guessUlikeList: [],
				booksUlikeList: []
			}
		},
		onLoad() {

			var me = this;
			// 轮播图js代码
			uni.request({
				url: 'https://wechat.idejian.com/api/wechat/chuban',
				success: (res) => {
					console.log(res);

					var carouselList = res.data.body.data[0].items;
					me.carouselList = carouselList;

				},

			});
			//轮播图代码结束
			// 书籍列表
			var me = this;
			uni.request({
				url: 'https://wechat.idejian.com/api/wechat/chuban',

				success: (res) => {
					console.log(res);

					var guessUlikeList = res.data.body.data[1].books;
					// var guessUlikeList = res.data.body.data[2].books;
					me.guessUlikeList = guessUlikeList;

				},

			});

			var me = this;
			uni.request({
				url: 'https://wechat.idejian.com/api/wechat/chuban',

				success: (res) => {
					console.log(res);

					var booksUlikeList = res.data.body.data[2].books;
					// var guessUlikeList = res.data.body.data[2].books;
					me.booksUlikeList = booksUlikeList;

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

<style>
	.content {
		position: absolute;
		height: 300%;
	}


	/* 轮播图css */
	.carousel {
		width: 100%;
		height: 450upx;

	}

	/* 书籍列表css */
	.super-hot {
		margin-top: 12upx;
		padding: 20upx;
	}

	.hot-title {
		display: flex;
		flex-direction: row;
	}


	.poster {
		width: 210rpx;
		height: 270rpx;
	}

	.bookName {}

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
	
			justify-content: space-around;
		
	}



	.tong {
		display: flex;
		flex-direction: row;

	}

	.completeState {
		padding-left: 10px;
	}


	.author {
		padding-top: 10px;
		font-size: 15px;
	}

	.desc {
		padding-top: 10px;
		font-size: 13px;
	}

	.category {
		padding-top: 30px;
		font-size: 13px;
	}


	.w {
		margin-top: 70px;
	}
	.desc{
	
		width: 470upx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		
	}
</style>
