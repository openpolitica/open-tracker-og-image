import styled from 'styled-components';

export const Title = styled('h1')`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
`;

export const LogoImg = styled.img`
  cursor: pointer;
  max-width: 200px;
`;
