import React, { useEffect } from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { useNavigate } from "react-router-dom";

import { collection, getDocs } from "firebase/firestore";

import { setMovie } from "../store/movieSlice";

function Home(props) {
  console.log("home is running");
  let recommends = [];
  let newDisney = [];
  let original = [];
  let trending = [];
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  useEffect(() => {
    async function getData() {
      const querySnapshot = await getDocs(collection(db, "movies"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];

            break;
          case "new":
            newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            original = [...original, { id: doc.id, ...doc.data() }];

            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });
      dispatch(setMovie({ recommends, original, trending, newDisney }));
    }
    getData();
  }, []);
  return (
    <Container>
      <ImageSlider></ImageSlider>
      <Viewers></Viewers>
      <Recommends></Recommends>
      <NewDisney></NewDisney>
      <Originals></Originals>
      <Trending></Trending>
    </Container>
  );
}
const Container = styled.main`
  position: relative;
  min-height: calc(100vh-250px);
  display: block;
  overflow: hidden;
  top: 72px;
  padding: 2rem calc(3.5vw + 5px);
  margin-top: 2rem;
  background: url("/images/home-background.png") center center no-repeat fixed;
  background-size: 100% 100%; ;
`;
export default Home;
