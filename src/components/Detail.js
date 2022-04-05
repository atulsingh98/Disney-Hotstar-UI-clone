import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import db from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { async } from "@firebase/util";

function Detail() {
  let { Id } = useParams();
  const [detail, setDetail] = useState({});
  useEffect(() => {
    async function getData() {
      const docRef = doc(db, "movies", Id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log(docSnap.data());
        setDetail(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    getData();
  }, [Id]);

  return (
    <Container>
      <Background>
        <img alt="title" src={detail.backgroundImg} />
        <ImageTitle>
          <img src={detail.titleImg} />
        </ImageTitle>
        <ContentMeta>
          <Controls>
            <Player>
              <img src="/images/play-icon-black.png" alt="" />
              <span>Play</span>
            </Player>
            <Trailer>
              <img src="/images/play-icon-white.png" alt="" />
              <span>trailer</span>
            </Trailer>
            <AddList>
              <span></span>
              <span></span>
            </AddList>
            <GroupWatch>
              <div>
                <img src="/images/group-icon.png" alt="" />
              </div>
            </GroupWatch>
          </Controls>
          <SubTitle>{detail.subTitle}</SubTitle>
          <Description> {detail.description}</Description>
        </ContentMeta>
      </Background>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  margin-top: 72px;
  left: 0;
  bottom: 0;
  padding: 0 calc(3.5vw+5px);
`;
const Background = styled.div`
  opacity: 0.8;
  z-index: -1;
  img {
    width: 100vw;
    height: calc(100vh - 80px);
    @media (max-width: 768px) {
      width: initial;
    }
  }
`;
const ImageTitle = styled.div`
  position: absolute;
  top: 80px;
  left: 90px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  img {
    max-width: 600px;
    max-height: 330px;
    height: initial;
  }
`;
const ContentMeta = styled.div`
  max-width: 874px;
  position: absolute;
  top: 50%;
`;
const Controls = styled.div`
  display: flex;
`;
const Player = styled.button`
  cursor: pointer;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  margin: 0 0 0 5rem;
  border-radius: 8px;
  letter-spacing: 1.5px;
  text-align: center;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  border: none;
  padding: 5px 30px;
  img {
    height: 32px;
    width: 32px;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 5 22px;
    font-size: 12px;
    img {
      width: 25px;
    }
  }
`;
const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255);
  margin: 0 0 0 1.1rem;
  color: white;
`;
const AddList = styled.div`
  margin: 0 1rem;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.6);
  border: 2px solid white;
  cursor: pointer;

  span {
    background-color: rgba(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }
    &:nth-child(2) {
      height: 16px;
      transform: translate(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;
const GroupWatch = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.6);
  border: 2px solid white;
  img {
    width: 100%;
    height: 100%;
  }
`;
const SubTitle = styled.div`
  margin: 1.5rem 0 0 5rem;
  color: rgba(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const Description = styled.div`
  margin: 0 0 0 5rem;
  line-height: 1.4;
  font-size: 20px;
  color: rgba(249, 249, 249);
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export default Detail;
