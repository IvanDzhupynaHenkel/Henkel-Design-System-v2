import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { HdsButtonComponent } from './hds-button.component';

const meta: Meta<HdsButtonComponent> = {
  title: 'Henkel/Button',
  component: HdsButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    icon: {
      control: 'select',
      options: [undefined, 'add', 'delete', 'expand_more', 'expand_less'],
    },
  },
  args: {
    clicked: fn(),
  },
};

export default meta;
type Story = StoryObj<HdsButtonComponent>;

export const Primary: Story = {
  args: {
    label: 'New Initiative',
    variant: 'primary',
    icon: 'add',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Cancel',
    variant: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    label: 'Show all',
    variant: 'ghost',
    icon: 'add',
  },
};

export const IconOnly: Story = {
  args: {
    variant: 'ghost',
    icon: 'delete',
  },
};

export const Disabled: Story = {
  args: {
    label: 'New Initiative',
    variant: 'primary',
    icon: 'add',
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    label: 'Save',
    variant: 'primary',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    label: 'Get Started',
    variant: 'primary',
    size: 'lg',
  },
};
