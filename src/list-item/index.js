// @flow
import React from 'react'
import moment from 'moment'
import Markdown from 'react-markdown'
import { trim } from 'lodash'
// libs
import { Tags } from '../core'

// styles
import {
  ContainerStyle,
  LogoStyle,
  DatesStyle,
  TitleSubtitleStyle,
  MarkdownStyle,
  ToolbarStyle
} from './styles'

// types
import type { ListItem, Tag } from 'coderbox-components'

type Props = {
  item: ListItem,
  isOdd?: boolean,
  className?: string,
  hideBlocks?: string[],
  renderExtra: (item: ListItem) => any,
  onEdit: () => void,
  onDelete: () => void,
}

type State = {
  readMore: boolean,
}

class ListItemComponent extends React.Component<any, Props, State> {
  static defaultProps = { hideBlocks: [], className: '' }
  state = { readMore: true }

  toggleReadMore () {
    this.setState({ readMore: !this.state.readMore })
  }

  readMore (text: string, max: number = 100) {
    let { readMore } = this.state
    if (!readMore) return text

    if (text.length > max) {
      return text.substring(0, max) + '...'
    }

    return text
  }

  renderDate (startDate: Date, endDate: Date) {
    let { hideBlocks } = this.props
    if (hideBlocks && hideBlocks.indexOf('date') > -1) return null

    return (
      <DatesStyle className='ListItem-dates' alignItems='center'>
        <div>{moment(startDate).format('MMM/YYYY')}</div>
        <i className='material-icons'>trending_flat</i>
        <div>{endDate ? moment(endDate).format('MMM/YYYY') : 'Present'}</div>
      </DatesStyle>
    )
  }

  renderTitleSubtitle (title: string, subtitle: string) {
    let { hideBlocks } = this.props
    if (hideBlocks && hideBlocks.indexOf('title') > -1) return null

    return (
      <TitleSubtitleStyle className='ListItem-title-subtitle'>
        <div className='ListItem-title'>{title}</div>
        <div className='ListItem-subtitle'>
          <a href='#'>@ {subtitle}</a>
        </div>
      </TitleSubtitleStyle>
    )
  }

  renderDescription (description: string) {
    let { hideBlocks } = this.props
    if (hideBlocks && hideBlocks.indexOf('description') > -1) return null

    var child = (
      <a onClick={() => this.toggleReadMore()} className='ListItem-readmore'>
        {this.state.readMore ? '+ Read More' : '- Read Less'}
      </a>
    )
    var max = 120

    if (description.length < max) {
      child = null
    }

    return (
      <MarkdownStyle className='ListItem-description'>
        <Markdown source={this.readMore(description, max)} childAfter={child} />
      </MarkdownStyle>
    )
  }

  renderTags (tags: Tag[]) {
    let { hideBlocks } = this.props
    if (hideBlocks && hideBlocks.indexOf('tags') > -1) return null

    return <Tags className='ListItem-tags' tags={tags} />
  }

  renderToolbar () {
    let { onEdit, onDelete, hideBlocks } = this.props
    if (hideBlocks && hideBlocks.indexOf('toolbar') > -1) return null

    return (
      <ToolbarStyle className='ListItem-toolbar'>
        {onEdit
          ? <i className='material-icons' onClick={() => onEdit()}>
              edit
            </i>
          : null}
        {onDelete
          ? <i className='material-icons' onClick={() => onDelete()}>
              clear
            </i>
          : null}
      </ToolbarStyle>
    )
  }

  renderLogo (image: string) {
    return (
      <LogoStyle className='ListItem-logo'>
        <div style={{ backgroundImage: 'url("' + image + '")' }} />
      </LogoStyle>
    )
  }

  render () {
    let { item, className, renderExtra } = this.props

    if (!className) {
      className = ''
    }

    if (this.props.isOdd) {
      className += ' odd'
    }

    return (
      <ContainerStyle className={`ListItem ${className}`} alignItems='stretch'>
        <div className='ListItem-left'>
          {this.renderLogo(item.image)}
        </div>
        <div className='ListItem-right'>
          {this.renderDate(item.startDate, item.endDate)}
          {this.renderTitleSubtitle(item.title, item.subtitle)}
          {this.renderTags(item.tags)}
          {this.renderDescription(trim(item.description))}
          {renderExtra &&
            <div className='ListItem-extra'>{renderExtra(item)}</div>}
          {this.renderToolbar()}
        </div>
      </ContainerStyle>
    )
  }
}

export default ListItemComponent
