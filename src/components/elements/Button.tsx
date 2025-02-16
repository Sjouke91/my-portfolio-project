'use client';
import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

type Variant = 'primary' | 'secondary' | 'outline' | 'link';
type Size = 'small' | 'medium' | 'large';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  size,
  ...props
}) => {
  return (
    <StyledButton variant={variant} size={size} {...props}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  ${(props) =>
    props.size === 'small' &&
    css`
      padding: 8px 16px;
      font-size: 14px;
    `}

  ${(props) =>
    props.size === 'medium' &&
    css`
      padding: 12px 24px;
      font-size: 16px;
    `}

  ${(props) =>
    props.size === 'large' &&
    css`
      padding: 16px 32px;
      font-size: 18px;
    `}

  ${(props) =>
    props.variant === 'primary' &&
    css`
      background-color: #4f46e5;
      color: white;

      &:hover {
        background-color: #4338ca;
      }
    `}

  ${(props) =>
    props.variant === 'secondary' &&
    css`
      background-color: #e5e7eb;
      color: #111827;

      &:hover {
        background-color: #d1d5db;
      }
    `}

  ${(props) =>
    props.variant === 'outline' &&
    css`
      background-color: transparent;
      border: 2px solid #4f46e5;
      color: #4f46e5;

      &:hover {
        background-color: #eef2ff;
      }
    `}

      ${(props) =>
    props.variant === 'link' &&
    css`
      background-color: transparent;
      border: none;
      color: #4f46e5;
      padding: 8px 0;
      width: fit-content;

      &:hover {
        text-decoration: underline;
      }
    `}
`;

export default Button;
