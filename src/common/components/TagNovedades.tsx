import React from 'react';

import { Fiesta } from './Fiesta';

interface Props {
  className: any;
}

export const TagsNovedades = ({ className }: Props): JSX.Element => {
  return (
    <div className={`tags-novedades ${className}`}>
      <Fiesta />
    </div>
  );
};
