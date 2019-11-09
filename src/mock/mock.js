import Mock from 'mockjs'

Mock.mock('/api/list', ({ data }) => {
    console.log(data)
})