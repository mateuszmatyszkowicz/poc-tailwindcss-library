import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { ExampleComponent, ExampleComponentProps } from '../../index'

export default {
  title: 'Templates/ExampleComponent',
  component: ExampleComponent,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

const Template: Story<ExampleComponentProps> = (args) => (
  <ExampleComponent {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  text: 'Button'
}
