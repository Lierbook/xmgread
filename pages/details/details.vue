<template>
	<view>
		<view class="top">
			<view>
				<button class="active" hover-class='button-hover'>全部</button>
				<button class="active" v-for="option in options" :key="option.id">{{option.name}}</button>
			</view>
			<view>
				<button class="active" v-for="item in items" :key="item.id">{{item.name}}</button>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				items: [],
				name: "",
				books: 0,
				options: [],
			};
		},
		// 获取接口数据
		onReady: function() {
			uni.request({
				url: `https://wechat.idejian.com/api/wechat/subcategory?categoryId=1432&resourcesId=28&order=1&filterInfo=&page=1`,
				success: (res) => {
					// console.log(res, "xxxxx")
					let re = res.data.body;
					console.log(re, "xxxxxxxx")
					this.name = re.category.name;
					// console.log(this.name)  // 都市
					this.books = re.books;
					// console.log(this.books,"xxx")	
					this.items = re.category.sort.items; // 获取顶部 热门、更新、评分、最新
					// console.log(this.items)
					this.options = re.category.filter[0].options; //获取顶部状态  连载  完结
					// console.log(this.options,"111")
				}
			})
		},
		methods: {

		},
	}
</script>
