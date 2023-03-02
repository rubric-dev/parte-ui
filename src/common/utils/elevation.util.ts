import { ELEVATION } from '../../@foundations/Elevation';
import { Elevation } from '../../@foundations/Elevation/elevation';

export const getElevation = (elevation: Elevation) => {
  switch (elevation) {
    case 0:
      return ELEVATION.elevation0;
    case 1:
      return ELEVATION.elevation1;
    case 2:
      return ELEVATION.elevation2;
    case 3:
      return ELEVATION.elevation3;
  }
};
