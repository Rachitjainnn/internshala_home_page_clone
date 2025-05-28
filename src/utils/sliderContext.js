import { createContext, useContext } from 'react';

export const SliderContext = createContext();

export const useSliderContext = () => useContext(SliderContext);
