import { getInstance } from '@/utils/util';

import './index.less';

Component({
  methods: {
    onReload() {
      const context = getInstance();
      if (context.onLoad) {
        const { options } = context;
        context.onLoad(options);
      }
    },
  },
});
