
const install = (Vue, vm) => {
  // 将各个定义的接口名称，统一放进对象挂载到this.$u.api下
  vm.$u.api = { 
    // 登录
    login: (params = {}) => vm.$u.post('/login', params),
    // 获取企业微信接口配置
    getJwx: (params = {}) => vm.$u.get('/getJsSDKSha1', params),
    // 根据 状态 查询客户
    queryCustomerByStatus: (params = {}) => vm.$u.get('/sysCustomer/queryCustomerByStatus', params),
    // 新建客户
    addCustomer: (params = {}) => vm.$u.post('/sysCustomer/insertSysCustomer', params),
    // 编辑客户信息
    editCustomer: (params = {}) => vm.$u.put('/sysCustomer/update/customer', params),
    // 删除关键信息
    delKeyInfo: (params = {}) => vm.$u.delete('keyMessage/delKeyMessageById/' + params.id),
    // 查询客户信息
    selectCusInfo: (params = {}) => vm.$u.get('/sysCustomer/queryById', params),
    // 新增跟进
    addFollow: (params = {}) => vm.$u.post('/sysFollow/insertSysFollow', params),
    // 删除上传文件
    delUploadFile: (params = {}) => vm.$u.delete('/fileDelete', params),
    // 通过客户id查询该客户的所有跟进记录
    getAllFollow: (params = {}) => vm.$u.get('/sysFollow/query/follow/record', params),
    // 查询全部关键信息
    getCusImportInfoAll: (params = {}) => vm.$u.get('/keyMessage/queryKeyMessageAll', params),
    // 查询指定客户的关键信息
    getCusImportInfoById: (params = {}) => vm.$u.get('/keyMessage/query/keyMessageById', params),
    // 新增客户关键信息
    addCusImportInfo: (params = {}) => vm.$u.post('/keyMessage/insertKeyMessage', params),
    // 删除关键信息
    delCusImportInfo: (params = {}) => vm.$u.delete('keyMessage/delKeyMessageById/' + params.id),
    // 查询介绍人
    getIntroducer: (params = {}) => vm.$u.get('/introducer/queryIntroducerAll', params),
    // 新增需求
    addDemand: (params = {}) => vm.$u.post('/sysDemand/insertSysDemand', params),
    // 查询客户需求
    getCusDemand: (params = {}) => vm.$u.get('/sysDemand/query/customer/demand', params),
    // 查询某个类型的所有日志
    // getAllLog: (params = {}) => vm.$u.post(`/openLog/query/allLogByFromId?fromId=${params.fromId}&type=${params.type}`, params.request)
    getAllLog: (params = {}) => vm.$u.get(`/openLog/query/allLogByFromId`, params),
    // 查询单条日志信息
    getLogDetail: (params = {}) => vm.$u.get(`/openLog/queryById`, params),
    // 查询具体需求信息
    getDemandInfoById: (params = {}) => vm.$u.get('/sysDemand/queryById', params),
    // 新增签单
    addSign: (params = {}) => vm.$u.post('/sysSign/insertSysSign', params),
    // 修改签单
    editSign: (params = {}) => vm.$u.put('/sysSign/setSysSign', params),
    // 获取签单列表
    getSignList: (params = {}) => vm.$u.get('/sysSign/query/customer/signBach', params),
    // 获取签单的具体信息
    getSignDetailInfo: (params = {}) => vm.$u.get('/sysSign/queryById', params),
    // 新增收付款
    addTransact: (params = {}) => vm.$u.post('/sysMoney/insertSysMoney', params),
    // 查询收款列表
    getCollect: (params = {}) => vm.$u.get('/sysMoney/queryAllByLimit', params),
    // 新增服务单
    addService: (params = {}) => vm.$u.post('/serviceSingle/insertServiceSingle', params),
    // 通过需求id分页查询该需求所有的服务
    getServiceByDemandId: (params = {}) => vm.$u.get('/serviceSingle/queryAllByLimit', params),
    // 通过客户id分页查询该客户所有的服务（包括需求和关键信息）
    getServiceByCusId: (params = {}) => vm.$u.get('/serviceSingle/query/customer/serviceBach', params),
    // 通过服务单id查询服务单信息
    getServiceInfo: (params = {}) => vm.$u.get('/serviceInformation/queryById', params),
  }
}

export default {
  install
}