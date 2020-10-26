import './index.less';

Component({
  properties: {
    options: {
      type: Object,
      value: {
        isShowSkeleton: false,
        skeletonOptions: null,
      },
    },
  },
  externalClasses: ['custom-class'],
});
