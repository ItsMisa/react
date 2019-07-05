/**
 * 一个loader将实现rdp的像素单位，依据于vw的响应式布局
 */
const loaderUtils = require('loader-utils');
const reg = /([\d.]+)rdp/g;
const defaultOptions = {
    size: 360
};
module.exports = function (source) {
    this.cacheable();
    const options = {
        ...defaultOptions,
        ...(loaderUtils.getOptions(this) || {})
    };
    return source.replace(reg, (_, number) => {
        const newNum = (number / (options.size / 100)).toFixed(5);
        return `${newNum}vw`;
    });
}