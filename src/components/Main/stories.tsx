import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Main } from './'

export default {
  title: 'Main',
  component: Main,
} as ComponentMeta<typeof Main>

const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />

export const Base = Template.bind({})

export const Custom = Template.bind({})
Custom.args = { title: 'Será? kkkkk' }
