import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  color: lightblue;
`;

const Header = styled.div`
  font-size: 40px;
`;

const Contents = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30px;
  margin: 20px 0 10px;
`;

const LogoImg = styled.div`
  & > img {
    width: 350px;
    height: 350px;
    border: 4px solid lightblue;
  }
`;

const Desc = styled.div`
  margin: 10px 0;
  font-size: 20px;
`;

const Home = () => {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/question");
  };
  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>나랑 잘 맞는 주인님은?</Title>
        <LogoImg>
          <img className="rounded-circle" src="/cat/ggompang.jpeg" />
        </LogoImg>
        <Desc>MBTI를 기반으로 나랑 잘 맞는 고양이😻찾기</Desc>
        <Button
          onClick={handleClickButton}
          style={{ background: "lightskyblue", border: "none" }}                                   
        >
          테스트시작하기
        </Button>
      </Contents>
    </Wrapper>
  );
};

export default Home;
