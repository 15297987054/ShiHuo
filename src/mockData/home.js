import Mock from 'mockjs'


Mock.mock('/ad_swiper/data', {
    'list|4': [{
        'img':  Mock.Random.image('200x200',Mock.Random.color(),Mock.Random.color(), '@ctitle(1)'),
        'title':'@ctitle(5,10)',
        'nowPrice':Mock.Random.integer(500,800),
        'count':Mock.Random.float(4,8,1,1),
        'oldPrice':Mock.Random.integer(1000,1500)
    }]
})

Mock.mock('/home/middle/nav/data',{
    'list|6':[{
        'id|+1':1,
        'title':'@ctitle(2)',
        'subtitle':'@ctitle(5,10)',
        'img':Mock.Random.image('100x100',Mock.Random.color(),Mock.Random.color(),'@ctitle(1)')
    }]
})

Mock.mock('/home/three',{
    'list|3':[{
        'title':'@ctitle(3)',
        'subtitle':'@ctitle(3,5)',
        'img':Mock.Random.image('200x200',Mock.Random.color(),Mock.Random.color(),'@ctitle(1)')
    }]
})

Mock.mock('/home/hot',{
    'list|6':[{
        'img':Mock.Random.image('300x300',Mock.Random.color(),Mock.Random.color(),'@ctitle(2)'),
        'title':'@ctitle(10,20)',
        'subtitle':'@ctitle(20)'
    }]
})