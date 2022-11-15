import styled from "styled-components";
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  layout,
  LayoutProps,
  flexbox,
  FlexboxProps,
  border,
  BorderProps,
  shadow,
  ShadowProps,
  grid,
  GridProps,
} from "styled-system";

type BoxProps = ColorProps &
  SpaceProps &
  TypographyProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  ShadowProps &
  GridProps;

export const Box = styled.div<BoxProps>`
  ${color}
  ${space}
  ${typography}
  ${layout}
  ${flexbox}
  ${border}
  ${shadow}
  ${grid}
`;
