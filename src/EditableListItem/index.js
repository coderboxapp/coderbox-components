// @flow
import React, { createElement } from 'react'
import { assign, merge } from 'lodash'

import Spinner from 'Spinner'
import ListItem from 'ListItem'
import Form from 'Form'
import defaultFormSettings from './formSettings'

// styles
import { ToolbarStyle, EditableItemStyle, SpinnerStyle } from './styles'

// types
import type { Item } from 'coderbox-components'

type Props = {
  item: Object,
  itemComponent: any,
  formComponent: any,
  formSettings: Object,
  loading: boolean,
  palette: string,
  className: string,
  transform: (data: Object) => Item,
  onSave: (data: any) => void,
  onDelete: () => void,
}

type State = {
  editMode: boolean,
}

class EditableListItem extends React.Component<any, Props, State> {
  state = { editMode: false }

  static defaultProps = {
    palette: 'primary',
    className: ''
  }

  handleFormSave = (form: any) => {
    let { item, onSave } = this.props

    if (form.validate()) {
      let data = form.data()
      onSave(assign({}, item, data))
      this.setState({ editMode: false })
    }
  }

  handleFormCancel = () => {
    this.setState({ editMode: false })
  }

  handleEdit = () => {
    this.setState({ editMode: true })
  }

  renderToolbar () {
    let { onDelete, loading, palette } = this.props
    let { editMode } = this.state

    return (
      <ToolbarStyle palette={palette} className='ListItem-toolbar'>
        {(() => {
          if (loading) {
            return (
              <SpinnerStyle>
                <Spinner
                  color='primary'
                  align='flex-end'
                  size={32}
                  hideLabel
                  hideOverlay
                />
              </SpinnerStyle>
            )
          } else {
            if (!editMode) {
              return (
                <div>
                  <i
                    className='material-icons'
                    onClick={() => this.handleEdit()}
                  >
                    edit
                  </i>
                  <i className='material-icons' onClick={() => onDelete()}>
                    delete
                  </i>
                </div>
              )
            }
          }
        })()}
      </ToolbarStyle>
    )
  }

  render () {
    let {
      item,
      transform,
      itemComponent,
      formComponent,
      formSettings,
      className
    } = this.props
    let { editMode } = this.state

    let ItemElement = createElement(itemComponent || ListItem, {
      item,
      transform
    })

    let FormElement = createElement(formComponent || Form, {
      onSave: this.handleFormSave,
      onCancel: this.handleFormCancel,
      item,
      settings: merge({}, defaultFormSettings, formSettings)
    })

    return (
      <EditableItemStyle className={className}>
        {editMode ? FormElement : ItemElement}
        {this.renderToolbar()}
      </EditableItemStyle>
    )
  }
}

export default EditableListItem
