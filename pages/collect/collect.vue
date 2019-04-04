<template>
	<view class="content">
			<view class="">
				<text>共5个商品</text>
				<text @click="editorChange()">{{ editor ? '完成' : '编辑' }}</text>
			</view>
			<view class="collect_item">
				<view class="left">
					<image src="../../static/home/sheweimoren_18.png" mode=""></image>
					<image src="../../static/home/morendizhi_07.png" mode=""></image>
				</view>
				<view class="center">
					<image src="../../static/home/dakoufu_36.png" mode=""></image>
				</view>
				<view class="right">
					<text>大甜橙</text>
					<text>大甜橙子显示特惠</text>
					<view class="">
						<text>￥5.8元/斤</text>
						<text>进店逛逛</text>
					</view>
				</view>
			</view>
	</view>
</template>

<script>
import { getUserInfo } from '@/request/API/index.js';
export default {
	data() {
		return {
			editor:true
		};
	},
	onLoad() {
	
	},
	methods: {
		editorChange(){},
	}
};
</script>

<style lang="less" scoped>
</style>
