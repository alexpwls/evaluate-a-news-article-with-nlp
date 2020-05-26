import { randomArticle } from '../client/js/randomArticle'

test('Check if function randomArticle exists', () => {
  expect(randomArticle).toBeDefined();
});