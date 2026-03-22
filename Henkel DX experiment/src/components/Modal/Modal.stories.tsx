import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Modal, ModalActions } from './Modal';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal
          open={open}
          title="Create Data Transfer"
          subtitle="Set up a new data transfer record"
          onClose={() => setOpen(false)}
          footer={
            <ModalActions
              onCancel={() => setOpen(false)}
              onSaveDraft={() => setOpen(false)}
              onContinue={() => setOpen(false)}
            />
          }
        >
          <Input label="Data source name" placeholder="Enter name…" required />
        </Modal>
      </>
    );
  },
};

export const WithStepper: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal with Stepper</Button>
        <Modal
          open={open}
          title="Data Mapping"
          subtitle="Map source fields to HAT Inno Value Tags"
          steps={[
            { id: '1', label: 'Upload', status: 'completed' },
            { id: '2', label: 'Mapping', status: 'active' },
            { id: '3', label: 'Review', status: 'pending' },
          ]}
          onClose={() => setOpen(false)}
          footer={
            <ModalActions
              onCancel={() => setOpen(false)}
              onSaveDraft={() => setOpen(false)}
              onContinue={() => setOpen(false)}
              continueLabel="Continue to Review"
            />
          }
        >
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-body)' }}>
            Configure field mappings for your data source.
          </p>
        </Modal>
      </>
    );
  },
};
