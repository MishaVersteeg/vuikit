import { mergeData } from 'vuikit/src/_core/utils/vue'
import { VkIconEl } from 'vuikit/src/icon'

export default {
  functional: true,
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  render (h, { props, data, listeners, slots }) {
    const _slots = slots()
    const { active, disabled, title } = props

    delete data.on

    return h('li', mergeData(data, {
      class: {
        'uk-active': active && !disabled,
        'uk-disabled': disabled
      }
    }), [
      h('a', { on: listeners }, [
        title,
        _slots.icon && h(VkIconEl, {
          class: 'uk-margin-small-left'
        }, [ _slots.icon ])
      ]),
      _slots.default
    ])
  }
}
