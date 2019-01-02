/**
 * Created by Administrator on 2019/1/2.
 */
import ajax from 'ajax'


// 请求首页数据
export const reqMsiteData = () => ajax('/home');   //   /home是请求路径
