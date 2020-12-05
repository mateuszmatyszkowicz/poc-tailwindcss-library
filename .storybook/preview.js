import React from 'react'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}

export const globalTypes = {
  direction: {
    name: 'Direction',
    description: 'HTML dir',
    defaultValue: 'ltr',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'ltr', title: 'LTR' },
        { value: 'rtl', title: 'RTL' }
      ]
    }
  }
}

export const decorators = [
  (Story, context) => (
    <div dir={context.globals.direction}>
      <Story />
    </div>
  )
]
