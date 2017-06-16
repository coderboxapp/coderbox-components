// @flow
import React, { createElement } from 'react'
import { merge, keys, isArray, sortBy } from 'lodash'

// libs
import { Form, FormItem } from '../../form'
import AutocompleteTags from '../../autocomplete-tags'
import { DateRange } from '../../date-utils'

// styles
import { FormStyle } from '../styles'

type Props = {
  item: Object,
  settings?: any,
  onSave: Function,
  onCancel: Function,
}

const defaultSettings = {
  title: {
    name: 'title',
    label: 'Title:',
    component: 'input',
    componentProps: {
      type: 'text'
    },
    sort: 0
  },
  subtitle: {
    name: 'subtitle',
    label: 'Subtitle:',
    component: 'input',
    componentProps: {
      type: 'text'
    },
    sort: 1
  },
  tags: {
    name: 'tags',
    label: 'Tags:',
    component: AutocompleteTags,
    componentProps: {
      color: 'primary',
      allowNew: true,
      toLowercase: true,
      suggestions: [],
      placeholder: 'Tags (ex. javascript)'
    },
    sort: 2
  },
  dateRange: {
    name: 'dateRange',
    label: 'DateRange:',
    valueField: 'range',
    component: DateRange,
    componentProps: {
      checkboxLabel: 'In progress...',
      hideMonths: false
    },
    sort: 3
  },
  description: {
    name: 'description',
    label: 'Description:',
    component: 'textarea',
    componentProps: {
      placeholder: 'Description ?',
      rows: '6'
    },
    sort: 4
  }
}

const ListItemForm = ({ item, settings, onSave, onCancel }: Props) => {
  let mergedSettings = merge({}, defaultSettings, settings || {})
  let settingsKeys: string[] = sortBy(keys(mergedSettings), key => mergedSettings[key].sort)
  let children = []

  settingsKeys.forEach((key, index) => {
    let elementProps = mergedSettings[key]
    let value = item[elementProps.name]

    if (isArray(value)) {
      value = value.concat()
    }

    if (elementProps !== null) {
      let element = createElement(FormItem, {
        ...elementProps,
        value: value,
        key: index
      })

      children.push(element)
    }
  })

  return (
    <FormStyle className='ListItemForm'>
      <Form onSave={onSave} onCancel={onCancel}>
        {children}
      </Form>
    </FormStyle>
  )
}

export default ListItemForm
