
import {REQMSITEDATA,REQSEARCHDATA,REQNAVDATA,REQTABS,REQDAOHANG,REQHOME,REQSHANGXIN} from './mutation-types'

export default {
  [REQMSITEDATA](state,{headList}){
    // console.log(headerList);
    state.headerList = headList
  },
  [REQSEARCHDATA](state,{searchList}){
    state.searchList = searchList
  },
  [REQNAVDATA](state,{nav}){
    state.nav = nav
  },

  [REQTABS](state,{tabs}){
    state.tabs = tabs
  },

  [REQDAOHANG](state,{daohang}){
    state.daohang = daohang
  },
  [REQHOME](state,{home}){
    state.home = home
  },
  [REQSHANGXIN](state,{shangxin}){
    state.shangxin = shangxin
  }
}
