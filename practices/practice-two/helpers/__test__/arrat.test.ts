import { findItemInListByAnyField } from '@/helpers';

interface Item {
  id: string;
  name: string;
  category: string;
}

describe('findItemInListByAnyField', () => {
  const items: Item[] = [
    { id: '1', name: 'Item One', category: 'A' },
    { id: '2', name: 'Item Two', category: 'B' },
    { id: '3', name: 'Item Three', category: 'A' },
  ];

  test('finds an item by a single field', () => {
    const result = findItemInListByAnyField({
      list: items,
      field: { id: '2' },
    });

    expect(result).toEqual({ id: '2', name: 'Item Two', category: 'B' });
  });

  test('finds an item by multiple fields', () => {
    const result = findItemInListByAnyField({
      list: items,
      field: { id: '3', category: 'A' },
    });

    expect(result).toEqual({ id: '3', name: 'Item Three', category: 'A' });
  });

  test('returns undefined if no item matches', () => {
    const result = findItemInListByAnyField({
      list: items,
      field: { id: '4' },
    });

    expect(result).toBeUndefined();
  });

  test('returns undefined if field is empty', () => {
    const result = findItemInListByAnyField({ list: items, field: {} });

    expect(result).toBeUndefined(); // No item matches if field is empty
  });

  test('handles partial match on fields', () => {
    const result = findItemInListByAnyField({
      list: items,
      field: { name: 'Item One' },
    });

    expect(result).toEqual({ id: '1', name: 'Item One', category: 'A' });
  });
});
