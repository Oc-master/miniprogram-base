import './index.less';

Component({
  externalClasses: ['custom-class'],
  properties: {
    options: {
      type: Object,
      value: {
        isShowSkeleton: false,
        skeletonOptions: null,
        hasError: false,
      },
    },
  },
  data: {
    isIPhoneX: false,
  },
  attached() {
    const isIPhoneX = this.checkModelInfo();
    this.setData({ isIPhoneX });
  },
  methods: {
    /**
     * 判断用户机型是否是 iPhoneX 或之后生产的机型
     */
    checkModelInfo() {
      /** 首先获取缓存当中 isIPhoneX 字段 */
      const isIPhoneX = wx.getStorageSync('isIPhoneX');
      const isBoolean = typeof isIPhoneX === 'boolean';
      if (isBoolean) return isIPhoneX;
      /** 未获取到 isIPhoneX 字段 */
      const { model, screenHeight } = wx.getSystemInfoSync();
      const isIPhone = model.includes('iPhone');
      if (!isIPhone) {
        wx.setStorageSync('isIPhoneX', false);
        return false;
      }
      const hasIPhoneX = model.includes('iPhone X');
      /** iPhoneX 之后生产的机型屏幕高度大于 812 */
      const isHigh = screenHeight >= 812;
      if (hasIPhoneX || isHigh) {
        wx.setStorageSync('isIPhoneX', true);
        return true;
      }
      /** 以上两个条件都不满足的情况下判定为 iPhoneX 之前生产的机型 */
      wx.setStorageSync('isIPhoneX', false);
      return false;
    },
  },
});
