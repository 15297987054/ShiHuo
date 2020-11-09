import Mock from 'mockjs'

Mock.mock("/discount/navdata",{
    "list|5":[{
        'img':Mock.Random.image('200x200','#FFFFFF',Mock.Random.color(),'@ctitle(1)'),
        'text':'@ctitle(2)'
    }]
})

Mock.mock('/discount/brand',{
    "list|6":[{
        "bgimg":Mock.Random.image('200x200',Mock.Random.color(),Mock.Random.color(),''),
        'img':Mock.Random.image('200x200',Mock.Random.color(),Mock.Random.color(),'@ctitle(1)'),
        'text':'@ctitle(1)',
        'count':Mock.Random.float(4,8,1,1)
    }]
})