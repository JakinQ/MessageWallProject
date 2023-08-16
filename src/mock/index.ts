import Mock from 'mockjs';

// 使留言墙数据
export const note = Mock.mock('/api/common', 'get', {
    code: 200,
    message: '请求成功',
    //获得奇数个data
    'data|10-20': [
        {
            'id|+1': 1, // 自增id
            'userId|+1': 1, // 自增id
            "name": '@cname', // 随机生成姓名
            //生成随机段落
            "content": '@cparagraph(1, 3)',
            "moment": '@datetime',

            "label|0-10": 0,
            "like|0-100": 0,
            "comment|0-40": 0,
            // imgUrl: "@image('200x100', '#50B347', '#FFF', 'Mock.js')", // 照片墙随机生成图片
            "backgroundColor|0-5": 0, // 留言墙随机生成颜色
            //是否撤销
            "isRepeal|0-20": 0,
            //是否被举报
            "isReport|0-20": 0,
            "type": 0
        }
    ]
});
// Mock.mock('/api/common', 'get', {
//     code: 200,
//     message: '请求成功',
//     //获得奇数个data
//     'data|10-20': [
//         {
//             'id|+1': 1, // 自增id
//             'userId|+1': 1, // 自增id
//             "name": '@name', // 随机生成姓名
//             //生成随机段落
//             "content": '@cparagraph(1, 3)',
//             "moment": '@datetime', // 随机生成日期时间
//             "label|0-10": 0,
//             "like|0-100": 0,
//             "comment|0-40": 0,
//             // imgUrl: "@image('200x100', '#50B347', '#FFF', 'Mock.js')", // 照片墙随机生成图片
//             backgroundColor: "@color", // 留言墙随机生成颜色
//             //是否撤销
//             "isRepeal|0-20": 0,
//             //是否被举报
//             "isReport|0-20": 0,
//         }
//     ]
// });