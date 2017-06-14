// @flow
import React from 'react'
import DatePicker from './DatePicker'
import Flex from '../../flexbox'
import { DateRangeContainer, Icon } from '../styles'

// Types
import type { DateRange } from 'coderbox-components'
import type Moment from 'moment'

type Props = {
  range: DateRange,
  hideMonths: boolean,
  label: string,
  onChange: (range: DateRange) => void,
}

type State = {
  range: DateRange,
}

class DateRangeComponent extends React.Component<any, Props, State> {
  state = { range: this.props.range || { start: new Date() } }

  componentWillReceiveProps (nextProps: Props) {
    if (nextProps.range !== this.props.range) {
      this.setState({ range: nextProps.range })
    }
  }

  handletDateChange (date: Moment, field: string) {
    let range = {
      ...this.state.range,
      [field]: date.toDate()
    }

    this.setState({ range })

    if (this.props.onChange) {
      this.props.onChange(range)
    }
  }

  handleChecked (checked: boolean) {
    let range = {
      ...this.state.range,
      end: (this.props.range && this.props.range.end) || new Date()
    }

    if (checked) {
      range.end = null
    }

    this.setState({ range })

    if (this.props.onChange) {
      this.props.onChange(range)
    }
  }

  render () {
    const { range } = this.state

    return (
      <DateRangeContainer className='DateRange'>
        <Flex alignItems='center'>
          <DatePicker
            value={range.start}
            onChange={v => this.handletDateChange(v, 'start')}
            hideMonths={this.props.hideMonths}
            className='DateRange-startdate'
          />
          <Icon className='material-icons'>trending_flat</Icon>
          {range.end
            ? <DatePicker
              value={range.end}
              onChange={v => this.handletDateChange(v, 'end')}
              hideMonths={this.props.hideMonths}
              className='DateRange-enddate'
              />
            : <div>Present</div>}
        </Flex>
        <Flex alignItems='center'>
          <input
            type='checkbox'
            checked={!range.end}
            onChange={e => this.handleChecked(e.target.checked)}
          />
          {this.props.label || 'I still work here'}
        </Flex>
      </DateRangeContainer>
    )
  }
}

export default DateRangeComponent
