import styled from 'styled-components';

export const Paragraph = styled.p`
  font-size: 1.5rem;
  font-family: ${({theme}) => theme.fontFamily.secondary};

  @media (min-width: 1440px) {
    font-size: 1.7rem;
  }
`;