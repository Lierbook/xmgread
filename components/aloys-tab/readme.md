## 更新记录

### 1.0（2020-11-05）
插件完成，仅需传入tabs数组即可


## 插件安装

tab切换组件 将组件放在自己的组件库里导入即可

## 注意

请使用一个高度固定的容器包裹组件，或者使用style属性设置组件的height值；

## 导入：
```javascript
import aloysTab from "@/components/aloys-tab/aloys-tab.vue"
```

## 属性 attribute

|  属性名  | 类型	|  介绍  |  默认值  |
|  ----| ----	| ----	| ----	|
| tabs | Array | 数组元素为Object，obj.title属性为标签显示名, 示例：[{ title: 'tab1' }, { title: 'tab2' }]  | [] |

## 事件

|  事件名  | 传参	|  介绍  | 
|  ----| ----	| ----	| 
| change | index | tab页切换触发，返回切换后的tab index  |

## 示例代码
```
<template>
	<view class="content">
		<aloys-tab :tabs="tabs" @change="onTabChange">
		  <view slot="content0" class="xxx">A</view>
		  <view slot="content1" class="xxx">B</view>
      <view slot="content2" class="xxx">C</view>
		</aloys-tab>
	</view>
</template>

<script>
  import aloysTab from "@/components/aloys-tab/aloys-tab.vue"
  
	export default {
		components: { aloysTab },
		data() {
      return {
				tabs: [{
				  title: 'tabA'
				},{
				  title: 'tabB'
				},{
				  title: 'tabC'
				}]
			}
		},
		onLoad() {

		},
		methods: {
      onTabChange(index) {
        uni.showToast({
          title: '切换至tab：' + index
        })
      }
		}
	}
</script>

<style>
.content{
  position: absolute;
  height: 100%;
}
.xxx{
  font-size: 42rpx;
  font-weight: bold;
  padding: 100rpx 0;
  text-align: center;
}
</style>
```

## 补充说明
每个tab页显示内容，使用slot插槽使用，名称为 content0，content1，..., 以此类推。