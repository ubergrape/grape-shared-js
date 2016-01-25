/**
 * Mini svg manipulation for simple attributes manipulation only.
 */

import toArray from 'lodash/lang/toArray'
import toData from './toData'

class List {
  constructor(dom, list) {
    this.dom = dom
    this.list = toArray(list)
  }

  each(fn) {
    this.list.forEach(fn)
    return this
  }

  attr(name, value) {
    this.each(node => node.setAttribute(name, value))
    return this
  }

  data(encoding) {
    return toData(this.svg(), encoding)
  }

  svg() {
    return this.dom.el.innerHTML
  }

  node() {
    return this.dom.el.firstChild
  }
}

class Dom {
  constructor(svg) {
    this.el = document.createElement('div')
    this.el.innerHTML = svg
  }

  find(query) {
    return new List(this, this.el.querySelectorAll(query))
  }
}

export default function create(svg) {
  return new Dom(svg)
}
