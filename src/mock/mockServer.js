/**
 * Created by Administrator on 2019/1/2.
 */


import Mock from 'mock'
import shouye_data from './shouye_data.json'

Mock.mock('/home',{
  code:0,
  data:shouye_data
})
