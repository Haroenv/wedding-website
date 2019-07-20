import { English, Dutch } from './translations';
import ObjectFromEntries from 'object.fromentries';

test('English has all keys of Dutch', () => {
  expect(English).toEqual(
    expect.objectContaining(
      ObjectFromEntries(
        Object.keys(Dutch).map(key => [key, expect.any(String)])
      )
    )
  );
});

test('Dutch has all keys of English', () => {
  expect(Dutch).toEqual(
    expect.objectContaining(
      ObjectFromEntries(
        Object.keys(English).map(key => [key, expect.any(String)])
      )
    )
  );
});
