import { Drop } from 'vuikit/src/drop'
import { assign } from '@vuikit/core/utils/lang'
import { mergeData } from '@vuikit/core/utils/vue'

import { ElDropdown } from '../elements'

export default {
  functional: true,
  name: 'VkDropdown',
  props: Drop.props,
  render (h, { props, data, children }) {
    return h(Drop, mergeData({}, data, {
      props: assign({}, props, {
        mainClass: 'uk-dropdown',
        mainElement: ElDropdown
      })
    }), children)
  }
}