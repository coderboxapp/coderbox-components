import React from 'react'
import { storiesOf, action } from '@storybook/react'

import Form from 'Form'
import FormItem from 'FormItem'

storiesOf('Form & FormItem', module)
  .add('default', () => {
    return (
      <Form onSave={form => action('form submit')(form.data())}>
        <FormItem
          name='name'
          label='Name:'
          component='input'
          componentProps={{
            type: 'text',
            placeholder: 'Enter your name'
          }}
        />

        <FormItem
          name='email'
          label='Email:'
          component='input'
          componentProps={{
            type: 'email',
            placeholder: 'Enter your email address'
          }}
        />

        <FormItem
          name='description'
          label='Description:'
          component='textarea'
          componentProps={{
            rows: 5,
            placeholder: 'Tell us about you'
          }}
        />
      </Form>
    )
  })
  .add('with validators', () => {
    const handleSave = form => {
      if (form.validate()) {
        action('form submit')(form.data())
      }
    }

    return (
      <Form onSave={handleSave}>
        <FormItem
          name='email'
          label='Email:'
          validator={Form.Validators.email()}
          component='input'
          componentProps={{
            type: 'email',
            placeholder: 'Enter your email address'
          }}
        />

        <FormItem
          name='description'
          label='Description:'
          validator={Form.Validators.minLength({length: 5})}
          component='textarea'
          componentProps={{
            rows: 5,
            placeholder: 'Tell us about you'
          }}
        />
      </Form>
    )
  })
