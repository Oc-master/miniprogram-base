function beforeOnLoad() {
  const { isNeedSkeleton } = this.config;
  if (!isNeedSkeleton) return undefined;
  /** 设置骨架屏样式并展示 */
  const { isNeedLoading, skeletonType } = this.config;
  this.setData({ '$page.skeletonOptions': { isNeedLoading, type: skeletonType } });
  this.showSkeleton();
}

function errorHandle() {
  this.hideSkeleton();
  this.showErrorPage();
}

export default (params = {}) => {
  const DEFAULT_PARAMS = {
    config: {
      isNeedSkeleton: true,
      isNeedLoading: true,
      skeletonType: 'cube',
    },
    data: {
      $page: {
        isShowSkeleton: false,
        skeletonOptions: null,
        hasError: false,
      },
    },
    showSkeleton() {
      this.setData({ '$page.isShowSkeleton': true });
    },
    hideSkeleton() {
      this.setData({ '$page.isShowSkeleton': false });
    },
    showErrorPage() {
      this.setData({ '$page.hasError': true });
    },
    hideErrorPage() {
      this.setData({ '$page.hasError': false });
    },
  };
  const { config = {}, data = {} } = params;
  return Page({
    ...DEFAULT_PARAMS,
    ...params,
    config: {
      ...DEFAULT_PARAMS.config,
      ...config,
    },
    data: {
      ...DEFAULT_PARAMS.data,
      ...data,
    },
    onLoad(options = {}) {
      beforeOnLoad.call(this);
      if (!params.onLoad) {
        this.hideSkeleton();
        return undefined;
      }
      try {
        const query = mc.decoding(options);
        params.onLoad.call(this, query);
      } catch (error) {
        errorHandle.call(this);
      }
    },
  });
};
