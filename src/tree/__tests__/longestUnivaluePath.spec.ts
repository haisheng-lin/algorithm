import longestUnivaluePath from '../longestUnivaluePath';
import { buildTreeFromArray } from '../uitls';

describe('longestUnivaluePath', () => {
  test('test longestUnivaluePath', () => {
    const result = longestUnivaluePath(buildTreeFromArray([5, 4, 5, 1, 1, 5]));
    expect(result).toEqual(2);
  });
});
