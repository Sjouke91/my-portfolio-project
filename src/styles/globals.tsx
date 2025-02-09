'use client';
import styled from 'styled-components';

export const PageContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
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
  flex-direction: column;
  h1 {
    font-size: 1.5rem;
    margin: 0;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #555;
    margin: 4px 0 0;
  }
`;
