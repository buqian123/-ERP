
const install = (Vue, vm) => {
  // 将各个定义的接口名称，统一放进对象挂载到this.$u.api下
  vm.$u.api = { 
    // 登录
    login: (params = {}) => vm.$u.post('/login', params),
    // 获取企业微信接口配置
    getJwx: (params = {}) => vm.$u.get('/getJsSDKSha1', params),
    // 根据 状态 查询客户
    queryCustomerByStatus: (params = {}) => vm.$u.get('/sysCustomer/queryCustomerByStatus', params),
    // 转客户
    changeCusStatus: (params = {}) => vm.$u.put(`/sysCustomer/update/customer/status?id=${params.id}&status=${params.status}`),
    // 新建客户
    addCustomer: (params = {}) => vm.$u.post('/sysCustomer/insertSysCustomer', params),
    // 修改客户状态
    editCusStatus: (params = {}) => vm.$u.put(`/sysCustomer/update/customer/status?id=${params.id}&status=${params.status}`),
    // 删除客户
    delCustomer: (params = {}) => vm.$u.delete('/sysCustomer/delSysCustomerById/' + params.id),
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
    getCusImportInfoAll: (params = {}) => vm.$u.get('/keyMessage/queryAllByLimit', params),
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
    // 删除需求
    delDemand: (params = {}) => vm.$u.delete('/sysDemand/delSysDemandById/' + params.id),
    // 查询客户需求
    getCusDemand: (params = {}) => vm.$u.get('/sysDemand/query/customer/demand', params),
    // 查询指定的需求信息
    getDemandInfoById: (params = {}) => vm.$u.get('/sysDemand/queryById', params),
    // 修改需求信息
    editDemandInfo: (params = {}) => vm.$u.put('/sysDemand/setSysDemand', params),
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
    // 分页查询收退款数据（客户/需求）
    getCollect: (params = {}) => vm.$u.get('/sysMoney/queryAllByLimit', params),
    // 根据收付款id获取 此条数据信息
    getCollectById: (params = {}) => vm.$u.get('/sysMoney/queryById', params),
    // 修改收付款
    editTransact: (params = {}) => vm.$u.put('/sysMoney/setSysMoney', params),
    // 新增服务单
    addService: (params = {}) => vm.$u.post('/serviceSingle/insertServiceSingle', params),
    // 修改服务单
    editService: (params = {}) => vm.$u.put('/serviceSingle/setServiceSingle', params),
    // 分页查询 客户/需求 服务单信息（包括需求和关键信息）
    getService: (params = {}) => vm.$u.get('/serviceSingle/query/customer/serviceBach', params),
    // 通过服务单id查询服务单信息
    getServiceInfo: (params = {}) => vm.$u.get('/serviceSingle/queryById', params),
    // 获取各类型的选项列表
    getOptionList: (params = {}) => vm.$u.get('/optionConfig/queryAllByStatus', params),
    // 新增去服务信息
    addToService: (params = {}) => vm.$u.post('/serviceInformation/insertServiceInformation', params),
    // 删除服务单
    delService: (params = {}) => vm.$u.delete('/serviceInformation/delServiceInformationById/' + params.id),
    // 查询该服务单的所有去服务记录
    getToServiceAll: (params = {}) => vm.$u.get('/serviceInformation/query/allByServiceId', params),
    // 服务单中查看客户资料
    getServiceAndCusInfo: (params = {}) => vm.$u.get('/sysCustomer/query/customer/demandKeyAndSign', params)
  }
}

export default {
  install
}