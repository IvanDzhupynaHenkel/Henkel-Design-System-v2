import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { TabNavComponent } from './tab-nav.component';

const meta: Meta<TabNavComponent> = {
  title: 'Henkel/TabNav',
  component: TabNavComponent,
  tags: ['autodocs'],
  args: {
    tabChange: fn(),
  },
};

export default meta;
type Story = StoryObj<TabNavComponent>;

export const Default: Story = {
  args: {
    activeIndex: 0,
    tabs: [
      { label: 'Details / Components', icon: 'quick_reference_all' },
      { label: 'Sites', icon: 'adjust' },
      { label: 'History', icon: 'history' },
    ],
  },
};

export const SecondTabActive: Story = {
  args: {
    activeIndex: 1,
    tabs: [
      { label: 'Details / Components', icon: 'quick_reference_all' },
      { label: 'Sites', icon: 'adjust' },
      { label: 'History', icon: 'history' },
    ],
  },
};

export const ThirdTabActive: Story = {
  args: {
    activeIndex: 2,
    tabs: [
      { label: 'Details / Components', icon: 'quick_reference_all' },
      { label: 'Sites', icon: 'adjust' },
      { label: 'History', icon: 'history' },
    ],
  },
};

export const TwoTabs: Story = {
  args: {
    activeIndex: 0,
    tabs: [
      { label: 'Overview' },
      { label: 'Settings' },
    ],
  },
};
