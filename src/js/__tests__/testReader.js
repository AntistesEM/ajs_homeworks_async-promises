import read from '../reader';

describe('read', () => {
  test('Проверяем, что прочитает файл и вернет буфер с данными', async () => {
    const result = await read();

    // Проверяем, что результат является экземпляром ArrayBuffer
    expect(result).toBeInstanceOf(ArrayBuffer);

    // Получаем данные из буфера
    const dataView = new Uint16Array(result);
    const data = String.fromCharCode(...dataView);

    // Проверяем, что данные соответствуют ожидаемому значению
    expect(data).toEqual('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
  });
});
