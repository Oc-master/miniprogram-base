import '@/styles/index.less';

App({
  onLaunch() {
    // 第一次打开
    console.info('App onLaunch');
  },
  onShow() {
    // 切入前台
    console.log('App onShow');
  },
  onHide() {
    // 切出至后台
    console.log('App onHide');
  },
  globalData: {},
});
