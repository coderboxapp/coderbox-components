// @flow
import React from 'react'
import { isString } from 'lodash'
import Autocomplete from 'react-google-autocomplete'
import { AutocompleteWrapper } from './styles'

type Address = {
  formatted_address: string,
  geometry?: Object
}

type AutocompleteEvent = {
  target: { value: string },
}

type Props = {
  value: Address,
  placeholder: string,
  onChange: (value: Address) => void,
}

type State = {
  formatted_address: string
}

class AutocompleteLocation extends React.Component<any, Props, State> {
  state = {
    formatted_address: this.convertAddress(this.props.value)
  }

  static defaultProps = {
    placeholder: ''
  }

  componentWillReceiveProps (nextProps: Props) {
    if (nextProps.value) {
      this.setState({formatted_address: this.convertAddress(nextProps.value)})
    }
  }

  convertAddress (address: string | Address): string {
    if (!address) {
      return ''
    }

    return isString(address) ? address : address.formatted_address
  }

  formatPlace (place: Address): Address {
    return {
      formatted_address: place.formatted_address,
      geometry: place.geometry
    }
  }

  onPlaceSelected = (place: Address) => {
    this.setState({formatted_address: place.formatted_address})

    if (this.props.onChange) {
      this.props.onChange({formatted_address: place.formatted_address, geometry: place.geometry})
    }
  }

  onChange = (evt: AutocompleteEvent) => {
    this.setState({ formatted_address: evt.target.value })
  }

  render () {
    let { placeholder } = this.props
    return (
      <AutocompleteWrapper>
        <Autocomplete
          types={['(regions)']}
          className='form-input'
          value={this.state.formatted_address}
          placeholder={placeholder}
          onChange={this.onChange}
          onPlaceSelected={this.onPlaceSelected}
        />

      </AutocompleteWrapper>
    )
  }
}

export default AutocompleteLocation
