import MyButton from '../components/Button';
import {
  withKnobs,
  text,
  select,
} from '@storybook/addon-knobs';

export default {
  title: 'Button',
  component: MyButton,
  decorators: [withKnobs]
};

export const Text = () => ({
  components: { MyButton },
  template: `<my-button :text="text" />`,
  props: {
    text: {
      default: text('Text', 'Click me')
    }
  }
});

export const Color = () => ({
  components: { MyButton },
  template: `<my-button text="Click me" :kind="kind" />`,
  props: {
    kind: {
      default: select('Color', {
        Primary: 'primary',
        Default: 'default',
        Success: 'success',
        Info: 'info',
        Warning: 'warning',
        Danger: 'danger',
        Dark: 'dark',
      }, 'primary')
    }
  }
})

export const Size = () => ({
  components: { MyButton },
  template: `<my-button text="Click me" :size="size"/>`,
  props: {
    size: {
      default: select('Size', {
        Minimum: 'minimum',
        Small: 'small',
        Normal: 'normal',
        Large: 'large',
      }, 'minimum')
    }
  }
})
