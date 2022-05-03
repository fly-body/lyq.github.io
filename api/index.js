let Mock = require('mockjs')

let random = Mock.Random;

module.exports = () => {
    let data = {
        menuList:{
            status: 200,
            msg: "数据请求成功",
            list: [
                {
                    id: '101',
                    authName: '管理员管理',
                    path: '/admin',
                    children:[
                        {
                            id: '111',
                            authName: '账号查封管理',
                            path: 'admin/seal'
                        },
                        {
                            id: '121',
                            authName: '借阅逾期管理',
                            path: 'admin/overtime'
                        },
                        {
                            id: '131',
                            authName: '欠费管理',
                            path: 'admin/arrears'
                        },
                        {
                            id: '141',
                            authName: '权限管理',
                            path:'admin/order'
                        }
                    ]
                },
                {
                    id: '201',
                    authName: '用户管理',
                    path: '/user',
                    children:[
                        {
                            id: '211',
                            authName: '用户信息管理',
                            path: 'user/info'
                        },
                        {
                            id: '221',
                            authName: '借阅管理',
                            path: 'user/borrow'
                        },
                        {
                            id: '231',
                            authName: '用户笔记管理',
                            path: 'user/note'
                        }
                    ]
                },
                {
                    id: '301',
                    authName: '图书分类管理',
                    path: '/category',
                    children:[
                        {
                            id: '311',
                            authName: '图书上架管理',
                            path: 'category/ground'
                        },
                        {
                            id: '321',
                            authName: '图书评分管理',
                            path: 'category/score'
                        },
                        {
                            id: '331',
                            authName: '图书信息管理',
                            path: 'category/info'
                        },
                    ]
                },
                {
                    id: '401',
                    authName: '数据报表',
                    path: '/data',
                    children:[
                        {
                            id: '411',
                            authName: '图书信息统计图',
                            path: 'data/index'
                        },
                    ]
                }
            ],
            iconsObj: {
                101: 'iconfont icon-guanliyuan',
                201: 'iconfont icon-yonghu',
                301: 'iconfont icon-fenlei',
                401: 'iconfont icon-shujubaobiao',
            },
        },
        admin:[
            
        ]
    }
    return data
}