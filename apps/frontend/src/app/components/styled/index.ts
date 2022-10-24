import styled from 'styled-components';

interface TextProps {
  size?: string;
  weight?: string;
  active?: boolean;
  borderBottom?: string;
  cursor?: string;
  color?: string;
  margin?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
}

const Text = styled.p<TextProps>`
  color: ${(props) => props.color || 'black'};
  font-size: ${(props) => props.size || '14px'};
  font-weight: ${(props) => props.weight || '400'};
  text-align: left;
  padding-left: ${(props) => props.paddingLeft || '0'};
  padding-right: ${(props) => props.paddingRight || '0'};
  padding-top: ${(props) => props.paddingTop || '0'};
  padding-bottom: ${(props) => props.paddingBottom || '0'};
  border-bottom: ${(props) => (props.active ? '3px solid #0abb87' : 'none')};
  padding-bottom: ${(props) => props.borderBottom || '0'};
  cursor: ${(props) => props.cursor || 'default'};
`;

const Span = styled.span<TextProps>`
  color: ${(props) => props.color || 'black'};
  font-size: ${(props) => props.size || '14px'};
  font-weight: ${(props) => props.weight || '400'};
  text-align: left;
  padding-left: ${(props) => props.paddingLeft || '0'};
  padding-right: ${(props) => props.paddingRight || '0'};
  padding-top: ${(props) => props.paddingTop || '0'};
  padding-bottom: ${(props) => props.paddingBottom || '0'};
  border-bottom: ${(props) => (props.active ? '3px solid #0abb87' : 'none')};
  padding-bottom: ${(props) => props.borderBottom || '0'};
  cursor: ${(props) => props.cursor || 'default'};
`;

interface ButtonProps {
  background?: string;
  color?: string;
  border?: string;
  width?: string;
}

const Button = styled.button<ButtonProps>`
  position: relative;
  padding: 7px 15px;
  background-color: ${(props) => props.background || '#0ABB87'};
  color: ${(props) => props.color || '#262d34'};
  border-radius: 5px;
  border: ${(props) => props.border || 'none'};
  cursor: pointer;
  width: ${(props) => props.width || 'auto'};
`;

export { Text, Span, Button };
