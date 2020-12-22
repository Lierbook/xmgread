<template>
	<view class="publish" v-if="isshow">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true" class="carousel">
			<swiper-item v-for="carousel in carouselList" :key="carousel.id">
				<image :src="carousel.picUrl" mode="widthFix" class="carousel"></image>
			</swiper-item>
		</swiper>
		<!-- 轮播图结束 -->
		<!-- 书籍列表 -->
		<view class="publish1">



			<view class="q">
				<view class="super-hot">
					<view class="hot-title" v-if="hottitle[1]">
						{{hottitle[1].name}}
					</view>
				</view>
				<view class="booker">
					<!-- 列表 -->
					<view class="books-item" v-for="guess in guessUlikeList" :key="guess.bookId" @click="goAbout(guess)"
					
					>
						<image :src="guess.picUrl" mode="scaleToFill" class="poster"></image>
						<view class="bookName">
							{{guess.bookName}}
						</view>
					</view>
				</view>
			</view>

			<view class="w">
				<view class="super-hot">
					<view class="hot-title" v-if="hottitle[2]">
						{{hottitle[2].name}}
					</view>
				</view>
				<view class="booker2">
					<view class="books-item2" v-for=" books in booksUlikeList" :key="books.bookId" @click="goAbout(books)">
						<image :src="books.picUrl" mode="scaleToFill" class="poster"></image>
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



		<view class="publish2">


			<!-- 2书籍列表 -->
			<view class="q">
				<view class="super-hot">
					<view class="hot-title" v-if="hottitle[3]">
						{{hottitle[3].name}}
					</view>
				</view>
				<view class="booker">
					<!-- 列表 -->
					<view class="books-item" v-for="guess in guessUlikeList1" :key="guess.bookId" @click="goAbout(guess)">
						<image :src="guess.picUrl" mode="scaleToFill" class="poster"></image>
						<view class="bookName">
							{{guess.bookName}}
						</view>
					</view>
				</view>
			</view>

			<view class="w">
				<view class="super-hot">
					<view class="hot-title" v-if="hottitle[4]">
						{{hottitle[4].name}}
					</view>
				</view>
				<view class="booker2">
					<view class="books-item2" v-for=" books in booksUlikeList1" :key="books.bookId" @click="goAbout(books)">
						<image :src="books.picUrl" mode="scaleToFill" class="poster"></image>
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


		<view class="publish3">



			<view class="q">
				<view class="super-hot">
					<view class="hot-title" v-if="hottitle[5]"> 
						{{hottitle[5].name}}
					</view>
				</view>
				<view class="booker">
					<!-- 列表 -->
					<view class="books-item" v-for="guess in guessUlikeList2" :key="guess.bookId" @click="goAbout(guess)" >
						<image :src="guess.picUrl" mode="scaleToFill" class="poster"></image>
						<view class="bookName">
							{{guess.bookName}}
						</view>
					</view>
				</view>
			</view>

			<view class="w">
				<view class="super-hot">
					<view class="hot-title" v-if="hottitle[6]">
						{{hottitle[6].name}}
					</view>
				</view>
				<view class="booker2">
					<view class="books-item2" v-for=" books in booksUlikeList2" :key="books.bookId" @click="goAbout(books)">
						<image :src="books.picUrl" mode="scaleToFill" class="poster"></image>
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


		<view class="publish4">



			<view class="q">
				<view class="super-hot">
					<view class="hot-title" v-if="hottitle[7]">
						{{hottitle[7].name}}
					</view>
				</view>
				<view class="booker">
					<!-- 列表 -->
					<view class="books-item" v-for="guess in guessUlikeList3" :key="guess.bookId" @click="goAbout(guess)" >
						<image :src="guess.picUrl" mode="scaleToFill" class="poster"></image>
						<view class="bookName">
							{{guess.bookName}}
						</view>
					</view>
				</view>
			</view>

			<view class="w">
				<view class="super-hot">
					<view class="hot-title" v-if="hottitle[8]">
						{{hottitle[8].name}}
					</view>
				</view>
				<view class="booker2">
					<view class="books-item2" v-for=" books in booksUlikeList3" :key="books.id" @click="goAbout(books)">
						<image :src="books.picUrl" mode="scaleToFill" class="poster"></image>
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
</template>

<script>
	import {myRequestGet} from "@/utils/xsrequest.js"
	export default {
		components: {},
		data() {
			return {
				isshow:false,
				//轮播图
				carouselList: [],
				guessUlikeList: [],
				booksUlikeList: [],
				guessUlikeList1: [],
				booksUlikeList1: [],
				guessUlikeList2: [],
				booksUlikeList2: [],
				guessUlikeList3: [],
				booksUlikeList3: [],
				hottitle: [],
				bookId:{}
			
			}
		},
	
		
		//#ifdef H5||MP-WEIXIN
			created(){
			this.getBook()
		},
		methods: {
			async getBook(){
				let res=await myRequestGet("/api/wechat/chuban")
				console.log(res,"1111111111111111111")
				var carouselList = res.body.data[0].items;
						this.carouselList = carouselList;
						
						var hottitle = res.body.data;
						this.hottitle = hottitle;
						console.log(res.body.data);
						
						
				
						var guessUlikeList = res.body.data[1].books;
						// var guessUlikeList = res.data.body.data[2].books;
						this.guessUlikeList = guessUlikeList;
				
						var booksUlikeList = res.body.data[2].books;
						// var guessUlikeList = res.data.body.data[2].books;
						this.booksUlikeList = booksUlikeList;
						//列表2 
						var guessUlikeList1 = res.body.data[3].books;
						// var guessUlikeList = res.data.body.data[2].books;
						this.guessUlikeList1 = guessUlikeList1;
				
						var booksUlikeList1 = res.body.data[4].books;
						// var guessUlikeList = res.data.body.data[2].books;
						this.booksUlikeList1 = booksUlikeList1;
				
						var guessUlikeList2 = res.body.data[5].books;
						// var guessUlikeList = res.data.body.data[2].books;
						this.guessUlikeList2 = guessUlikeList2;
				
						var booksUlikeList2 = res.body.data[6].books;
						// var guessUlikeList = res.data.body.data[2].books;
						this.booksUlikeList2 = booksUlikeList2;
				
						var guessUlikeList3 = res.body.data[7].books;
						// var guessUlikeList = res.data.body.data[2].books;
						this.guessUlikeList3 = guessUlikeList3;
				
						var booksUlikeList3 = res.body.data[8].books;
						// var guessUlikeList = res.data.body.data[2].books;
						this.booksUlikeList3 = booksUlikeList3;
						// publishList:[]
				this.isshow=true;
			},
			
			
		goAbout (bookId) {
			let id=bookId.bookId
			console.log(id,"ssssssss")
		  uni.navigateTo({
		    url: '/pages/bookdetail/bookdetail?id='+id,
		  })
		},

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
		},
		//#endif
		//#ifdef MP-ALIPAY
		onReady: function() {
			// 轮播图js代码
			uni.request({
				url: 'https://wechat.idejian.com/api/wechat/chuban',
				success: (res) => {
					console.log(res,"xxxxxxxxxxxxxxxxxxx");
					var carouselList = res.data.body.data[0].items;
					this.carouselList = carouselList;
					console.log(carouselList,"xxxxxxxxxxxxxxxxxxx");
					
					var hottitle = res.data.body.data;
					this.hottitle = hottitle;
					console.log(res.data.body.data);
					
					
		
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
		
					var guessUlikeList2 = res.data.body.data[5].books;
					// var guessUlikeList = res.data.body.data[2].books;
					this.guessUlikeList2 = guessUlikeList2;
		
					var booksUlikeList2 = res.data.body.data[6].books;
					// var guessUlikeList = res.data.body.data[2].books;
					this.booksUlikeList2 = booksUlikeList2;
		
					var guessUlikeList3 = res.data.body.data[7].books;
					// var guessUlikeList = res.data.body.data[2].books;
					this.guessUlikeList3 = guessUlikeList3;
		
					var booksUlikeList3 = res.data.body.data[8].books;
					// var guessUlikeList = res.data.body.data[2].books;
					this.booksUlikeList3 = booksUlikeList3;
					// publishList:[]
					
					this.isshow=true;
				},
			});
		},
		methods: {
		goAbout (bookId) {
			let id=bookId.bookId
			console.log(id,"ssssssss")
		  uni.navigateTo({
		    url: '/pages/bookdetail/bookdetail?id='+id,
		  })
		},
		
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
		//#endif
	}
</script>

<style lang="scss" scoped>
	/* 轮播图sass */
	.carousel {
		width: 100%;
		direction:'horizontal';
	}

	.w {
		margin-top: 60px;

	}

	/* 书籍列表css */
	// .super-hot {
	// 	margin-top: 18px;

	// }
	.hot-title {
		text-align: left;
		font-size: 40rpx;
		font-weight: bold;
		line-height: 45px;
		text-indent: 0.5em
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
		margin-top: 5px;
	}

	.bookName {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
		color: #000000;
		font-size: 28rpx;
	}

	.books-item {
		width: 210rpx;
		padding-top: 10px;
		text-align: center;
	}

	.booker2 {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding-bottom: 20px;

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
		border: 1rpx solid #40E0D0;
		color: #40E0D0;
		font-size: 10px;
		width: 40px;
		height: 15px;
		text-align: center;
		margin-left: 15px;
	}

	.author {
		text-align: left;
		margin-top: 8px;
		font-size: 13px;
	}

	.category {
		margin-top: 15px;
		font-size: 13px;
		border: 1rpx solid #808080 ;
		color: #808080 ;
		width: 60px;
		height: 20px;
		text-align: center;

	}

	.desc {
		width: 470upx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		margin-top: 10px;
		font-size: 13px;
		color: #888888;
	}

	.publish {
		background-color: #DDDDDD;
	}

	.publish1 {
		background-color: #FFFFFF;
	}

	.publish2 {
		margin-top: 10px;
		background-color: #FFFFFF;

	}

	.publish3 {
		margin-top: 10px;
		background-color: #FFFFFF;

	}

	.publish4 {
		margin-top: 10px;
		background-color: #FFFFFF;

	}
</style>
