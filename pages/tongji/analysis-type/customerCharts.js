// 客户&线索构成分析表
const constitute = {
  // 数据
  chartData: {
    series: [
      {
        data: [
          { name: '仅手机联系', value: 1},
          { name: '仅微信联系', value: 1},
          { name: '手机+微信', value: 0}
        ]
      }
    ]
  },
  // 表配置
  options: {
    color: ['#ACE36D', '#87A1FF', '#FC8C75', '#1890FF', '#EE6666'], // 主题颜色，16进制颜色值
    fontColor: '#666666', // 字体颜色
    dataLabel: false, // 标注
    title: { // 主标题
      name: '2',
      fontSize: 25
    },
    subtitle: { // 副标题
      name: '客户总数',
      fontSize: 15
    },
    legend: { // 图标配置
      show: true,
      position: 'bottom', // 位置
      float: 'center', // 分类位置
      icon: 'line', // 图标
      fontColor: '#666666',
      hiddenColor: '#CECECE', // 点击图例隐藏事 文字颜色
      itemGap: 20 // 图例间距
    },
    extra: { // 扩展配置
      ring: { // 圆环
        ringWidth: 30, // 宽度
        border: false, // 各分类直接的空隙--分割线
      }
    }
  }
}

const status = {
  chartData: {
    series: [
      {
        data: [
          { name: '跟进数', value: 10},
          { name: '签约数', value: 5},
          { name: '交付数', value: 2},
          { name: '流失数', value: 8}
        ]
      }
    ]
  },
  options: {
    color: ['#ACE36D', '#87A1FF', '#FC8C75', '#1890FF', '#EE6666'], // 主题颜色，16进制颜色值
    fontColor: '#666666', // 字体颜色
    dataLabel: false, // 标注
    title: { // 主标题
      name: '10',
      fontSize: 25
    },
    subtitle: { // 副标题
      name: '需求数',
      fontSize: 15
    },
    legend: { // 图标配置
      show: true,
      position: 'bottom', // 位置
      float: 'center', // 分类位置
      icon: 'line', // 图标
      fontColor: '#666666',
      hiddenColor: '#CECECE', // 点击图例隐藏事 文字颜色
      itemGap: 20 // 图例间距
    },
    extra: { // 扩展配置
      ring: { // 圆环
        ringWidth: 30, // 宽度
        border: false, // 各分类直接的空隙--分割线
      }
    }
  }
}

const conversion = {
  chartData:{
    categories: ['整体', '已进店', '已测量', '已出方案', '报名活动', '活动购卡', '观看直播'],
    series: [{
      name: '签单率',
      data: [35, 36, 31, 33, 13, 34]
    }, {
      name: '流失率',
      data: [18, 27, 21, 24, 6, 28]
    },{
      name: '退单率',
      data: [10, 9 , 1 , 0 , 3 , 7]
    }]
  },
  options: {
    color: ['#1890FF', '#91CB74','#FAC858', '#EE6666', '#73C0DE', '#3CA272', '#FC8452', '#9A60B4', '#ea7ccc'],
    xAxis: {
      disableGrid: true,
      axisLine: true,
      axisLineColor: '#ccc',
      calibration: true,
      fontColor: '#666'
    },
    legend: { // 图标配置
      show: true,
      position: 'bottom', // 位置
      float: 'right', // 分类位置
      fontColor: '#666666',
      hiddenColor: '#CECECE', // 点击图例隐藏事 文字颜色
      itemGap: 20, // 图例间距
    },
    extra: {
      line: {
        type: 'curve', // 圆滑曲线
        width: 2
      }
    }
  },
  eopts: {
    legend: {
      format: 'legendFormat'
    }
  }
}

export default {
  constitute,
  status,
  conversion
}