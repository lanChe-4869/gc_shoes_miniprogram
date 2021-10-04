<script>
	export default {
		onLaunch: function() {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	.container {
		font-size: 14px;
		width: 750rpx;
		height:100%;
		overflow-x: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		box-sizing: border-box;
	}
	h1{
	  font-size: 72rpx;
	}
	h2{
	  font-size:60rpx;
	}
	h3{
	  font-size:48rpx;
	}
	h4{
	  font-size:40rpx;
	}
	h5{
	  font-size:32rpx;
	}
	hr{
	  width:90%;
	}
	.fn-mgBt{
	  margin-bottom: 40rpx;
	}
	.fn-mgTop{
	  margin-top:40rpx;
	}
</style>
