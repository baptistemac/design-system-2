import GCard from '.';

export default {
  title: 'Components/Card',
  component: GCard,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GCard },
  template: '<g-card v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  title: 'Titre de ma super card',
};