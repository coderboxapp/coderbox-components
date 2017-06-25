import React, { createElement } from 'react'
import { any, string, func, object, array, oneOfType } from 'prop-types'
import { isUndefined, isString } from 'lodash'

// styles
import { FormItemStyle } from './styles'

class FormItem extends React.Component {
  state = {
    value: this.props.value || this.props.defaultValue,
    error: null,
    valid: true
  }

  static propTypes = {
    name: string.isRequired,
    value: any,
    defaultValue: any,
    label: string,
    component: oneOfType([func, string]).isRequired,
    componentProps: object,
    validator: func,
    valueFromEvent: func,
    valueField: string,
    onChange: func,
    onEnter: func,
    componentChildren: array
  }

  static defaultProps = {
    componentProps: {},
    defaultValue: '',
    valueField: 'value'
  }

  static contextTypes = { form: object }

  componentDidMount () {
    this.context.form.register(this)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.value !== undefined) {
      this.setState({ value: nextProps.value })
    }
  }

  validate () {
    let { validator, name } = this.props
    let { value } = this.state

    if (!validator) {
      this.setState({ valid: true })
      return true
    }

    let error = validator(value, name)
    this.setState({ valid: error === null, error: error })

    return error === null
  }

  onChange (event) {
    this.setState({ valid: true, error: null })

    let { valueFromEvent, component } = this.props

    if (!valueFromEvent) {
      if (isString(component)) {
        valueFromEvent = event => event.target.value
      } else {
        valueFromEvent = event => event
      }
    }

    let value = valueFromEvent(event)
    this.setState({ value: value })

    if (this.props.onChange) {
      this.props.onChange(value)
    }
  }

  onKeyPress (event) {
    if (event.key === 'Enter') {
      if (this.props.onEnter) {
        this.props.onEnter(event)
      }
    }
  }

  render () {
    let { valueField, validator, label, component, componentChildren, componentProps } = this.props
    let { value, valid, error } = this.state

    let elementProps = {
      onChange: e => this.onChange(e),
      onKeyPress: e => this.onKeyPress(e),
      ...componentProps
    }

    if (!isUndefined(value)) {
      elementProps[valueField] = value
    }

    let isRequired = validator !== undefined
    let element = createElement(
      component,
      elementProps,
      componentChildren
    )

    return (
      <FormItemStyle className='FormItem'>
        {label &&
          <label>
            {label}
            {isRequired ? <label className='error'>*</label> : null}
          </label>}
        <div className='element'>
          {element}
        </div>
        {!valid && error
          ? <label className='error'>* {error}</label>
          : null}
      </FormItemStyle>
    )
  }
}

export default FormItem
