// ============================================== //
//       Run this test using `npm run test`       //
// ============================================== //
import { test, expect } from 'vitest';
import { checkDate } from '../src/scholarshipApp/checkDate';

test('returns false for September 30', () => {
  const date = new Date();

  date.setDate(30);
  date.setMonth(8);

  expect(checkDate(date)).toBe(false);
});

test('returns true for October 1', () => {
  const date = new Date();

  date.setDate(1);
  date.setMonth(9);

  expect(checkDate(date)).toBe(true);
});

test('returns true for May 1', () => {
  const date = new Date();

  date.setDate(1);
  date.setMonth(4);

  expect(checkDate(date)).toBe(true);
});

test('returns false for May 2', () => {
  const date = new Date();

  date.setDate(2);
  date.setMonth(4);

  expect(checkDate(date)).toBe(false);
});
