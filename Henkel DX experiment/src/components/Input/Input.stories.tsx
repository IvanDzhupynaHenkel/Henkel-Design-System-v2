import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Text input field. Supports label, helper text, error state, icons, and search variant.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { label: 'Data source name', placeholder: 'Enter a name…' },
};

export const Filled: Story = {
  args: { label: 'Data source name', value: 'Henkel-SAP-Export-2024', readOnly: true },
};

export const Focus: Story = {
  args: { label: 'Data source name', placeholder: 'Enter a name…', autoFocus: true },
};

export const WithHelperText: Story = {
  args: {
    label: 'Description',
    placeholder: 'Describe the data source…',
    helperText: 'Maximum 200 characters',
  },
};

export const Required: Story = {
  args: { label: 'Data source name', placeholder: 'Enter a name…', required: true },
};

export const Error: Story = {
  args: {
    label: 'Data source name',
    value: '',
    error: 'This field is required',
    required: true,
  },
};

export const Disabled: Story = {
  args: { label: 'Data source name', value: 'Read-only value', disabled: true },
};

export const Search: Story = {
  args: {
    variant: 'search',
    placeholder: 'Search records…',
    leftIcon: '🔍',
  },
};

export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '320px' }}>
      <Input label="Default" placeholder="Enter value…" />
      <Input label="Filled" value="Some filled value" readOnly />
      <Input label="Required" placeholder="Enter value…" required />
      <Input label="With helper" placeholder="Enter value…" helperText="Helpful hint here" />
      <Input label="Error" value="" error="This field is required" required />
      <Input label="Disabled" value="Can't edit this" disabled />
      <Input variant="search" placeholder="Search records…" leftIcon="🔍" />
    </div>
  ),
};
