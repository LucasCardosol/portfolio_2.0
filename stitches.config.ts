import { createStitches } from '@stitches/react';

export const { styled, getCssText , globalCss , css} = createStitches({
  theme: {
    fonts: {
        inter: "'Inter', sans-serif",
      
    },
    colors: {
      white: '#fff',
      background: '#15161A',
      text:'rgba(255, 255, 255, 0.6)',
      strong: 'rgba(255, 255, 255, 1)',
    },
    fontSizes: {
      'lg': '5rem',
      'md_1': '3rem',
      'md_2': '2.5rem',
      'sm_1': '1.25rem',
      'sm_2': '1.125rem',
      'button': '0.875rem',  
    },
  },
});