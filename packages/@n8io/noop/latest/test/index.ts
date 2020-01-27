import * as pkg from '../src';
import { Spec } from 'pika:test';
import { assert, eq } from 'pika:assert';

// Create a Spec instance that represents our spec.
export const spec = new Spec();
// "describe" and "it" methods work as you would expect,
// similar to writing a test in Mocha, Jasmine or Jest.
const { describe, it } = spec;

const { noop } = pkg;

// Write your tests!
describe('noop', () => {
  it('should return undefined', () => {
    assert(noop() === undefined);
  });
});
