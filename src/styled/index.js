import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  } 
  .ant-form {
    width: 100%;
  }
`;

export Flex from './flex';
export * from './typography';
export * as colors from './colors';
