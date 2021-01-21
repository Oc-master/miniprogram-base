<template lang="pug">
  view.medusa-skeleton
    view.medusa-skeleton__container
      loading(vertical="{{ true }}" textColor="#111e36") loading....
</template>

<style lang="less">
  .medusa-skeleton {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    background: #fff;

    &__container {
      position: absolute;
      top: 33%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
</style>

<script>
  Component({});
</script>
