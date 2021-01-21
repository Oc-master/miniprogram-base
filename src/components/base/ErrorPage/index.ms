<template lang="pug">
  view.medusa-error
    image.medusa-error__image(src="/assets/images/commons/common_error.png" mode="aspectFit")/
    view.medusa-error__tips 哎呀，出错了！
    view.medusa-error__button(bindtap="onReload") 重新加载
</template>

<style lang="less">
  .medusa-error {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background: #fff;

    &__image {
      width: 280px;
      height: 280px;
      margin: 160px 0 0 0;
    }

    &__tips {
      font-size: 50px;
      color: #676767;
    }

    &__button {
      padding: 0 20px;
      margin: 30px 0;
      font-size: 30px;
      line-height: 60px;
      color: #8a8a8a;
      text-align: center;
      border: 2px solid #8a8a8a;
      border-radius: 6px;
    }
  }
</style>

<script>
  import { getInstance } from '@/utils/util';

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
</script>
