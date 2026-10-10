import { test } from 'node:test';
import assert from 'node:assert/strict';
import { soldiers } from './index';

test('Beauty Icon is included once with AK117 as her favorite gun', () => {
  const profiles = soldiers.filter(soldier => soldier.id === 'beauty-icon');
  assert.equal(profiles.length, 1);
  assert.equal(profiles[0]?.weapon, 'AK117');
});