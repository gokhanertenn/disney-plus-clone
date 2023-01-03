import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectMovies } from '../features/movie/movieSlice'

function Movies() {

  const movies = useSelector(selectMovies);

  
  return (
    <Container>

        <h4>Recommend for you </h4> 

        <Content>
        
            {  
              
              movies && 
              movies.map((movies) => (

                <Wrap>
                <img src={movies.CardImg}/>
               </Wrap>   
 

              ))

            }


            
            
            </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`
z-index:10;
`
const Content = styled.div`
overflow:hidden;
z-index:8;
display:grid;
grid-gap:25px;
grid-template-columns:repeat(4, minmax(0,1fr));
`
const Wrap = styled.div`

overflow:hidden;
z-index:5;
 cursor:pointer;
 border-radius:10px;
 border: 3px solid rgb(249,249,249, 0.1);
 box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
 rgb(0 0 0 / 73%) 0px 16px 10px -10px;
 transition:all 250ms cubic-bezier(0.25 , 0.46 , 0.45 , 0.94) 0s;
 margin:10px 10px 10px 10px;

  img {
    width:100%;
    height:100%;
    object-fit:cover;
    
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 100%) 0px 40px 58px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform:scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`
