import { English, Dutch } from './translations';

test('English has all keys of Dutch', () => {
  expect(English).toEqual(
    expect.objectContaining(
      Object.fromEntries(
        Object.keys(Dutch).map(key => [key, expect.any(String)])
      )
    )
  );
});

test('Dutch has all keys of English', () => {
  expect(Dutch).toEqual(
    expect.objectContaining(
      Object.fromEntries(
        Object.keys(English).map(key => [key, expect.any(String)])
      )
    )
  );
});
