import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from './Stepper';

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

export const Step1Active: Story = {
  name: 'Step 1 — Active',
  args: {
    steps: [
      { id: '1', label: 'Data Upload', status: 'active' },
      { id: '2', label: 'Data Mapping', status: 'pending' },
      { id: '3', label: 'Review', status: 'pending' },
    ],
  },
};

export const Step2Active: Story = {
  name: 'Step 2 — Active (Step 1 completed)',
  args: {
    steps: [
      { id: '1', label: 'Data Upload', status: 'completed' },
      { id: '2', label: 'Data Mapping', status: 'active' },
      { id: '3', label: 'Review', status: 'pending' },
    ],
  },
};

export const AllCompleted: Story = {
  name: 'All Completed',
  args: {
    steps: [
      { id: '1', label: 'Data Upload', status: 'completed' },
      { id: '2', label: 'Data Mapping', status: 'completed' },
      { id: '3', label: 'Review', status: 'completed' },
    ],
  },
};
