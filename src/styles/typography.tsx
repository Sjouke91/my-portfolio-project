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

export const Text = styled.p<TextProps>`
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

export const Title = styled.h1`
  font-size: 32px;
  color: #333;
  margin-bottom: 16px;
`;

export const Subtitle = styled.h2`
  font-size: 28px;
  color: #333;
`;
