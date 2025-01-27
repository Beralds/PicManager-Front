import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import CardOptions from './../cardOptions';
import { TooltipProvider } from '@/components/ui/tooltip';

describe('CardOptions Component', () => {
const mockItemId = 123;
const mockHandleViewItem = vi.fn();
const mockHandleEditItem = vi.fn();
const mockHandleDeleteItem = vi.fn();

it('renders 3 buttons when allowChanges is true', async () => {
  render(
    <TooltipProvider>
      <CardOptions
        itemId={mockItemId}
        cardType="photo"
        handleViewItem={mockHandleViewItem}
        handleEditItem={mockHandleEditItem}
        handleDeleteItem={mockHandleDeleteItem}
        allowChanges={true}
      />
    </TooltipProvider>
  );

  const buttons = screen.getAllByRole('button');
  expect(buttons.length).toBe(3);
});

it('calls handleViewItem when view button is clicked', () => {
  render(
    <TooltipProvider>
      <CardOptions
        itemId={mockItemId}
        cardType="album"
        handleViewItem={mockHandleViewItem}
        handleEditItem={mockHandleEditItem}
        handleDeleteItem={mockHandleDeleteItem}
        allowChanges={false}
      />
    </TooltipProvider>
  );

  const buttons = screen.getAllByRole('button');
  const viewButton = buttons[0];
  fireEvent.click(viewButton);
  expect(mockHandleViewItem).toHaveBeenCalledWith(mockItemId);
  expect(mockHandleViewItem).toHaveBeenCalledTimes(1);
});

it('does not render edit and delete buttons when allowChanges is false', () => {
  render(
    <TooltipProvider>
      <CardOptions
        itemId={mockItemId}
        cardType="photo"
        handleViewItem={mockHandleViewItem}
        handleEditItem={mockHandleEditItem}
        handleDeleteItem={mockHandleDeleteItem}
        allowChanges={false}
      />
    </TooltipProvider>
  );

  const buttons = screen.getAllByRole('button');
  expect(buttons.length).toBe(1);
  expect(screen.queryByRole('button', { name: /edit photo/i })).not.toBeInTheDocument();
  expect(screen.queryByRole('button', { name: /delete photo/i })).not.toBeInTheDocument();
});

});