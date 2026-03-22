import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import { StatusBadge } from '../Badge/Badge';

const meta: Meta = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;

type DataRow = {
  sourceField: string;
  targetField: string;
  type: string;
  status: string;
};

const columns = [
  { key: 'sourceField', label: 'Source Field', sortable: true },
  { key: 'targetField', label: 'HAT Inno Value Tag', sortable: true },
  { key: 'type', label: 'Data Type' },
  {
    key: 'status',
    label: 'Status',
    render: (value: unknown) => <StatusBadge status={value as 'completed' | 'draft' | 'error'} />,
  },
];

const rows: DataRow[] = [
  { sourceField: 'product_id', targetField: 'ProductIdentifier', type: 'String', status: 'completed' },
  { sourceField: 'brand_name', targetField: 'BrandLabel', type: 'String', status: 'completed' },
  { sourceField: 'launch_date', targetField: 'MarketLaunchDate', type: 'Date', status: 'draft' },
  { sourceField: 'sku_count', targetField: 'SKUQuantity', type: 'Integer', status: 'error' },
  { sourceField: 'region_code', targetField: 'RegionIdentifier', type: 'String', status: 'draft' },
];

export const Default: StoryObj = {
  render: () => <Table columns={columns} rows={rows} />,
};

export const NoStripes: StoryObj = {
  render: () => <Table columns={columns} rows={rows} striped={false} />,
};

export const Empty: StoryObj = {
  render: () => <Table columns={columns} rows={[]} emptyMessage="No mappings configured yet" />,
};
