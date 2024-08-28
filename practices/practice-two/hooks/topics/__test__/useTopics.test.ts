import { renderHook, act } from '@testing-library/react';

// Hooks
import { useTopics } from '@/hooks';
// Models
import { Topics } from '@/models';

const sampleTopics: Topics = [
  { id: '1', label: 'Topic 1' },
  { id: '2', label: 'Topic 2' },
  { id: '3', label: 'Topic 3' },
];

describe('useTopics', () => {
  test('should initialize with the first topic', () => {
    const { result } = renderHook(() => useTopics(sampleTopics));

    expect(result.current.topic).toEqual(sampleTopics[0]);
  });

  test('should change topic correctly', () => {
    const { result } = renderHook(() => useTopics(sampleTopics));

    act(() => {
      result.current.handleChangeTopic('2');
    });

    expect(result.current.topic).toEqual(sampleTopics[1]);
  });

  test('should not change topic if id is not found', () => {
    const { result } = renderHook(() => useTopics(sampleTopics));

    act(() => {
      result.current.handleChangeTopic('non-existent-id');
    });

    expect(result.current.topic).toEqual(sampleTopics[0]);
  });

  test('should handle empty topics list gracefully', () => {
    const emptyTopics: Topics = [];
    const { result } = renderHook(() => useTopics(emptyTopics));

    expect(result.current.topic).toBeUndefined();
  });
});
