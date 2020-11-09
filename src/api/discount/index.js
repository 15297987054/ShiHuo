import request from '@utils/http'

/**优惠页面获取商品列表接口 */
export function discountData(params){
    return request.get('/youhui/list',params)
}