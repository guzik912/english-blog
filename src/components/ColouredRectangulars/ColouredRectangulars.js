import styled, { css } from 'styled-components';

export const ColouredRectangulars = styled.div`
  position:absolute;
  z-index: 99;
  
  ${({blue}) => blue && css`
    background: ${({theme}) => theme.fontColorBlue};
    top: 0;
    right:0;
    width: 1rem;
    height: 100%;
  `};

  ${({cream}) => cream && css`
    background: ${({theme}) => theme.fontColorCream};
    top: 0;
    left:0;
    width: 100%;
    height: 1rem;
  `};

  ${({gray}) => gray && css`
    background: ${({theme}) => theme.fontColorGray};
    top: 0;
    left:0;
    width: 1rem;
    height: 100%;
  `};

  ${({turquoise}) => turquoise && css`
    background: ${({theme}) => theme.fontColorTurquoise};
    top: 0;
    left:0;
    width: 100%;
    height: 1rem;
  `};

  ${({smallerVerticalFirst}) => smallerVerticalFirst && css`
    background: ${({theme}) => theme.fontColorBlue};
    width: 1rem;
    height: 10rem;
    top: 5rem;
    left: 0;
  `}

  ${({smallerVerticalSecond}) => smallerVerticalSecond && css`
    background: ${({theme}) => theme.fontColorCream};
    width: 1rem;
    height: 15rem;
    top: 15rem;
    right: 0;
  `}

  ${({smallerVerticalThird}) => smallerVerticalThird && css`
    background: ${({theme}) => theme.fontColorGray};
    width: 1rem;
    height: 10rem;
    bottom: 5rem;
    left: 0;
  `}

  ${({smallerHorizontal}) => smallerHorizontal && css`
    background: ${({theme}) => theme.fontColorTurquoise};
    width: 20rem;
    height: 1rem; 
    bottom: 0;
    right: 1rem;
  `} 
`;