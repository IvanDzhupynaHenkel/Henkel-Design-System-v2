import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { FilterPanelComponent } from './filter-panel.component';

const meta: Meta<FilterPanelComponent> = {
  title: 'Henkel/FilterPanel',
  component: FilterPanelComponent,
  tags: ['autodocs'],
  args: {
    optionsChange: fn(),
    expandedChange: fn(),
  },
};

export default meta;
type Story = StoryObj<FilterPanelComponent>;

export const Default: Story = {
  args: {
    title: 'Filter by Initiatives',
    expanded: true,
    options: [
      { label: 'SalonLab Core Acceleration', checked: false },
      { label: 'Salonory USA / Europe', checked: false },
      { label: 'Project name', checked: false },
      { label: 'Project name', checked: false },
      { label: 'Project name', checked: false },
      { label: 'Project name', checked: false },
    ],
    maxVisible: 5,
  },
};

export const WithCheckedItems: Story = {
  args: {
    title: 'Filter by Initiatives',
    expanded: true,
    options: [
      { label: 'SalonLab Core Acceleration', checked: true },
      { label: 'Salonory USA / Europe', checked: true },
      { label: 'Project name', checked: false },
      { label: 'Project name', checked: false },
    ],
    maxVisible: 5,
  },
};

export const Collapsed: Story = {
  args: {
    title: 'Filter by Initiatives',
    expanded: false,
    options: [
      { label: 'SalonLab Core Acceleration', checked: false },
      { label: 'Salonory USA / Europe', checked: false },
    ],
  },
};

export const ManyOptions: Story = {
  args: {
    title: 'Filter by Region',
    expanded: true,
    maxVisible: 4,
    options: [
      { label: 'Europe', checked: false },
      { label: 'North America', checked: true },
      { label: 'Latin America', checked: false },
      { label: 'Asia Pacific', checked: false },
      { label: 'Middle East & Africa', checked: false },
      { label: 'Germany', checked: false },
    ],
  },
};
