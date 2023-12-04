import GameSaving from '../GameSaving';
import GameSavingLoader from '../GameSavingLoader';
import read from '../reader';
import json from '../parser';

test('Создание экземпляра класса', () => {
  const data = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  const newGameSaving = new GameSaving(data);

  expect(newGameSaving).toEqual(data);
});

jest.mock('../reader'); // Мокаем функцию read
jest.mock('../parser'); // Мокаем функцию json

describe('GameSavingLoader', () => {
  test('Проверка вызова функций и возврата результата', async () => {
    const testData = 'test data';
    const parsedData = 'parsed data';
    read.mockResolvedValue(testData); // Мокаем разрешение Promise функции read
    json.mockResolvedValue(parsedData); // Мокаем разрешение Promise функции json

    const result = await GameSavingLoader.load();

    // Проверяем, что функция read была вызвана
    expect(read).toHaveBeenCalled();
    // Проверяем, что функция json была вызвана с переданными данными
    expect(json).toHaveBeenCalledWith(testData);
    // Проверяем, что результат равен ожидаемому разрешению функции json
    expect(result).toBe(parsedData);
  });
});
