import Mock from 'mockjs'

Mock.mock('/data', {
    'list|8': [{
        'name': '@city',
        'number|1-100': 1
    }]
})

Mock.mock('/ad_swiper/data', {
    'list': [{
        'img':  Mock.Random.image('200x200',Mock.Random.color(),Mock.Random.color(), '@ctitle(1)'),
        'title':'@ctitle(5,10)',
        'nowPrice':Mock.Random.integer(500,800),
        'count':Mock.Random.integer(4,8),
        'oldPrice':Mock.Random.integer(1000,1500)
    }]
})