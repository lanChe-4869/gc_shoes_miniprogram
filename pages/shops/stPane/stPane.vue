<template>
	<view class="container">
		<view class="liPane">
			
			<view class="shoesLi" v-for="li in list" @click='showCopy(li.detail_url)'>
				<image :src='li.pic_url' mode="widthFix" class="shoesLi-img"></image>
				<view class="shoesLi-text">
					<text class="shoesLi-text-title">{{li.title}}</text>
					<!-- <text class="shoesLi-text-content">纪念版/白色/荧光糖粉</text> -->
					<view class="shoesLi-price">
						<text class="shoesLi-price-text">￥ {{li.price}}</text>
						
						<button type="default" class="shoesLi-price-btn">
							<text>详情</text>
						</button>
					</view>
				</view>
			</view>
			
		</view>
		
		<!-- <view class="uni-mask" style="display: flex;justify-content: center;align-items: center;">
			<view class="copyPane">
				
			</view>
		</view> -->
	</view>
</template>

<script>
	import {stRes} from "../../../js/list.js"
	export default{
		data(){
			return{
				list:[]
			}
		},
		methods:{
			showCopy(src){
				uni.setClipboardData({
				    data: src,
				    success: function () {
				        
				    }
				});
				
				/* uni.showModal({
				    title: '淘口令',
				    content: '复制淘口令到淘宝上进行查看',
					confirmColor:"#007CFF",
				    success: function (res) {
				        if (res.confirm) {
				            console.log(src);
							
							uni.setClipboardData({
							    data: src,
							    success: function () {
							        
							    }
							});
							
							uni.showToast({
							    title: '复制成功',
							    duration: 1000
							});
							
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				}); */
			}
		},
		onLoad(options){
			var data=JSON.parse(options.id);
			console.log(data);
			this.$data.list=stRes[data.person][data.shoes];
			console.log(this.$data.list)
		}
	}
</script>

<style>
	.liPane{
		width: 100%;
		height: 100%;
		padding: 40rpx 40rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.shoesLi{
		width: 636rpx;
		height: 192rpx;
		display: flex; 
		justify-content: space-between;
		margin-bottom: 40rpx;
	}
	.shoesLi-img{
		width:202rpx;
		height:192rpx;
	}
	.shoesLi-text{
		width: 406rpx;
		height:100%;
		display: flex;
		flex-direction: column;
		justify-content:space-between;
	}
	.shoesLi-text-title{
		font-size: 36rpx;
		height:100rpx;
		white-space: pre-wrap;
		overflow: hidden;
		color:#474747;
		margin-bottom: 12rpx;
	}
	.shoesLi-text-content{
		font-size: 26rpx;
		color:#4F4F4F;
		margin-bottom: 34rpx;
	}
	.shoesLi-price{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.shoesLi-price-text{
		font-size: 40rpx;
		color:#4797EB;
	}
	.shoesLi-price-btn{
		padding:0 30rpx;
		height:48rpx;
		border-radius: 20rpx;
		border:1px solid #CACACA;
		font-size: 26rpx;
		color:#000000;
		background-color: #ffffff;
		display: flex;
		justify-content: center;
		align-items: center;
		margin:0px;
	}
	.shoesLi-price-btn:after{
		border: 0px;
	}
	.copyPane{
		width:500rpx;
		height:500rpx;
		margin:auto auto;
		background-color: #FFFFFF;
	}
</style>
