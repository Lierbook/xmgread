<template>
	<view>
		<view class=""v-for="item in list" :key="item.id">
			{{item.name}}
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
			}
		}
	}
</script>

<style>

</style>
