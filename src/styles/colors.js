import { darken, lighten } from 'polished';

const primary = '#49265c';
const secondary = '#ff8b0d';
const warn = '#dddd33';

export default {
  primary,
  primaryLight: lighten(0.1, primary),
  primaryDark: darken(0.1, primary),
  secondary,
  secondaryLight: lighten(0.1, secondary),
  secondaryDark: darken(0.1, secondary),
  warn,
};
