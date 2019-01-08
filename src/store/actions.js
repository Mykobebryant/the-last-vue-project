/**
 * 接收ajax发送过来的请求
 */

import {reqMsiteData,reqSearchData,reqNavData,reqTabs,reqdaohang,reqhome,reqshangxin} from '../api'
import {REQMSITEDATA,REQSEARCHDATA,REQNAVDATA,REQTABS,REQDAOHANG,REQHOME,REQSHANGXIN} from './mutation-types'


export default {
  //异步获取列表数据
  async getheaderList({commit}){
    //1 .发送ajax请求
    const result = await reqMsiteData()
    // 2.有了结果之后交给mutation
    if (result.code === 0){
      const headList = result.data
      // console.log(headList)
      commit(REQMSITEDATA,{headList})
    }
  },
  async getsearchList({commit}){
    //1 .发送ajax请求
    const result = await reqSearchData()
    // 2.有了结果之后交给mutation
    if (result.code === 0){
      const searchList = result.data
      // console.log(searchList)
      commit(REQSEARCHDATA,{searchList})
    }
  },
  async getNavList({commit}){
    //1 .发送ajax请求
    const result = await reqNavData()
    // 2.有了结果之后交给mutation
    if (result.code === 0){
      const nav = result.data
      // console.log(nav)
      commit(REQNAVDATA,{nav})
    }
  },
  async getTabs({commit}){
    //1 .发送ajax请求
    const result = await reqTabs()
    // 2.有了结果之后交给mutation
    if (result.code === '200'){
      const tabs = result.data
      // console.log(tabs)
      commit(REQTABS,{tabs})
    }
  },
  async getdaohang({commit}, cb){
    //1 .发送ajax请求
    const result = await reqdaohang()
    // 2.有了结果之后交给mutation
    if (result.code === '200'){
      const daohang = result.data

      commit(REQDAOHANG,{daohang})
    }
    typeof cb === 'function' && cb()
  },
  async gethome({commit}){
    //1 .发送ajax请求
    const result = await reqhome()
    // 2.有了结果之后交给mutation
    if (result.code === '200'){
      const home = result.data
      commit(REQHOME,{home})
    }
  },
  async getshangxin({commit}){
    //1 .发送ajax请求
    const result = await reqshangxin()
    // 2.有了结果之后交给mutation
    if (result.code === '200'){
      const shangxin = result.data
      console.log(shangxin);
      commit(REQSHANGXIN,{shangxin})
    }
  }
}

