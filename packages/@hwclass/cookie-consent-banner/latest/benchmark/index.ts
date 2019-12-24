import * as pkg from '../src/index';
import { createSuite } from 'pika:benchmark';

export const suite = createSuite().add('BENCHMARK_NAME', () => {
  // 2. Benchmark some code!
  // EXAMPLE: Math.random() * Math.random();
});
