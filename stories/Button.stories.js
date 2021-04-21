import { MyButton } from '../src/MyButton/my-button';
import { html } from 'lit-element';

export default {
  title: 'Example/Foundation/Button',
  argTypes: {
    background: { 
      control: { 
      type: 'select',
      options: ['primary', 'secondary']
      }, 
    },
    size: { 
      control: { 
      type: 'select',
      options: ['default', 'small', 'large']
      }, 
    },
  },
};

const Template = ({background, size}) => {
  return html` 
    <my-button background=${background} size=${size}>
      ${size} ${background} button
    </my-button>
  `; 
}

export const primary = Template.bind({});
primary.args = {
  background: "primary",
};

export const secondary = Template.bind({});
secondary.args = {
  background: "secondary",
};

export const large = Template.bind({});
large.args = {
  size: 'large',
};

export const small = Template.bind({});
small.args = {
  size: 'small',
};
