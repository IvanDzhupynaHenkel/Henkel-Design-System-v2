import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(Story) => <div style={{ width: '400px' }}><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = { args: { value: 50, showLabel: true } };
export const TwentyFive: Story = { name: '25%', args: { value: 25, label: 'Step 1 of 4', showLabel: true } };
export const Fifty: Story = { name: '50%', args: { value: 50, label: 'Step 2 of 4', showLabel: true } };
export const EightyTwo: Story = { name: '82%', args: { value: 82, label: 'Step 3 of 4', showLabel: true } };
export const Complete: Story = { name: '100% — Complete', args: { value: 100, label: 'Complete', showLabel: true } };
