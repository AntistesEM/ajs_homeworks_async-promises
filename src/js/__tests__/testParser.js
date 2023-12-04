import json from '../parser';

test('Тест на успешное получение строки', () => {
  const data = new Uint16Array([104, 101, 108, 108, 111]);
  return json(data.buffer)
    .then((result) => {
      // Проверяем, что результат является строкой
      expect(typeof result).toBe('string');
      // Проверяем, что полученная строка является правильным преобразованием ArrayBuffer
      expect(result).toBe('hello');
    });
});

test('Тест для проверки задержки в 500 миллисекунд', () => {
  const data = new Uint16Array([104, 101, 108, 108, 111]);
  const startTime = Date.now();

  return json(data.buffer)
    .then(() => {
      const endTime = Date.now();
      const elapsedTime = endTime - startTime;

      // Проверяем, что время выполнения функции равно или превышает 500 миллисекунд
      expect(elapsedTime).toBeGreaterThanOrEqual(500);
    });
});

test('Тест на обработку ошибки (например, если data не является ArrayBuffer)', () => {
  const notAnArrayBuffer = [104, 101, 108, 108, 111];

  return json(notAnArrayBuffer)
    .catch((error) => {
      // Проверяем, что возвращается ошибка
      expect(error).toBeInstanceOf(Error);
    });
});
