import * as pkg from '../src';
import { Spec } from 'pika:test';
import { assert, eq } from 'pika:assert';

export const spec = new Spec();

const { describe, it } = spec;

// Write your tests!
describe('package', () => {
  it('should export a module object', () => {
    assert(typeof pkg === 'object');
  });

  it('should return a html containing the consent text', () => {
    const banner = pkg.main();
    assert(banner === '<div>Cookie consent banner here.</div>');
  });
});
