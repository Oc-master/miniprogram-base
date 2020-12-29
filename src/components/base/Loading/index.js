import './index.less';

Component({
  properties: {
    type: {
      type: String,
      value: 'planet',
    },
    color: {
      type: String,
      value: '#c9c9c9',
    },
    size: {
      type: Number,
      value: 30,
    },
    textSize: {
      type: Number,
      value: 16,
    },
    vertical: {
      type: Boolean,
      value: false,
    },
  },
});
