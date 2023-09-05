import _ from 'lodash';

import { RowType } from 'src/interfaces';

export const filterRowsByText = (rows: RowType[], text: string) => {
  const filteredRows = rows.filter((row) => {
    const objectValues = _.values(row);
    const stringValues = objectValues.filter((value) => _.isString(value)) as string[];
    const valuesToLowerCase = stringValues.map((value) => value.toLowerCase());

    return valuesToLowerCase
      .map((value) => value.startsWith(text.toLowerCase()))
      .includes(true);
  });

  return filteredRows;
};
