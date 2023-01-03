import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Movies from './Movies';
import Viewers from './Viewers';
import {collection, getDocs } from 'firebase/firestore/lite';
import db from '../firebase';
import { useDispatch } from 'react-redux';
import { setMovies } from '../features/movie/movieSlice';




function Home () {

const dispatch = useDispatch();
  
    async function getCities(db) {
    const citiesCol = collection(db, 'movies');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    
     dispatch(setMovies(cityList)); 
  }
  
  
    useEffect(() => {
      getCities(db)
    },[])



  return (


    <Container >
      <ImgSlider/>
      <Viewers/>
      <Movies/>
    </Container>
  )
}

export default Home


const Container = styled.main`
 min-height : calc(100vh - 70px);
 padding :0 calc(2.5vw + 5px);
 position:relative;
 overflow-x:hidden;

  &:before {

    background: url("/images/home-background.png") center center / cover 
    no-repeat fixed;
    content: "";
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:1;
   }
`