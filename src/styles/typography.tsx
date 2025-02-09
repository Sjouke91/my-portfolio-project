'use client';
import styled from 'styled-components';

type TextSize = 'small' | 'medium' | 'large' | 'xlarge';
type TextWeight = 'normal' | 'bold' | 'bolder' | 'lighter' | number;

interface TextProps {
  size?: TextSize;
  color?: string;
  weight?: TextWeight;
  children: React.ReactNode;
}

const Text = styled.p<TextProps>`
  font-size: ${({ size = 'medium' }) => {
    switch (size) {
      case 'small':
        return '12px';
      case 'medium':
        return '16px';
      case 'large':
        return '20px';
      case 'xlarge':
        return '24px';
      default:
        return '14px';
    }
  }};
  font-weight: ${({ weight = 'normal' }) => weight};
  color: ${({ color = '#000' }) => color};
  line-height: 1.5;
  margin: 0;
`;

export const DynamicText: React.FC<TextProps> = ({
  size = 'medium',
  children,
  ...props
}) => {
  return (
    <Text size={size} {...props}>
      {children}
    </Text>
  );
};
