import Page from '@/utils/base';

import './index.less';

Page({
  data: {
    isError: true,
  },
  onLoad() {
    /** 模拟加载异步数据场景 */
    new Promise((resolve, reject) => {
      const { isError } = this.data;
      if (isError) {
        this.setData({ isError: false });
        return setTimeout(() => reject(), 0);
      }
      return setTimeout(() => resolve(), 2000);
    })
      .then(() => {
        /** 业务逻辑处理完毕后，调用 hideSkeleton 函数可以关闭骨架屏组件 */
        this.hideSkeleton();
      })
      .catch(() => {
        /** 业务逻辑出现异常时，调用 errorHandle 函数可以打开错误通用提示页面 */
        this.errorHandle();
      });
  },
});
