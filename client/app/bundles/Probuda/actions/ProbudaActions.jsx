export const NAME = 'NAME';

export function name(name) {
  return {
    type: NAME,
    name: name
  };
}