// icon-minus-circle
export default {
  functional: true,
  render: function (h, { props }) {
    let width = props.width || 20
    let height = props.height || 20
    const viewBox = props.viewBox || '0 0 20 20'

    return h('svg', {
      attrs: {
        version: '1.1',
        meta: 'vk-icons-minus-circle',
        width: width,
        height: height,
        viewBox: viewBox
      },
      domProps: {
        innerHTML: '<circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9" /><line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5" />'
      }
    })
  }
}
