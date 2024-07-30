import { Meta, StoryFn } from '@storybook/react'
import {InputProps} from './Input'
import Input from './Input'

export default{
    title:"components/Input",
    component: Input,
    tags:['autodocs']
} as Meta

const Template : StoryFn<InputProps> = (args: InputProps) => <Input {...args}  />

export const Text = Template.bind({})
Text.args = {
    placeHolder:"Text",
    name:"Text"
}

export const Password = Template.bind({})

Password.args = {
    placeHolder:'password',
    name:'password'
}
