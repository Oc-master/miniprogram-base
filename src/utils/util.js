/**
 * 防抖功能函数，常用于按钮点击类业务场景
 * @param {Function} fn 需要防抖执行的函数
 * @param {Number} delay 防抖时间间隔 默认值: 300 毫秒
 * @example
 * import { debounce } from '@/utils/util';
 * Page({
 *   onBtnClick: debounce(function() {
 *     ...
 *   }, 300);
 * });
 */
export function debounce(fn, delay = 300) {
  let timer = null;
  // eslint-disable-next-line func-names
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this), delay);
  };
}
/**
 * 获取页面实例
 * @param {Number} depth 路由栈的深度 默认值: 1（默认返回当前页面实例）
 */
export function getInstance(depth = 1) {
  const pages = getCurrentPages();
  const { length } = pages;
  return pages[length - depth];
}

export default {
  debounce,
  getInstance,
};
