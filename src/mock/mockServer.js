/**
 * Created by Administrator on 2019/1/2.
 */


import Mock from 'mockjs'
import shouye_data from './shouye_data.json'
import classify_data from './cateList.json'
import fenlei_data from './fenleidierping_data.json'

Mock.mock('/home',{
  code:0,
  data:shouye_data
});
Mock.mock( '/classify', {
  code: 0,
  data: classify_data
});

//第二屏分类
Mock.mock( '/fenlei', {
  code: 0,
  data: fenlei_data
});
