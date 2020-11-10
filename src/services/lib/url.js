/*
 * @Description: 
 * @Version: 2.0
 * @Autor: huangfu
 * @Date: 2020-11-10 11:06:54
 * @LastEditors: huangfu
 * @LastEditTime: 2020-11-10 13:46:53
 */
/*
 * 地址
 * */
let rootUrl=process.env.VUE_APP_BASEURL;
console.log(process.env);
export const testUrl=()=>(`${rootUrl}/v1/token/`);