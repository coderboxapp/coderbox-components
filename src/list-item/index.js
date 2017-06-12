// @flow
import React from 'react'
import { assign } from 'lodash'

import ListItem from './components/ListItem'
import ListItemForm from './components/ListItemForm'
import Spinner from '../spinner'

// styles
import { ToolbarStyle, ContainerStyle, SpinnerStyle } from './styles'

// types
import type { Item } from 'coderbox-components'

type Props = {
  item: Item,
  className: string,
  hideBlocks: string[],
  formSettings?: any,
  transform: (data: any) => Item,
  renderForm: (item: Item, onSave: Function, onCancel: Function) => any,
  renderExtra: (item: Item) => any,
  onSave: (data: any) => void,
  onDelete: () => void,
}

type State = {
  editMode: boolean,
  isSaving: boolean,
}

class ListItemContainer extends React.Component<any, Props, State> {
  static defaultProps = { hideBlocks: [], className: '', transform: item => item }
  state = { editMode: false, isSaving: false }

  componentWillReceiveProps () {
    this.setState({ isSaving: false })
  }

  handleFormSave = (form: any) => {
    let { item, onSave } = this.props

    if (form.validate()) {
      let data = form.data()
      onSave(assign({}, item, data))
      this.setState({ editMode: false, isSaving: true })
    }
  }

  handleFormCancel = () => {
    this.setState({ editMode: false })
  }

  handleEdit = () => {
    this.setState({ editMode: true })
  }

  renderToolbar () {
    let { onDelete, hideBlocks } = this.props
    if (
      this.state.editMode ||
      (hideBlocks && hideBlocks.indexOf('toolbar') > -1)
    ) {
      return null
    }

    return (
      <ToolbarStyle className='ListItem-toolbar'>
        {this.state.isSaving
          ? <SpinnerStyle>
            <Spinner color='primary' size={30} hideLabel hideOverlay />
          </SpinnerStyle>
          : <div>
            <i className='material-icons' onClick={() => this.handleEdit()}>
                edit
              </i>
            <i className='material-icons' onClick={() => onDelete()}>
                delete
              </i>
          </div>}
      </ToolbarStyle>
    )
  }

  render () {
    let { item, transform, className, renderForm, formSettings } = this.props
    let { editMode } = this.state

    return (
      <ContainerStyle className={className}>
        {editMode
          ? renderForm
              ? renderForm(item, this.handleFormSave, this.handleFormCancel)
              : <ListItemForm
                item={item}
                formSettings={formSettings}
                onSave={this.handleFormSave}
                onCancel={this.handleFormCancel}
                />
          : <ListItem item={transform(item)} />}
        {this.renderToolbar()}
      </ContainerStyle>
    )
  }
}

export default ListItemContainer
