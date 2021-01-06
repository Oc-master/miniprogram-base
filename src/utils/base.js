import { getInstance } from '@/utils/util';

function beforeOnLoad() {
  /** 重置 ErrorPage 的状态 */
  this.hideErrorPage();
  const { isNeedSkeleton } = this.config;
  if (!isNeedSkeleton) return undefined;
  this.showSkeleton();
}

export default (params = {}) => {
  const DEFAULT_PARAMS = {
    config: {
      isNeedSkeleton: true,
    },
    data: {
      $page: {
        hasError: false,
        isShowSkeleton: false,
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
    errorHandle() {
      this.hideSkeleton();
      this.showErrorPage();
    },
    /** 触发上一页面 onLoad 生命周期 */
    reloadPrePage() {
      const context = getInstance(2);
      const { options } = context;
      context.onLoad(options);
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
        const { isMedusaRouter = '' } = options;
        if (isMedusaRouter) {
          const query = ms.decoding(options);
          params.onLoad.call(this, query);
        } else {
          params.onLoad.call(this, options);
        }
      } catch (error) {
        this.errorHandle();
        throw new Error(error);
      }
    },
  });
};
