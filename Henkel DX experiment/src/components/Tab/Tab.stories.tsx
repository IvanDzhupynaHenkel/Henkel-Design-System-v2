import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Tabs } from './Tab';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const items = [
  { id: 'all', label: 'Show All', count: 12 },
  { id: 'completed', label: 'Completed', count: 7 },
  { id: 'drafts', label: 'Drafts', count: 5 },
];

export const Default: Story = {
  render: () => {
    const [active, setActive] = useState('all');
    return <Tabs items={items} activeId={active} onChange={setActive} />;
  },
};

export const WithCounts: Story = {
  render: () => {
    const [active, setActive] = useState('completed');
    return <Tabs items={items} activeId={active} onChange={setActive} />;
  },
};
