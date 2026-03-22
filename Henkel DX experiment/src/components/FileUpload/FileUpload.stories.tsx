import type { Meta, StoryObj } from '@storybook/react';
import { FileUpload } from './FileUpload';

const meta: Meta<typeof FileUpload> = {
  title: 'Components/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div style={{ maxWidth: '480px' }}><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Empty: Story = {
  args: { accept: '.csv, .xlsx, .json' },
};

export const Loading: Story = {
  args: {
    loading: true,
    loadingProgress: 65,
    loadingFileName: 'henkel-data-export-2024.csv',
  },
};

export const Disabled: Story = {
  args: { disabled: true },
};
