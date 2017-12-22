import toArray from '@vuikit/core/utils/to-array'
import isObject from '@vuikit/core/utils/is-object'
import isFunction from '@vuikit/core/utils/is-function'
import isUndefined from '@vuikit/core/utils/is-undefined'

export function attr (element, name, value) {

  if (isObject(name)) {
    for (var key in name) {
      attr(element, key, name[key])
    }
    return
  }

  if (isUndefined(value)) {
    return element && element.getAttribute(name)
  } else {
    toArray(element).forEach(element => {

      if (isFunction(value)) {
        value = value.call(element, attr(element, name))
      }

      if (value === null) {
        removeAttr(element, name)
      } else {
        element.setAttribute(name, value)
      }
    })
  }

}

export function hasAttr (element, name) {
  return toArray(element).some(element => element.hasAttribute(name))
}

export function removeAttr (element, name) {
  element = toArray(element)
  name.split(' ').forEach(name =>
    element.forEach(element =>
      element.removeAttribute(name)
    )
  )
}

export function filterAttr (element, attribute, pattern, replacement) {
  attr(element, attribute, value => value ? value.replace(pattern, replacement) : value)
}

export function data (element, attribute) {
  for (var i = 0, attrs = [attribute, `data-${attribute}`]; i < attrs.length; i++) {
    if (hasAttr(element, attrs[i])) {
      return attr(element, attrs[i])
    }
  }
}