
  ;(function(){
  let u=void 0,isReady=false,onReadyCallbacks=[],isServiceReady=false,onServiceReadyCallbacks=[];
  const __uniConfig = {"pages":[],"globalStyle":{"backgroundColor":"#F5F5F5","background":"#efeff4","navigationBar":{"backgroundColor":"#fdfdfd","titleColor":"#000000"}},"nvue":{"compiler":"uni-app","styleCompiler":"weex","flex-direction":"column"},"renderer":"auto","appname":"test1","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"compilerVersion":"3.2.9","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000},"tabBar":{"position":"bottom","color":"#000000","selectedColor":"#4797EB","borderStyle":"black","blurEffect":"none","fontSize":"10px","iconWidth":"24px","spacing":"3px","height":"50px","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","text":"首页","selectedIconPath":"/static/images/tabBar/selected/home.png","iconPath":"/static/images/tabBar/unselected/home.png"},{"pagePath":"pages/photograph/photograph","text":"拍照","selectedIconPath":"/static/images/tabBar/selected/photograph.png","iconPath":"/static/images/tabBar/unselected/photograph.png"},{"pagePath":"pages/shoes/shoes","text":"个人中心","selectedIconPath":"/static/images/tabBar/selected/shoes.png","iconPath":"/static/images/tabBar/unselected/shoes.png"}],"selectedIndex":0,"shown":true},"locales":{}};
  const __uniRoutes = [{"path":"pages/index/index","meta":{"isQuit":true,"isEntry":true,"isTabBar":true,"tabBarIndex":0,"navigationBar":{"backgroundColor":"#4797EB","style":"custom","titleColor":"#ffffff"}}},{"path":"pages/photograph/photograph","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":1,"navigationBar":{"backgroundColor":"#4797EB","titleText":"测量尺寸","titleColor":"#ffffff"}}},{"path":"pages/shoes/shoes","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":2,"navigationBar":{"backgroundColor":"#4797EB","titleText":"个人中心","titleColor":"#ffffff"}}},{"path":"pages/shoes/myAddress/myAddress","meta":{"navigationBar":{"titleText":"我的地址"}}}].map(uniRoute=>(uniRoute.meta.route=uniRoute.path,__uniConfig.pages.push(uniRoute.path),uniRoute.path='/'+uniRoute.path,uniRoute));
  __uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  __uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:u,window:u,document:u,frames:u,self:u,location:u,navigator:u,localStorage:u,history:u,Caches:u,screen:u,alert:u,confirm:u,prompt:u,fetch:u,XMLHttpRequest:u,WebSocket:u,webkit:u,print:u}}}}); 
  })();
  