import { Dimensions } from 'react-native';

// Check if the device in landscape mode
export const isLandscape = () => {
    const dim = Dimensions.get('screen');
    return dim.width >= dim.height;
};