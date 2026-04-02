import type { Meta, StoryObj } from '@storybook/angular';

import { InputFieldComponent } from './input-field.component';

const meta: Meta<InputFieldComponent> = {
  title: 'Henkel/InputField',
  component: InputFieldComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<InputFieldComponent>;

export const Default: Story = {
  args: {
    label: 'Name',
    required: true,
    placeholder: '',
    value: '',
  },
};

export const Filled: Story = {
  args: {
    label: 'Name',
    required: true,
    value: 'SalonLab Core Acceleration',
  },
};

export const WithHint: Story = {
  args: {
    label: 'Project Name',
    hint: 'Enter the full project name as registered in the system.',
    value: '',
  },
};

export const WithError: Story = {
  args: {
    label: 'Name',
    required: true,
    value: '',
    errorMessage: 'This field is required.',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Name',
    value: 'SalonLab Core Acceleration',
    disabled: true,
  },
};

export const SearchType: Story = {
  args: {
    label: 'Search',
    type: 'search',
    placeholder: 'Search initiatives...',
  },
};
