<template lang="pug">
  view(
    class="medusa-loading {{ vertical ? 'medusa-loading--vertical' : '' }}"
    style="font-size: {{ size }}px;color: {{ color }};"
  )
    view(class="medusa-loading__{{ type }}")
    view.medusa-loading__text(style="font-size: {{ textSize }}px;color={{ textColor }};"): slot/
</template>

<style lang="less">
  .medusa-loading {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .medusa-loading__text {
    margin: 0 0 0 14px;
  }

  .medusa-loading--vertical {
    flex-direction: column;

    .medusa-loading__text {
      margin: 14px 0 0 0;
    }
  }

  .medusa-loading__planet {
    position: relative;
    width: 1.1em;
    height: 1.1em;
    border: 2px solid currentColor;
    border-radius: 50%;
    animation: 1s planet-load linear infinite;

    &::before {
      position: absolute;
      top: -10px;
      left: 50%;
      display: block;
      width: 0;
      height: 0;
      content: '';
      border: 10px solid currentColor;
      border-radius: 50%;
      opacity: 0.5;
    }
  }

  @keyframes planet-load {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .medusa-loading__wave {
    position: relative;
    width: 0.2em;
    height: 0.4em;
    background: currentColor;
    animation: wave-load 1s ease-in-out infinite;
    animation-delay: 0.4s;

    &::after,
    &::before {
      position: absolute;
      width: inherit;
      height: inherit;
      content: '';
      background: inherit;
      animation: inherit;
    }

    &::before {
      right: 0.5em;
      animation-delay: 0.2s;
    }

    &::after {
      left: 0.5em;
      animation-delay: 0.6s;
    }
  }

  @keyframes wave-load {
    0%,
    100% {
      box-shadow: 0 0 0 currentColor, 0 0 0 currentColor;
    }

    50% {
      box-shadow: 0 -0.2em 0 currentColor, 0 0.25em 0 currentColor;
    }
  }

  .medusa-loading__circular {
    position: relative;
    width: 0.7em;
    height: 0.7em;
    border: 0.1em solid transparent;
    border-top-color: currentColor;
    border-radius: 50%;
    animation: 1s circular-load linear infinite;

    &::before {
      position: absolute;
      top: -0.1em;
      left: -0.1em;
      display: block;
      width: inherit;
      height: inherit;
      content: '';
      border: 0.1em solid currentColor;
      border-radius: 50%;
      opacity: 0.5;
    }
  }

  @keyframes circular-load {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .medusa-loading__gradient::before,
  .medusa-loading__gradient::after,
  .medusa-loading__gradient {
    width: 0.9em;
    height: 0.9em;
    border-radius: 50%;
    animation: gradient-load 2.2s infinite ease-in-out;
    animation-fill-mode: both;
  }

  .medusa-loading__gradient {
    position: relative;
    top: -0.9em;
    color: currentColor;
    animation-delay: -0.16s;
  }

  .medusa-loading__gradient::before {
    right: 100%;
    animation-delay: -0.32s;
  }

  .medusa-loading__gradient::after {
    left: 100%;
  }

  .medusa-loading__gradient::before,
  .medusa-loading__gradient::after {
    position: absolute;
    top: 0;
    display: block;
    width: inherit;
    height: inherit;
    content: '';
  }

  @keyframes gradient-load {
    0%,
    80%,
    100% {
      box-shadow: 0 1em 0 -1em;
    }

    40% {
      box-shadow: 0 1em 0 -0.2em;
    }
  }
</style>

<script>
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
      textColor: {
        type: String,
        value: '',
      },
      vertical: {
        type: Boolean,
        value: false,
      },
    },
  });
</script>
