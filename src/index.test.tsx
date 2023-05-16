import { render } from '@testing-library/react';
import Timeout from './index';

test(`component could be updated and unmounted without errors`, () => {
  const { unmount, rerender } = render(
    <Timeout delay={200} onElapsed={() => {}} />,
  );
  expect(() => {
    rerender(<Timeout delay={200} onElapsed={() => {}} />);
    unmount();
  }).not.toThrow();
});

test('onElapsed should not be called when delay < 0', async () => {
  const mockOnElapsed = jest.fn();
  render(<Timeout delay={-100} onElapsed={mockOnElapsed} />);

  return new Promise<void>((resolve) => {
    setTimeout(() => {
      expect(mockOnElapsed).toBeCalledTimes(0);
      resolve();
    }, 100);
  });
});

test('onElapsed should be called when delay = 0', async () => {
  const mockOnElapsed = jest.fn();
  render(<Timeout delay={0} onElapsed={mockOnElapsed} />);

  return new Promise<void>((resolve) => {
    setTimeout(() => {
      expect(mockOnElapsed).toBeCalledTimes(1);
      resolve();
    }, 100);
  });
});

test('onElapsed should be called when delay > 0', async () => {
  const mockOnElapsed = jest.fn();
  render(<Timeout delay={100} onElapsed={mockOnElapsed} />);

  return new Promise<void>((resolve) => {
    setTimeout(() => {
      expect(mockOnElapsed).toBeCalledTimes(1);
      resolve();
    }, 200);
  });
});

test('onElapsed should not be called after unmounted', async () => {
  const mockOnElapsed = jest.fn();
  const { unmount } = render(<Timeout delay={200} onElapsed={mockOnElapsed} />);

  return new Promise<void>((resolve) => {
    setTimeout(() => {
      unmount();
      expect(mockOnElapsed).toBeCalledTimes(0);
      resolve();
    }, 100);
  });
});

test('onElapsed should be called after rerender', async () => {
  const delay = 200;
  const mockOnElapsedOld = jest.fn();
  const mockOnElapsedNew = jest.fn();
  const { rerender } = render(
    <Timeout delay={delay} onElapsed={mockOnElapsedOld} />,
  );

  setTimeout(() => {
    rerender(<Timeout delay={delay} onElapsed={mockOnElapsedNew} />);
  }, 100);

  return new Promise<void>((resolve) => {
    setTimeout(() => {
      expect(mockOnElapsedOld).toBeCalledTimes(0);
      expect(mockOnElapsedNew).toBeCalledTimes(1);
      resolve();
    }, 300);
  });
});
