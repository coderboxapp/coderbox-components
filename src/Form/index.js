import React, { createElement } from 'react'
import { bool, string, func, object } from 'prop-types'
import { keys, sortBy, isArray } from 'lodash'

import Button from 'Button'
import FormItem from 'FormItem'

// styles
import { FormStyle } from './styles'

class Form extends React.Component {
  items = []

  static propTypes = {
    showButtons: bool,
    showSave: bool,
    showCancel: bool,
    saveLabel: string,
    cancelLabel: string,
    item: object,
    settings: object,
    onSave: func,
    onCancel: func
  }

  static defaultProps = {
    saveLabel: 'Save',
    cancelLabel: 'Cancel',
    showButtons: true,
    showSave: true,
    showCancel: true,
    item: null,
    settings: null,
    onSave: () => true,
    onCancel: () => true
  }

  static childContextTypes = {
    form: object
  }

  getChildContext () {
    return { form: this }
  }

  validate () {
    let i = 0

    for (i = 0; i < this.items.length; i++) {
      if (!this.items[i].validate()) return false
    }

    return true
  }

  data () {
    let result = {}
    let item = null
    let i = 0

    for (i = 0; i < this.items.length; i++) {
      item = this.items[i]

      if (item.props.name) {
        result[item.props.name] = item.state.value
      }
    }

    return result
  }

  register (item) {
    this.items.push(item)
  }

  createChildrenFromSettings (settings) {
    let children = []
    let { item } = this.props
    let formKeys = sortBy(keys(settings), key => settings[key] && settings[key].sort)

    formKeys.forEach((key, index) => {
      let elementProps = settings[key]
      if (elementProps !== null) {
        let value = null

        if (item) {
          value = item[elementProps.name]

          if (isArray(value)) {
            value = value.concat()
          }
        }

        let element = createElement(FormItem, {
          ...elementProps,
          value: value,
          key: index
        })

        children.push(element)
      }
    })

    return children
  }

  render () {
    let {
      children,
      showButtons,
      showSave,
      showCancel,
      settings,
      saveLabel,
      cancelLabel
    } = this.props

    if (settings) {
      children = this.createChildrenFromSettings(settings)
    }

    return (
      <FormStyle className='Form'>
        {children}
        {showButtons
          ? <div className='Form-buttons'>
            {showSave &&
            <Button isPrimary onClick={() => this.props.onSave(this)}>
              {saveLabel}
            </Button>}
            {showCancel &&
            <Button onClick={() => this.props.onCancel()}>
              {cancelLabel}
            </Button>}
          </div>
          : null}
      </FormStyle>
    )
  }
}

const ucfirst = txt => {
  return txt.charAt(0).toUpperCase() + txt.slice(1)
}

Form.Validators = {
  email: ({ msg } = {}) => value => {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (re.test(value)) return null
    return msg || 'Email is required and must be valid.'
  },

  minLength: ({ msg, length = 3 } = {}) => (value, field) => {
    if (value && value.length >= length) return null
    return msg || `${ucfirst(field)} is required. Min. ${length} characters.`
  }
}

export default Form
