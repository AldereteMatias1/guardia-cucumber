import { Before } from '@cucumber/cucumber';
import { TestWorld } from './world';

Before(function (this: TestWorld) {
  this.reset();
});