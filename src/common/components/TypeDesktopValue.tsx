import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import { TagsNovedades } from './TagNovedades';
interface Props {
  imagenClassName: any;
  CONTClassName: any;
  divClassName: any;
  divClassNameOverride: any;
}

export const TypeDesktopValue = ({
  imagenClassName,
  CONTClassName,
  divClassName,
  divClassNameOverride,
}: Props): JSX.Element => {
  return (
    <div className="type-desktop-value">
      <div className={`imagen ${imagenClassName}`}>
        <TagsNovedades className="tags-novedades-instance" />
      </div>
      <div className={`CONT ${CONTClassName}`}>
        <div className={`text-wrapper ${divClassName}`}>Título</div>
        <div className="div">
          <div className="icon-fecha">
            <CalendarMonthIcon />
          </div>
          <div className="label">
            <div className="text-wrapper">Día XX de mes</div>
          </div>
          <div className={`text-wrapper-2 ${divClassNameOverride}`}>Día XX de mes</div>
        </div>
      </div>
    </div>
  );
};
