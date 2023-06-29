'use client';
import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 60vh;
  background-color: #eef7ff;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

`;

export const UpperContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  border-bottom: 1px solid #d7e1ea;
  position: relative;
  text-align: center;
  padding: 0 2rem;
`;

export const TopText = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #2845f2;
  margin-bottom: 0.5rem;
  border: 2px solid #2845f2;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border-top-left-radius: 1rem;
  padding: 0.2rem 1rem;
  width: fit-content;
`;  

export const HeroAsset = styled.div`
  position: absolute;
  top: 100px;
  right: 15px;
`;

export const FirstCall = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  color: #10374e;
  margin-bottom: 0.5rem;
  text-align: center;
  span {
    color: #2845f2;
    font-size: 4.7rem;
  }
`;

export const SecondCall = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  color: #10374e;
  margin-bottom: 0.5rem;
  text-align: center;
  span {
    font-weight: bold;
  }
`;

export const DownContainer = styled.div`
  padding:1rem;
`;