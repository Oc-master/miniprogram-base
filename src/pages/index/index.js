import './index.less';

Page({
  data: {
    isShowDialog: false,
    dialog: {
      title: '',
      content: '',
    },
  },
  onClick(e) {
    const dicts = {
      host: {
        title: '域名 hosts',
      },
      route: {
        title: '路由 routes',
      },
    };
    const { type } = e.target.dataset;
    const { title } = dicts[type];
    this.setData({
      isShowDialog: true,
      dialog: { title },
    });
  },
});
