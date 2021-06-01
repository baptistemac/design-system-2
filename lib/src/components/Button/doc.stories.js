import GButton from '.';

export default {
  title: 'Components/Button',
  component: GButton,
  parameters: {
      layout: 'centered'
  },
  argTypes: {
    color: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GButton },
  template: '<g-button @onClick="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button Secondary',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button Large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button Small',
};
