export default {
  props: [{
    name: 'icon',
    type: 'String',
    default: '',
    desc: '按钮上的图标'
  }, {
    name: 'iconClass',
    type: 'String',
    default: '',
    desc: '图标的样式'
  }, {
    name: 'disabled',
    type: 'Boolean',
    default: 'false',
    desc: '按钮是否不可用'
  }, {
    name: 'type',
    type: 'String',
    default: '',
    desc: '相当于button元素的type属性'
  }, {
    name: 'href',
    type: 'String',
    default: '',
    desc: '相当于 a 标签的 href属性，设置之后会渲染成 a 标签，默认是使用button标签'
  }, {
    name: 'target',
    type: 'String',
    default: '',
    desc: '相当于 a 标签的target属性'
  }, {
    name: 'tooltip',
    type: 'String',
    default: '',
    desc: '当鼠标移上去提示的文字'
  }, {
    name: 'tooltipPosition',
    type: 'String',
    default: 'bottom-center',
    desc: '提示文字文字, [垂直位置]-[水平位置]，垂直位置: top，middle, bottom; 水平位置: left, center, right'
  }, {
    name: 'touch',
    type: 'Boolean',
    default: 'false',
    desc: '是否为 touch 的样式，一般用在移动端，提示框会大一些'
  }],
  slots: [{
    name: 'default',
    desc: '用来放置 input[type=file] 等特殊的按钮，或者自定义icon'
  }],
  events: [{
    name: 'click',
    desc: '按钮点击事件'
  }, {
    name: 'hover',
    desc: '鼠标移到按钮上的事件'
  }, {
    name: 'hoverExit',
    desc: '鼠标移出按钮上的事件'
  }, {
    name: 'keyboardFocus',
    desc: '键盘使按钮获取焦点的事件，第一个参数为true 时表示获取焦点，为 false 失去焦点, (isFocus)'
  }]
}
