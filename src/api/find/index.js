import request from '@utils/http'

export  function getCommentList(params) {
    return request.get('/find/mobileList',params)
}