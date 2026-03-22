import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The primary action element. Use `primary` for the main CTA, `secondary` for supporting actions, `tertiary` for low-emphasis links, and `destructive` for irreversible actions.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'destructive', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: 'primary', children: 'Continue with Ontology' },
};

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Save as Draft' },
};

export const Tertiary: Story = {
  args: { variant: 'tertiary', children: 'Cancel' },
};

export const Destructive: Story = {
  args: { variant: 'destructive', children: 'Delete Record' },
};

export const Ghost: Story = {
  args: { variant: 'ghost', children: 'View Details' },
};

export const Loading: Story = {
  args: { variant: 'primary', children: 'Saving…', loading: true },
};

export const Disabled: Story = {
  args: { variant: 'primary', children: 'Continue', disabled: true },
};

export const Small: Story = {
  args: { variant: 'primary', size: 'sm', children: 'Small Button' },
};

export const Large: Story = {
  args: { variant: 'primary', size: 'lg', children: 'Large Button' },
};

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="primary" loading>Loading</Button>
      <Button variant="primary" disabled>Disabled</Button>
    </div>
  ),
};
