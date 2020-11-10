/*
 * @Description: 
 * @Version: 2.0
 * @Autor: huangfu
 * @Date: 2020-11-10 11:06:36
 * @LastEditors: huangfu
 * @LastEditTime: 2020-11-10 14:01:17
 */
/*
 * 模块服务
 * httpClient 传参方式 _data_ 与 _auth_ 为指定字段名称 禁止其他使用
 * 当接口需要变更认证等级时，使用{_data_:{as:2},_auth_:"level_2"} 格式传参
 * */
import httpClient from "./lib/httpClient"
//接口地址
 import {
    testUrl
} from "./lib/url"

export default {

    fLoginService:(data)=>{
       return httpClient.post(testUrl(),{_data_:data,_auth_:"level_1"});
    },
    // fTestService2:()=>{
    //    return httpClient.get(testUrl(),{params:{_data_:{id:2}}});
    // },
    // fTestService3:()=>{
    //     return httpClient.delete(testUrl(),{params:{_data_:{id:2}}});
    // },
}