'use client';
import styled from 'styled-components';

interface WebnarsLinkProps {
  selected: boolean;
}


export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 800px;

  
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  height: 100%;
  margin-top: 10px;

`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #d7e1ea;
  padding: 3rem 0 1rem 0;
`;

export const WebinarsNavigation = styled.nav`
  display: flex;
  justify-content: flex-start;
  height: 30px;  
  gap: 10px;
`;

export const WebnarsLink = styled.a<WebnarsLinkProps>`
  font-size: 1rem;
  display: flex;
  align-items: center;
  font-weight: 500;
  color: ${({selected}) => selected ? '#fff' : '#193d53'};
  background-color: ${({selected}) => selected ? '#2845f2' : '#fff'};
  border: ${({selected}) => selected ? '2px solid #2845f2' : '2px solid #193d53'};
  border-radius: 1rem;
  padding: 5px 10px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${({selected}) => selected ? '#fff' : '#2845f2'};
    border: 2px solid #2845f2;
  }
`;

export const WebnarOrder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  gap: 10px;
  transition: all 0.2s ease-in-out;
`;

export const InputTitle = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: #10374e;
  margin-bottom: 0.5rem;
  text-align: center;
`;

export const InputSelect = styled.select`
  font-size: 1rem;
  font-weight: 500;
  height: 30px;
  color: #10374e;
  margin-bottom: 0.5rem;
  text-align: center;
  border: 1px solid #10374e;
  border-radius: 8px;
  padding: 0.2rem 0.7rem;
  width: fit-content;
  background-color: #fff;
`;

/* export const TopText = styled.p`
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
`; */