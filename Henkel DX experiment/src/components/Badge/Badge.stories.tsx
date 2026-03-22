import type { Meta, StoryObj } from '@storybook/react';
import { StatusBadge, CountBadge } from './Badge';

const meta: Meta<typeof StatusBadge> = {
  title: 'Components/Badge',
  component: StatusBadge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Status indicators for data records and workflow states.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatusBadge>;

export const Draft: Story = { args: { status: 'draft' } };
export const InProgress: Story = { args: { status: 'in-progress' } };
export const Completed: Story = { args: { status: 'completed' } };
export const Error: Story = { args: { status: 'error' } };
export const NotStarted: Story = { args: { status: 'not-started' } };

export const AllStatuses: Story = {
  name: 'All Status Variants',
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <StatusBadge status="draft" />
      <StatusBadge status="in-progress" />
      <StatusBadge status="completed" />
      <StatusBadge status="error" />
      <StatusBadge status="not-started" />
    </div>
  ),
};

export const CountBadges: Story = {
  name: 'Count Badges',
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <CountBadge count={3} active />
      <CountBadge count={12} active />
      <CountBadge count={0} active={false} />
    </div>
  ),
};
