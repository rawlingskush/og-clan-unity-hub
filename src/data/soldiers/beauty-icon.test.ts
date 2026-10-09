import { expect, test } from 'bun:test';
import { soldiers } from './index';

test('Beauty Icon is included once with AK117 as her favorite gun', () => {
  const profiles = soldiers.filter(soldier => soldier.id === 'beauty-icon');
  expect(profiles).toHaveLength(1);
  expect(profiles[0]?.weapon).toBe('AK117');
});