/* eslint-disable indent */
import styled from 'styled-components'

export default styled.div`
  display: flex;
  box-sizing: border-box;
  position: relative;
  text-align: start;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'flex-start'};
  padding: ${({ paddingStr }) => paddingStr || '0px'};
  box-shadow: ${({ shadow }) => shadow || 'none'};
  margin: ${({ marginStr }) => marginStr || '0px'};
  background: ${({ background }) => background || 'transparent'};
  pointer-events: ${({ pointerEvents }) => pointerEvents || 'auto'};
  color: ${({ color }) => color || 'black'};
  cursor: ${({ cursor }) => cursor || 'default'};
  opacity: ${({ opacity }) => opacity || 1};
  ${({ fillSpace }) =>
    fillSpace &&
    `
    height: 100%;
    width: 100%;
    flex: 1 1 100%;
  `}
  ${({ height }) =>
    height && `height: ${typeof height === 'number' ? `${height}px` : height}`};
  ${({ width }) =>
    width && `width: ${typeof width === 'number' ? `${width}px` : width}`};
  ${({ padding }) => padding && `padding: ${padding}`};
  ${({ margin }) => margin && `margin: ${margin}`};
  ${({ grow }) => grow && `flex-grow: ${grow}`};
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius}`};
  ${({ overflow }) => overflow && 'overflow: hidden'};
  ${({ border }) => border && `border: ${border}`};
  ${({ borderColor }) => borderColor && `borderColor: ${borderColor}`};
  ${({ borderTop }) => borderTop && `border-top: ${borderTop}`};
  ${({ borderBottom }) => borderBottom && `border-bottom: ${borderBottom}`};
  ${({ borderRight }) => borderRight && `border-right: ${borderRight}`};
  ${({ borderLeft }) => borderLeft && `border-left: ${borderLeft}`};
  ${({ scroll }) => scroll && 'overflow: auto'};
  ${({ flex }) => flex && `flex: ${flex}`};
  ${({ clickable }) =>
    clickable &&
    `
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    `};
    & > *:not(:last-child) {
    margin-${({ column }) => (column ? 'bottom' : 'right')}: ${({ spacing }) =>
      spacing || 0}px;
    margin-${({ column }) => (column ? 'right' : 'bottom')}: ${({
      wrap,
      spacing,
    }) => (wrap ? spacing || 0 : 0)}px;
  }
`
