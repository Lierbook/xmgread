<template>
	<view class="page">
		<text>图表插件预览</text>
		<view>
			<view v-for="(item,index) in iconClassList" :key="index" class="icon-item">
				<dn-icon :type="item" size="40" color=""></dn-icon>
				<text>{{ item }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import dnIcon from '../../components/dn-icon/dn-icon.vue'
	export default {
	components:{
		dnIcon
	},
		data() {
			return {
				iconClassList: [
					'wangzuo',
					'arrowl',
					'arrowr',
					'shangchuan',
					'shengyinguanbi',
					'shijian',
					'shandian',
					'shengyin',
					'collect',
					'haoping',
					'zan',
					'qu-spinner',
					'qu-unlocked',
					'lunkuodasan-3',
					'lunkuodasan-2',
					'lunkuodasan-1',
					'lunkuodasan-',
					'network',
					'help',
					'advisory-other',
					'yinhangqia',
					'ziyuan',
					'dollar',
					'renminbi',
					'fujian',
					'zhaopian',
					'shipin',
					'daohang',
					'umidd17',
					'baidu',
					'xinxi',
					'daxiao',
					'xiaolian',
					'tongzhi',
					'xiazai',
					'zhiwen',
					'ico',
					'saomiao',
					'guanji',
					'bishangyanjing',
					'yanjing',
					'shuaxin',
					'new-home',
					'tixing1',
					'jia',
					'tixing',
					'jian',
					'jinlingyingcaiwangtubiao06',
					'youjian',
					'weibo1',
					'weibo',
					'yuyin',
					'paizhaoxiangjixianxing',
					'fenxiang',
					'bijiben1',
					'bijiben',
					'diannao',
					'gouwuche',
					'shengri',
					'start',
					'tianqi',
					'xingxing',
					'xing',
					'tubiaozhizuo--',
					'delete',
					'shanchu',
					'tuandui',
					'vip',
					'yue',
					'shezhi',
					'anquanzhongxin',
					'guanyuwomen',
					'dingdanzhuangtaidengdai',
					'dingdanzhuangtai_yifahuo',
					'dingdanzhuangtaidingche',
					'yifukuan',
					'daifahuo',
					'weifukuan',
					'zidongdingwei',
					'qiche',
					'che1-copy',
					'tiaozhuan',
					'xiala1',
					'xiala',
					'xinaixin',
					'renwu-touxiang',
					'dianhua',
					'jisuanqi',
					'shouji',
					'nvsheng1',
					'qq1',
					'nansheng',
					'weixin1',
					'huodong',
					'dizhi',
					'APPicon-qq',
					'xingbie',
					'qq',
					'rili',
					'zhounianjinian',
					'weixin'
				],
			}
		},
		methods: {
		}
	}
</script>

<style>
page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #fff
	}

	view {
		font-size: 28upx;
		line-height: inherit
	}

	.example {
		padding: 0 30upx 30upx
	}

	.example-title {
		font-size: 32upx;
		line-height: 32upx;
		color: #777;
		margin: 40upx 25upx;
		position: relative
	}

	.example .example-title {
		margin: 40upx 0
	}

	.example-body {
		padding: 0 40upx
	}

	.icon-item {
		display: inline-flex;
		width: 187upx;
		height: 187upx;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
</style>
