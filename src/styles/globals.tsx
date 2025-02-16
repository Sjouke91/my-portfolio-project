'use client';
import styled from 'styled-components';

export const PageContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 16px;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 500px;
  width: 100%;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;

  &:focus {
    outline: none;
    border-color: #0070f3;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ProfileImageWrapper = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  margin-right: 16px;
  position: relative; // required for Next.js Image to work correctly with styled-components
`;

export const Info = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  h1 {
    margin-bottom: 0;
  }
`;

export const Tag = styled.span`
  background: #007bff;
  color: white;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 8px;
`;
