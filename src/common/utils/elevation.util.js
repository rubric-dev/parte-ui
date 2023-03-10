import { ELEVATION } from '../../@foundations/Elevation';
export const getElevation = (elevation) => {
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
