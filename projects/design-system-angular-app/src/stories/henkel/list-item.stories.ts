import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { ListItemComponent } from './list-item.component';

const meta: Meta<ListItemComponent> = {
  title: 'Henkel/ListItem',
  component: ListItemComponent,
  tags: ['autodocs'],
  args: {
    expandChange: fn(),
    deleteItem: fn(),
  },
};

export default meta;
type Story = StoryObj<ListItemComponent>;

export const Default: Story = {
  args: {
    title: 'RAQN Web – Consent Management',
    subtitle: 'Test subtext lorem ipsum dolor',
    expandable: true,
    deletable: true,
    expanded: false,
  },
};

export const Expanded: Story = {
  args: {
    title: 'RAQN Web – Consent Management',
    subtitle: 'Test subtext lorem ipsum dolor',
    expandable: true,
    deletable: true,
    expanded: true,
  },
};

export const TitleOnly: Story = {
  args: {
    title: 'SalonLab Core Acceleration',
    expandable: true,
    deletable: true,
    expanded: false,
  },
};

export const NoActions: Story = {
  args: {
    title: 'RAQN Web – Consent Management',
    subtitle: 'Test subtext lorem ipsum dolor',
    expandable: false,
    deletable: false,
  },
};

export const LongTitle: Story = {
  args: {
    title: 'This is a very long project title that should be truncated with ellipsis when it overflows',
    subtitle: 'Subtitle text',
    expandable: true,
    deletable: true,
  },
};
