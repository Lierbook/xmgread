<template>
	<view class="ml">
		<view class="head">共{{list.length}}章</view>
		<view class="" v-for="(item,index) in list" :key="index">	
			<view class="chapter" @click="getChapter()">
				<text class="chapter_s">{{item.url}}{{item.name}}</text>
			</view>
		</view>
	</view>
</template>


<script>
	import myRequestGet from "../../utils/getbooks.js"

	export default {
		data() {
			return {
				id: "",
				list: [],
				
			}
		},
		onLoad(options) {
			this.id = options.id
			this.getMulv()
		},
		methods: {
			async getMulv() {
				const res = await myRequestGet("api/wechat/allcatalog/" + this.id + "?bookId=12324051&page=1%20mulv")
				console.log(res)
				this.list = res.body.chapterList
			},
			getChapter(){
				uni.navigateTo({
					url:`/pages/bookshelfs/bookshelfs?id="this.id&index"`
				})
			}
		}
	}
</script>

<style>
	.ml{
		background: rgba(199,237,204,255);
	}
	.head{
		color: #999999;
		font-size: 25px;
		
	}
	.chapter{
		width: 100%;
		height: 60px;
		border-bottom: 1rpx solid #F1F1F1;
		line-height: 30px;
		font-size: 20px;
		text-align: left;
			
	}
	.chapter_s{
		line-height: 60px;
		text-align: center;
	}
</style>
