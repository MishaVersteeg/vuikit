'use strict';

var gitBranch = {
  functional: true,
  render: function (h, ref) {
    var props = ref.props;
    var width = props.width || 20;
    var height = props.height || 20;
    var viewBox = props.viewBox || '0 0 20 20';
    return h('svg', {
      attrs: {
        version: '1.1',
        meta: 'vk-icons-git-branch',
        width: width,
        height: height,
        viewBox: viewBox
      },
      domProps: {
        innerHTML: '<circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="3" r="2" /><circle fill="none" stroke="#000" stroke-width="1.2" cx="14" cy="6" r="2" /><circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="17" r="2" /><path fill="none" stroke="#000" stroke-width="2" d="M14,8 C14,10.41 12.43,10.87 10.56,11.25 C9.09,11.54 7,12.06 7,15 L7,5" />'
      }
    })
  }
}

module.exports = gitBranch;