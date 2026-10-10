import { test } from 'node:test';
import assert from 'node:assert/strict';
import { soldiers } from './index';
import { tierData } from '../tiers';
import { getSoldierByName } from '../../utils/soldierMapping';

for (const [id, weapon] of [
  ['runtown', 'AK117'], ['dcpikin', 'Type 19'], ['vien77', 'Type 19'],
  ['mamba', 'KRM-262'], ['btg', 'Type 19'], ['lamar', 'HS0405'],
  ['harris', 'HS0405'], ['sadia', 'AK117']
]) {
  test(`${id} has one profile with favorite gun ${weapon}`, () => {
    const profiles = soldiers.filter(soldier => soldier.id === id);
    assert.equal(profiles.length, 1);
    assert.equal(profiles[0]?.weapon, weapon);
    assert.ok(profiles[0]?.imageUrl);
  });
}

test('Lamar and Harris are separate profiles using the sixth supplied picture', () => {
  const lamar = soldiers.find(soldier => soldier.id === 'lamar');
  const harris = soldiers.find(soldier => soldier.id === 'harris');
  assert.ok(lamar);
  assert.ok(harris);
  assert.notEqual(lamar.id, harris.id);
  assert.equal(lamar.imageUrl, harris.imageUrl);
});

test('existing roster aliases resolve to their new profiles without duplicate tier entries', () => {
  for (const [name, id, tier] of [
    ['ѲǤゝRUNTOWN', 'runtown', 3], ['ѲǤゝDCPIKIN', 'dcpikin', 3],
    ['ѲǤゝK^VIEN77', 'vien77', 4], ['ѲǤゝ1BTG', 'btg', 2], ['ѲǤゝHARRIS', 'harris', 3]
  ]) {
    assert.equal(getSoldierByName(name)?.id, id);
    const entries = tierData.flatMap(group => group.soldiers).filter(member => member.name === name);
    assert.equal(entries.length, 1);
    assert.equal(entries[0]?.profileId, id);
    assert.ok(tierData.find(group => group.id === tier)?.soldiers.some(member => member.name === name));
  }
});