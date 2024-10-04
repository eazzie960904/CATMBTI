import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { ResultData } from "../assets/resultData";
import KakaoShareButton from "../components/KakaoShareButton";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  color: #000;
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
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Result = () => {
  const [resultData, setResultData] = useState({});
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/");
  };
  useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result);
  }, [mbti]);
  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>결과보기</Title>
        <LogoImg>
          <img className="rounded-circle" src={ResultData[0].image} />
        </LogoImg>
        <Desc>
          예비집사님과 찰떡궁합인 고양이는
          <br />
          {resultData.best}형{resultData.name}입니다.
        </Desc>
        <ButtonGroup>
          <Button
            onClick={handleClickButton}
            style={{ background: "lightskyblue", border: "none" }}
          >
            테스트 다시 시작하기
          </Button>
          <KakaoShareButton data={resultData} />
        </ButtonGroup>
      </Contents>
    </Wrapper>
  );
};

export default Result;
