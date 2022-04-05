import React from "react";
import styled from "styled-components";
function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="\images\viewers-disney.png" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src="\videos\1564674844-disney.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="\images\viewers-marvel.png" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src="\videos\1564676115-marvel.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="\images\viewers-national.png" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source
            src="\videos\1564676296-national-geographic.mp4"
            type="video/mp4"
          />
        </video>
      </Wrap>

      <Wrap>
        <img src="\images\viewers-pixar.png" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src="\videos\1564676714-pixar.mp4" type="video/mp4" />
        </video>
      </Wrap>

      <Wrap>
        <img src="\images\viewers-starwars.png" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src="\videos\1608229455-star-wars.mp4" type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  );
}
const Container = styled.div`
  margin-top: 5rem;

  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: space-around;
  }
`;
const Wrap = styled.div`
  width: 300px;
  padding: 0 30px;
  position: relative;
  transition: all 0.3s ease-in-out;

  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    height: 200px;
    width: 250px;
    object-fit: cover;
    z-index: 30;
    position: relative;
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: fill;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 0;
    opacity: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    video {
      opacity: 1;
    }
  }
`;

export default Viewers;
