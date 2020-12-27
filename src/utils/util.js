/**
 * 防抖功能函数，常用于按钮点击类业务场景
 * @example
 *  import { debounce } from '@/utils/util';
 *  Page({
 *    onBtnClick: debounce(function() {
 *      ...
 *    }, 300);
 *  })
 * @param {Function} fn 需要防抖执行的函数
 * @param {Number} delay 防抖时间间隔
 */
export function debounce(fn, delay) {
  let timer = null;
  // eslint-disable-next-line func-names
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this), delay);
  };
}

export default {
  debounce,
};
