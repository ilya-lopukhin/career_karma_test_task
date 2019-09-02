import styled from 'styled-components';

import * as colors from './colors';

const getProp = (prop, _default = 'inherit') => props => props[prop] || _default;

export const Text = styled.span`
  font-family: ${getProp('family', 'Poppins')}, sans-serif;
  color: ${getProp('color', colors.text.dark)};
  line-height: ${getProp('line')};
  font-size: ${getProp('size', '14px')};
  font-weight: ${getProp('weight', 300)};
`;

Text.Light = styled(Text).attrs({ color: colors.text.light })``;

Text.Lightest = styled(Text).attrs({ color: colors.text.lightest })``;

Text.Bold = styled(Text).attrs({ weight: 700 })``;
