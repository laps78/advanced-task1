import orderByProps from '../app';

test('test hint', () => {
  const object = {
    name: 'мечник',
    level: 2,
    health: 10,
    attack: 80,
    defence: 40,
  };

  const keys = [
    'name',
    'level',
  ];

  const etalonArray = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];

  expect(orderByProps(object, keys)).toEqual(etalonArray);
});
