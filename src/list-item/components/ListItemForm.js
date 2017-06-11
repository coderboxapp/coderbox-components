// @flow
import React from 'react'
import { merge } from 'lodash'

// libs
import { Form, FormItem } from '../../form'
import AutocompleteTags from '../../autocomplete-tags'
import { DateRange } from '../../date-utils'

// styles
import { FormStyle } from '../styles'

// types
import type { Tag } from 'coderbox-components'

type Props = {
  item: any,
  suggestedTags?: Tag[],
  formSettings?: any,
  onSave: Function,
  onCancel: Function,
}

const formDefaultSettings = {
  title: {
    label: 'Title:',
    component: 'input',
    componentProps: {
      type: 'text'
    }
  },
  subtitle: {
    label: 'Subtitle:',
    component: 'input',
    componentProps: {
      type: 'text'
    }
  }
}

const ListItemForm = ({
  item,
  suggestedTags = [],
  formSettings,
  onSave,
  onCancel
}: Props) => {
  let settings = merge({}, formDefaultSettings, formSettings || {})

  return (
    <FormStyle>
      <Form onSave={onSave} onCancel={onCancel}>
        <FormItem
          name='title'
          label={settings.title.label}
          value={item.title}
          defaultValue=''
          valueFromEvent={settings.title.valueFromEvent}
          component={settings.title.component}
          componentProps={settings.title.componentProps}
        />
        <FormItem
          name='subtitle'
          label={settings.subtitle.label}
          value={item.subtitle}
          defaultValue=''
          valueFromEvent={settings.subtitle.valueFromEvent}
          component={settings.subtitle.component}
          componentProps={settings.subtitle.componentProps}
        />
        <FormItem
          name='tags'
          label='Tags:'
          value={item.tags.concat()}
          valueFromEvent={event => event}
          component={AutocompleteTags}
          componentProps={{
            suggestions: suggestedTags,
            color: 'primary',
            allowNew: true,
            toLowercase: true,
            placeholder: 'Tags (ex. javascript)'
          }}
        />
        <FormItem
          name='dateRange'
          label='Period:'
          value={item.dateRange}
          valueField='range'
          valueFromEvent={event => event}
          component={DateRange}
          componentProps={{
            checkboxLabel: 'In progress...',
            hideMonths: false
          }}
        />
        <FormItem
          name='description'
          label={'Description: '}
          value={item.description}
          component='textarea'
          componentProps={{ placeholder: 'Description ?', rows: '6' }}
        />
      </Form>
    </FormStyle>
  )
}

export default ListItemForm
