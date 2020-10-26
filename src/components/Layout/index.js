import './index.less';

Component({
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
  externalClasses: ['custom-class'],
});
