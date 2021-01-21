<template lang="pug">
  view.medusa-layout(style="{{ isIPhoneX ? 'padding-bottom: 68rpx;' : '' }}")
    view.custom-class(hidden="{{ options.isShowSkeleton || options.hasError }}"): slot/
    skeleton(wx:if="{{ options.isShowSkeleton }}")/
    error-page(wx:if="{{ options.hasError }}")/
</template>

<style lang="less">
  .medusa-layout {
    position: relative;
    box-sizing: border-box;
    min-height: 100vh;
    overflow: hidden;
  }
</style>

<script>
  Component({
    externalClasses: ['custom-class'],
    properties: {
      options: {
        type: Object,
        value: {
          isShowSkeleton: false,
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
        const { model, screenHeight } = wx.getSystemInfoSync();
        const isIPhone = model.includes('iPhone');
        if (!isIPhone) {
          wx.setStorageSync('MS_IS_IPHONE_X', false);
          const isHigh = screenHeight > 667;
          isHigh ? wx.setStorageSync('MS_IS_HIGH', true) : wx.setStorageSync('MS_IS_HIGH', false);
          return false;
        }
        const isIPhoneX = model.includes('iPhone X');
        /** iPhoneX 之后生产的机型屏幕高度大于 812 */
        const isHigh = screenHeight >= 812;
        if (isIPhoneX || isHigh) {
          wx.setStorageSync('MS_IS_IPHONE_X', true);
          return true;
        }
        /** 以上两个条件都不满足的情况下判定为 iPhoneX 之前生产的机型 */
        wx.setStorageSync('MS_IS_IPHONE_X', false);
        return false;
      },
    },
  });
</script>
