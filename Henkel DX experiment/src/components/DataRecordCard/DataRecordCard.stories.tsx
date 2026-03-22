import type { Meta, StoryObj } from '@storybook/react';
import { DataRecordCard } from './DataRecordCard';

const meta: Meta<typeof DataRecordCard> = {
  title: 'Components/DataRecordCard',
  component: DataRecordCard,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div style={{ maxWidth: '720px' }}><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof DataRecordCard>;

export const Draft: Story = {
  args: {
    title: 'Henkel SAP Export Q4 2024',
    status: 'draft',
    lastModified: '2 hours ago',
    recordCount: 1240,
  },
};

export const Completed: Story = {
  args: {
    title: 'Henkel SAP Export Q3 2024',
    status: 'completed',
    lastModified: 'Jan 12, 2025',
    recordCount: 3820,
  },
};

export const InProgress: Story = {
  args: {
    title: 'Product Master Data 2025',
    status: 'in-progress',
    lastModified: '30 min ago',
    recordCount: 580,
  },
};

export const Error: Story = {
  args: {
    title: 'Legacy Data Migration',
    status: 'error',
    lastModified: 'Yesterday',
    recordCount: 0,
  },
};

export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <DataRecordCard title="Henkel SAP Export Q4 2024" status="draft" lastModified="2 hours ago" recordCount={1240} />
      <DataRecordCard title="Product Master Data 2025" status="in-progress" lastModified="30 min ago" recordCount={580} />
      <DataRecordCard title="Henkel SAP Export Q3 2024" status="completed" lastModified="Jan 12" recordCount={3820} />
      <DataRecordCard title="Legacy Data Migration" status="error" lastModified="Yesterday" recordCount={0} />
      <DataRecordCard title="New Data Source" status="not-started" />
    </div>
  ),
};
