<template>
	<view class="content">
		<aloys-tab :tabs="tabs" @change="onTabChange">
			<view slot="content0" class="xxx">
			  <lv-select
			        @handleSearch = "handleSearch"
			        @change = "change"
			        placeholder = "请输入信息"
			        :infoList = "infoList"
			        :showValue = "showValue"
			        v-model = "searchValue"
			        :loading = "loading"
			        type = "success "
			        :uniShadow = "true"
			        ></lv-select>
			
			</view>
			<view slot="content1" class="xxx">B</view>
			<view slot="content2" class="xxx">C</view>
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
                },{
                    name: '吕星辰2'
                },{
                    name: '吕星辰3'
                },{
                    name: '吕星辰4'
                }],
				tabs: [{
					title: '男生'
				}, {
					title: '女生'
				}, {
					title: '出版'
				}]
			}
		},
		onLoad() {
			console.log("onload")
		},
		methods: {
			onTabChange(obj) {
				uni.showToast({
					title: '切换成功',
					icon: 'none',
					duration:500,
					mask:false

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
		height: 100%;
	}

	.xxx {
		font-size: 42rpx;
		font-weight: bold;
		padding: 10rpx 0;
		text-align: center;
	}
</style>
