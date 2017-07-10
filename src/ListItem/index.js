// @flow
import React from 'react'
import moment from 'moment'
import Markdown from 'react-markdown'
import { trim } from 'lodash'

// libs
import Tags from 'Tags'

// styles
import {
  ItemStyle,
  LogoStyle,
  DatesStyle,
  TitleSubtitleStyle,
  MarkdownStyle
} from './styles'

// types
import type { Item, Tag, DateRange } from 'coderbox-components'

type Props = {
  item: Object,
  isOdd?: boolean,
  palette?: string,
  className: string,
  hideBlocks?: string[],
  transform: (data: Object) => Item,
  renderExtra: (item: Item) => React.Element<*>
}

type State = {
  readMore: boolean
}

class ListItem extends React.Component<any, Props, State> {
  state = { readMore: true }

  static defaultProps = {
    hideBlocks: [],
    palette: 'primary',
    className: '',
    transform: (data: Object) => data
  }

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

  renderLogo (image: string) {
    return (
      <LogoStyle className='ListItem-logo'>
        <div style={{ backgroundImage: 'url("' + image + '")' }} />
      </LogoStyle>
    )
  }

  renderDate (dateRange: DateRange) {
    let { hideBlocks } = this.props
    if (hideBlocks && hideBlocks.indexOf('date') > -1) return null

    if (!dateRange) {
      dateRange = { start: new Date(), end: null }
    }

    return (
      <DatesStyle className='ListItem-dates' alignItems='center'>
        <div>{moment(dateRange.start).format('MMM/YYYY')}</div>
        <i className='material-icons'>trending_flat</i>
        <div>{dateRange.end ? moment(dateRange.end).format('MMM/YYYY') : 'Present'}</div>
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

  renderTags (tags: Tag[]) {
    let { hideBlocks } = this.props
    if (hideBlocks && hideBlocks.indexOf('tags') > -1) return null

    return <Tags className='ListItem-tags' tags={tags} reverse />
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

  renderExtra (item: Item) {
    return null
  }

  render () {
    let { item, isOdd, className, transform, palette, renderExtra } = this.props
    let transformedItem = transform(item)

    className += isOdd ? ' odd' : ''

    return (
      <ItemStyle className={`ListItem ${className}`} palette={palette} alignItems='stretch'>
        <div className='ListItem-left'>
          {this.renderLogo(transformedItem.image)}
        </div>
        <div className='ListItem-right'>
          {this.renderDate(transformedItem.dateRange)}
          {this.renderTitleSubtitle(transformedItem.title, transformedItem.subtitle)}
          {this.renderTags(transformedItem.tags)}
          {this.renderDescription(trim(transformedItem.description))}
          {this.renderExtra(transformedItem)}
          {renderExtra && <div className='ListItem-extra'>{renderExtra(transformedItem)}</div>}
        </div>
      </ItemStyle>
    )
  }
}

export default ListItem
