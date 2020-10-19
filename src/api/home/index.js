import request from '@utils/http'

/**首页数据请求 */

export function getHomeShopList(params){
   return request.get('/homefis/getNews',params)
}