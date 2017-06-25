import React, { createElement } from 'react'
import { any, string, func, object, array, oneOfType } from 'prop-types'
import { isUndefined, isString } from 'lodash'
import { FormItemStyle } from '../styles'

class FormItem extends React.Component {
  state = {
    value: this.props.value || this.props.defaultValue,
    valid: true
  }

  static propTypes = {
    value: any,
    defaultValue: any,
    label: string,
    error: string,
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
    defaultValue: undefined,
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
    if (!this.props.validator) {
      return true
    }

    let isValid = this.props.validator(this.state.value) || false
    this.setState({ valid: isValid })

    return isValid
  }

  onChange (event) {
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
    let elementProps = {
      onChange: e => this.onChange(e),
      onKeyPress: e => this.onKeyPress(e),
      ...this.props.componentProps
    }

    if (!isUndefined(this.state.value)) {
      elementProps[this.props.valueField] = this.state.value
    }

    let isRequired = this.props.validator !== undefined
    let element = createElement(this.props.component, elementProps, this.props.componentChildren)

    return (
      <FormItemStyle className='FormItem'>
        {this.props.label && <label>{this.props.label}{isRequired ? <label className='error'>*</label> : null}</label>}
        <div className='element'>
          {element}
        </div>
        {!this.state.valid && this.props.error ? <label className='error'>{this.props.error}</label> : null}
      </FormItemStyle>
    )
  }
}

export default FormItem
