import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { ToggleComponent } from './toggle.component';

const meta: Meta<ToggleComponent> = {
  title: 'Henkel/Toggle',
  component: ToggleComponent,
  tags: ['autodocs'],
  argTypes: {
    labelPosition: {
      control: 'select',
      options: ['before', 'after'],
    },
  },
  args: {
    checkedChange: fn(),
  },
};

export default meta;
type Story = StoryObj<ToggleComponent>;

export const Off: Story = {
  args: {
    checked: false,
    label: '',
  },
};

export const On: Story = {
  args: {
    checked: true,
    label: '',
  },
};

export const WithLabelAfter: Story = {
  args: {
    checked: true,
    label: 'Enable notifications',
    labelPosition: 'after',
  },
};

export const WithLabelBefore: Story = {
  args: {
    checked: false,
    label: 'Enable notifications',
    labelPosition: 'before',
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    label: 'Disabled option',
    disabled: true,
  },
};

export const DisabledOn: Story = {
  args: {
    checked: true,
    label: 'Always active',
    disabled: true,
  },
};
