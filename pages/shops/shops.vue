<template>
	<view class="container">
		<view class="m-header">
			<image style="width: 100%;" src="https://img-blog.csdnimg.cn/d87550fd24fe43c0b86373418b5b55b7.png" mode="widthFix">
			</image>
			<view class="m-shader">
			</view>
			
		</view>
		
		<view class="g-main">
			<view class="m-tab">
				<view class='tab-li'  @click="cgPane(0)" :class='index==0?"li-st":""'>
					<text>男士专区</text>
				</view>
				
				<view class="tab-li" @click="cgPane(1)" :class='index==1?"li-st":""'>
					<text>女士专区</text>
				</view>
				
				<view class="tab-li" @click="cgPane(2)" :class='index==2?"li-st":""'>
					<text>儿童专区</text>
				</view>
				
				<view class="tab-li" @click="cgPane(3)" :class='index==3?"li-st":""'>
					<text>老人专区</text>
				</view>
				
				<view class="tab-li" @click="cgPane(4)" :class='index==4?"li-st":""'>
					<text>孕妇专区</text>
				</view>
			</view>
			
			<view id="m-body-man" class="m-body" :style='index==0?"display: flex;":"display: none;"'>
				<view class="body-img">
					<image src="../../static/images/shops/man.png" mode="widthFix" class="m-body-img"></image>
					<text>男士专区</text>
				</view>
				
				<view class="m-body-row">
					<view class="body-li" @click="toStPane('男士','运动鞋')">
						<image src="../../static/images/shops/man_yd.png" mode="widthFix" class="body-li-img"></image>
						<text>运动鞋</text>
					</view>
					
					<view class="body-li" @click="toStPane('男士','休闲鞋')">
						<image src="../../static/images/shops/man_xx.png" mode="widthFix" class="body-li-img"></image>
						<text>休闲鞋</text>
					</view>
				</view>
				
				<view class="m-body-row">
					<view class="body-li" @click="toStPane('男士','正装鞋')">
						<image src="../../static/images/shops/man_zz.png" mode="widthFix" class="body-li-img"></image>
						<text>正装鞋</text>
					</view>
					
					<view class="body-li" @click="toStPane('男士','帆布鞋')">
						<image src="../../static/images/shops/man_fb.png" mode="widthFix" class="body-li-img"></image>
						<text>帆布鞋</text>
					</view>
				</view>
				
				<view class="m-body-row">
					<view class="body-li" @click="toStPane('男士','老爹鞋')">
						<image src="../../static/images/shops/man_ld.png" mode="widthFix" class="body-li-img"></image>
						<text>老爹鞋</text>
					</view>
					
					<view class="body-li" @click="toStPane('男士','工装鞋')">
						<image src="../../static/images/shops/man_gz.png" mode="widthFix" class="body-li-img"></image>
						<text>工装鞋</text>
					</view>
				</view>
			</view>
		
			<view class="m-body" id="m-body-woman" :style='index==1?"display: flex;":"display: none;"'>
				<view class="body-img">
					<image src="../../static/images/shops/woman.png" mode="widthFix" class="m-body-img"></image>
					<text>女士专区</text>
				</view>
				
				<view class="m-body-row">
					<view class="body-li" @click="toStPane('女士','休闲鞋')">
						<image src="../../static/images/shops/woman_xx.png" mode="widthFix" class="body-li-img"></image>
						<text>休闲鞋</text>
					</view>
					
					<view class="body-li" @click="toStPane('女士','运动鞋')">
						<image src="../../static/images/shops/woman_yd.png" mode="widthFix" class="body-li-img"></image>
						<text>运动鞋</text>
					</view>
				</view>
				
				<view class="m-body-row">
					<view class="body-li" @click="toStPane('女士','高跟鞋')">
						<image src="../../static/images/shops/woman_gg.png" mode="widthFix" class="body-li-img"></image>
						<text>高跟鞋</text>
					</view>
					
					<view class="body-li" @click="toStPane('女士','马丁靴')">
						<image src="../../static/images/shops/woman_md.png" mode="widthFix" class="body-li-img"></image>
						<text>马丁靴</text>
					</view>
				</view>
				
				<view class="m-body-row">
					<view class="body-li" @click="toStPane('女士','单鞋')">
						<image src="../../static/images/shops/woman_dx.png" mode="widthFix" class="body-li-img"></image>
						<text>单鞋</text>
					</view>
					
					<view class="body-li" @click="toStPane('女士','凉鞋')">
						<image src="../../static/images/shops/woman_lx.png" mode="widthFix" class="body-li-img"></image>
						<text>凉鞋</text>
					</view>
				</view>
			</view>
			
			<view class="m-body" id="m-body-woman" :style='index==2?"display: flex;":"display: none;"'>
				<view class="body-img">
					<image src="../../static/images/shops/child.png" mode="widthFix" class="m-body-img"></image>
					<text>儿童专区</text>
				</view>
				
				<view class="m-body-row">
					<view class="body-li" @click="toStPane('儿童','休闲鞋')">
						<image src="../../static/images/shops/child_xx.png" mode="widthFix" class="body-li-img"></image>
						<text>休闲鞋</text>
					</view>
					
					<view class="body-li" @click="toStPane('儿童','帆布鞋')">
						<image src="../../static/images/shops/child_fb.png" mode="widthFix" class="body-li-img"></image>
						<text>帆布鞋</text>
					</view>
				</view>
				
				<view class="m-body-row">
					<view class="body-li" @click="toStPane('儿童','公主鞋')">
						<image src="../../static/images/shops/child_gz.png" mode="widthFix" class="body-li-img"></image>
						<text>公主鞋</text>
					</view>
					
					<view class="body-li" @click="toStPane('儿童','雨靴')">
						<image src="../../static/images/shops/child_yx.png" mode="widthFix" class="body-li-img"></image>
						<text>雨靴</text>
					</view>
				</view>
				
				<view class="m-body-row">
					<view class="body-li" @click="toStPane('儿童','棉鞋')">
						<image src="../../static/images/shops/child_mx.png" mode="widthFix" class="body-li-img"></image>
						<text>棉鞋</text>
					</view>
					
					<view class="body-li" @click="toStPane('儿童','凉鞋')">
						<image src="../../static/images/shops/child_lx.png" mode="widthFix" class="body-li-img"></image>
						<text>凉鞋</text>
					</view>
				</view>
			</view>
			
			<view class="m-body" id="m-body-woman" :style='index==3?"display: flex;":"display: none;"'>
				<view class="body-img">
					<image src="../../static/images/shops/old.png" mode="widthFix" class="m-body-img"></image>
					<text>老人专区</text>
				</view>
				
				<view class="m-body-row">
					<view class="body-li" @click="toStPane('老人','休闲鞋')">
						<image src="../../static/images/shops/old_xx.png" mode="widthFix" class="body-li-img"></image>
						<text>休闲鞋</text>
					</view>
					
					<view class="body-li" @click="toStPane('老人','布鞋')">
						<image src="../../static/images/shops/old_bx.png" mode="widthFix" class="body-li-img"></image>
						<text>布鞋</text>
					</view>
				</view>
				
				<view class="m-body-row">
					<view class="body-li" @click="toStPane('老人','爸爸鞋')">
						<image src="../../static/images/shops/old_bb.png" mode="widthFix" class="body-li-img"></image>
						<text>爸爸鞋</text>
					</view>
					
					<view class="body-li" @click="toStPane('老人','妈妈鞋')">
						<image src="../../static/images/shops/old_mm.png" mode="widthFix" class="body-li-img"></image>
						<text>妈妈鞋</text>
					</view>
				</view>
				
				<view class="m-body-row">
					<view class="body-li" @click="toStPane('老人','棉鞋')">
						<image src="../../static/images/shops/old_mx.png" mode="widthFix" class="body-li-img"></image>
						<text>棉鞋</text>
					</view>
					
					<view class="body-li" @click="toStPane('老人','凉鞋')">
						<image src="../../static/images/shops/old_lx.png" mode="widthFix" class="body-li-img"></image>
						<text>凉鞋</text>
					</view>
				</view>
			</view>
			
			<view class="m-body" id="m-body-woman" :style='index==4?"display: flex;":"display: none;"'>
				<view class="body-img">
					<image src="../../static/images/shops/pregnant.png" mode="widthFix" class="m-body-img"></image>
					<text>孕妇专区</text>
				</view>
				
				<view class="m-body-row">
					<view class="body-li" @click="toStPane('孕妇','月子鞋')">
						<image src="../../static/images/shops/pregnant_yz.png" mode="widthFix" class="body-li-img"></image>
						<text>月子鞋</text>
					</view>
					
					<view class="body-li" @click="toStPane('孕妇','单鞋')">
						<image src="../../static/images/shops/pregnant_dx.png" mode="widthFix" class="body-li-img"></image>
						<text>单鞋</text>
					</view>
				</view>
				
				<view class="m-body-row">
					<view class="body-li" @click="toStPane('孕妇','豆豆鞋')">
						<image src="../../static/images/shops/pregnant_doud.png" mode="widthFix" class="body-li-img"></image>
						<text>豆豆鞋</text>
					</view>
					
					<view class="body-li" @click="toStPane('孕妇','平底鞋')">
						<image src="../../static/images/shops/pregnant_pd.png" mode="widthFix" class="body-li-img"></image>
						<text>平底鞋</text>
					</view>
				</view>
				
				<view class="m-body-row">
					<view class="body-li" @click="toStPane('孕妇','洞洞鞋')">
						<image src="../../static/images/shops/pregnant_dongd.png" mode="widthFix" class="body-li-img"></image>
						<text>洞洞鞋</text>
					</view>
					 
					<view class="body-li" @click="toStPane('孕妇','毛毛鞋')">
						<image src="../../static/images/shops/pregnant_mm.png" mode="widthFix" class="body-li-img"></image>
						<text>毛毛鞋</text> 
					</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				index:0
			}
		
		},
		methods:{
			cgPane(idx){
				console.log(this.$data.index)
				this.$data.index=idx;
			},
			toStPane(peopleType,shoeType){
				var data={
					person:peopleType,
					shoes:shoeType
				}
				var strdata=JSON.stringify(data);
				//if(peopleType!="老人"&&peopleType!="孕妇") return;
				uni.navigateTo({
				  url: './stPane/stPane?id='+strdata,
				  events: {
				    // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
				    acceptDataFromOpenedPage: function(data) {
				      console.log(data)
				    },
				    someEvent: function(data) {
				      console.log(data)
				    }
				  },
				  success: function(res) {
				    // 通过eventChannel向被打开页面传送数据
				    res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
					console.log(res);
				  },
				  fail:function(res){
					  console.log(res);
				  }
				});
			}

		},
		
	}
	
</script>

<style>
	.m-header{
		position: fixed;
		width: 750rpx;
		height:auto;
		top:-102rpx;
		background-size: contain;
	}
	.m-shader{
		width: 100%;
		height: 500rpx;
		background-color: #686868;
		opacity: 20%;
		position: fixed;
		top:0;
	}
	.g-main{
		position: fixed;
		top:328rpx;
		bottom: 0rpx; 
		width: 750rpx;
		height:auto;
		border-radius: 40rpx;
		background-color:#FFFFFF;
		overflow: hidden;
		display: flex;
	}
	.m-tab{
		width:216rpx;
		height:100%;
		background-color: #DADADA;
		font-size: 30rpx;
		display: flex;
		flex-direction: column;
	}
	.tab-li{
		width: 100%;
		height:98rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.li-st{
		background-color: #FFFFFF;
	}
	.m-body{
		width:534rpx;
		height:100%;
		padding-top: 30rpx;
		display: none;
		flex-direction: column;
		align-items: center;
	}
	.m-body-img{
		width: 60rpx;
		height:60rpx;
		margin-bottom: 10rpx;
	}
	.body-img{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.m-body-row{
		display: flex;
		justify-content: space-between;
		padding:0 40rpx;
		width: 454rpx;
	}
	.body-li{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.body-li-img{
		width: 200rpx;
		height:192rpx;
	}
</style>
