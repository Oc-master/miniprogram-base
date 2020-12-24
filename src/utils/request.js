const DEFAULT_LOADING_OPTIONS = {
  isShow: false,
  text: 'loading...',
};

const DEFAULT_TOAST_OPTIONS = {
  isShow: false,
  text: '服务器开小差了哦',
};

/**
 * Request 请求功能类
 * @param {String} baseUrl API 地址通用部分字符串
 * @param {Boolean} isFilterRes 是否过滤请求返回的数据结构 true: 只返回开发者服务器的数据
 */
class Request {
  constructor({ baseUrl = '', isFilterRes = true } = {}) {
    this.baseUrl = baseUrl;
    this.isFilterRes = isFilterRes;
  }

  /**
   * 请求方法
   * @param {Object} options 支持原生 request 方法左右参数，具体请参阅官方 API 文档
   * @param {Object} loadingOps 附加参数，用来支持加载时显示loading功能
   * @param {Object} toastOps 附加参数，用来支持发生错误时提供错误提示功能
   */
  request(options) {
    const {
      url, method = 'GET', loadingOps = {}, toastOps = {},
    } = options;
    if (!url) {
      // eslint-disable-next-line no-console
      console.error('Request: url 为请求函数必填字段!');
      return undefined;
    }
    const upperMethod = method.toUpperCase();
    const loadingOptions = {
      ...DEFAULT_LOADING_OPTIONS,
      ...loadingOps,
    };
    const toastOptions = {
      ...DEFAULT_TOAST_OPTIONS,
      ...toastOps,
    };
    // eslint-disable-next-line consistent-return
    return new Promise((resolve) => {
      if (loadingOptions.isShow) {
        wx.showToast({
          title: loadingOptions.text,
          icon: 'loading',
          duration: 60000,
          mask: true,
        });
      }
      wx.request({
        ...options,
        url: `${this.baseUrl}${url}`,
        method: upperMethod,
        success: (res) => {
          const { data: resData, statusCode } = res;
          /** 验证服务器响应是否异常 */
          const isError = (/^(4|5)[0-9][0-9]$/).test(statusCode);
          if (!isError) {
            this.isFilterRes ? resolve([null, resData]) : resolve([null, res]);
            return undefined;
          }
          const { msg, message } = resData;
          if (toastOptions.isShow) {
            setTimeout(() => {
              wx.showToast({
                title: msg || message || toastOptions.text,
                mask: true,
                icon: 'none',
              });
            }, 0);
          }
          this.isFilterRes ? resolve([resData, null]) : resolve([res, null]);
        },
        fail: (err = {}) => {
          try {
            const { msg, message } = err;
            if (toastOptions.isShow) {
              setTimeout(() => {
                wx.showToast({
                  title: msg || message || toastOptions.text,
                  mask: true,
                  icon: 'none',
                });
              }, 0);
            }
            resolve([err, null]);
          } catch (e) {
            resolve([err, null]);
          }
        },
        complete: () => {
          loadingOptions.isShow && wx.hideToast();
        },
      });
    });
  }
}

module.exports = Request;
