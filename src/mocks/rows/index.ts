const createRandomName = () => {
  const names = [
    'Jon',
    'Arya',
    'Daenerys',
    'Cersei',
    'Jaime',
    'Sansa',
    'Tyrion',
    'Bran',
    'Samwell',
    'Eddard',
    'Robert',
  ];
  const randomIndex = Math.floor(Math.random() * names.length);

  return names[randomIndex];
};

const createRandomLastName = () => {
  const names = [
    'Snow',
    'Lannister',
    'Stark',
    'Targaryen',
    'Melisandre',
    'Clifford',
    'Frances',
    'Roxie',
  ];
  const randomIndex = Math.floor(Math.random() * names.length);

  return names[randomIndex];
};

const createRandomRows = (rows: number) => {
  const rowsToReturn = [];

  for (let i = 0; i < rows; i++) {
    rowsToReturn.push({
      id: i + 1,
      lastName: createRandomLastName(),
      firstName: createRandomName(),
      age: Math.floor(Math.random() * 100),
    });
  }

  return rowsToReturn;
};

export const rows = createRandomRows(100);
