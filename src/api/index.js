/**
 * Created by Administrator on 2019/1/2.
 */
import ajax from './ajax'


// 请求首页数据
export const reqMsiteData = () => ajax('/home');   //   /home是请求路径
//
export const reqSearchData = ()=> ajax('/classify')
//第二屏分类
export const reqNavData = ()=> ajax('/fenlei')

// 第三屏，数据代理
//使用代理
//http://m.you.163.com/topic/v1/find/recManual.json
const BASE ='/api'
// 请求识物组件内Tab懒数据
export const reqTabs = ()=> ajax(BASE + '/find/recManual.json')
//第三屏导航（推荐、达人）
export const reqdaohang = () => ajax((BASE + 'find/getTabs.json'))

//第三屏home
// http://m.you.163.com/topic/v1/find/getTabData.json?page=1&size=5&tabId=6
export const reqhome = () => ajax(BASE +'find/getTabData.json?page=1&size=5&tabId=6' )
//第三屏  shangxin
//http://m.you.163.com/topic/v1/find/getTabData.json?page=1&size=5&tabId=5
export const reqshangxin = () => ajax(BASE + 'find/getTabData.json?page=1&size=5&tabId=5')
