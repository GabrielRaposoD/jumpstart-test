import styled from 'styled-components';

const CardStyle = styled.div`
  position: relative;
  width: 305px;
  margin-top: 30px;
  padding: 30px;
  border-bottom: 4px solid #fededd;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const CardTitle = styled.h3`
  user-select: none;
  margin-top: 10px;
  font-size: 16px;
  font-family: 'Avenir', sans-serif;
  font-style: normal;
  font-weight: 800;
  line-height: 22px;
  color: #0f2137;
`;

const CardDescription = styled.p`
  user-select: none;
  margin-top: 10px;
  font-size: 12px;
  font-family: 'Avenir', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  color: #343d48;
`;

const CardButton = styled.button`
  user-select: none;
  border-radius: 5px;
  border: 1px solid #8c14fc;
  width: 100%;
  padding: 9px 15px;
  margin-top: 54px;
  font-size: 10px;
  font-family: 'Avenir', sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
  color: #8c14fc;
`;

export { CardStyle, CardTitle, CardButton, CardDescription };
