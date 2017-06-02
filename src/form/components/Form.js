import React from 'react'
import PropTypes from 'proptypes'
import { Button } from '../../core'
import { FormStyle } from '../styles'

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.items = []
  }

  getChildContext () {
    return {
      form: this
    }
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

  render () {
    return (
      <FormStyle className='react-form'>
        {this.props.children}
        {this.props.showButtons
          ? <div className='react-form-buttons'>
            {this.props.showSave &&
            <Button color='primary' onClick={() => this.props.onSave(this)}>
              {this.props.saveLabel}
            </Button>}
            {this.props.showCancel &&
            <Button onClick={() => this.props.onCancel()}>
              {this.props.cancelLabel}
            </Button>}
          </div>
          : null}
      </FormStyle>
    )
  }
}

Form.propTypes = {
  showButtons: PropTypes.bool,
  showSave: PropTypes.bool,
  showCancel: PropTypes.bool,
  saveLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  onSave: PropTypes.func,
  onCancel: PropTypes.func
}

Form.defaultProps = {
  saveLabel: 'Save',
  cancelLabel: 'Cancel',
  showButtons: true,
  showSave: true,
  showCancel: true,
  onSave: () => true,
  onCancel: () => true
}

Form.childContextTypes = {
  form: PropTypes.object
}

export default Form
