import './index.less';

Component({
  methods: {
    onReload() {
      const context = getCurrentPages().pop();
      if (context.onLoad) {
        const { options } = context;
        context.onLoad(options);
      }
    },
  },
});
