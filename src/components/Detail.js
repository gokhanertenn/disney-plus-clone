import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
        <Background>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg"/>
        </Background>
        <ImageTitle>
            <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78'/>
        </ImageTitle>
       <Controls>
            
          <PlayButton>
            <img src='/images/play-icon-black.png'/>
            <span>PLAY</span>
          </PlayButton>
          <TrailerButton>
          <img src='/images/play-icon-white.png'/>
            <span>TRAİLER</span>
          </TrailerButton>
          <AddButton>
             <span>+</span>
          </AddButton>
          <GroupWatchButton>
             <img src='/images/group-icon.png'></img>
          </GroupWatchButton>
       </Controls>
       <SubTitle>
                2018 • 7m • Family, Fantasy, Kids, Animation
            </SubTitle>
            <Description>
                A Chinese mom who’s sad when her grown son leaves home gets another
                 chance at motherhood when one of her dumplings springs to life. But she finds that nothing stays cute and small forever.
            </Description>
    </Container>
    
  )
}

export default Detail

const Container = styled.div`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
overflow:hidden;
position:relative;
`

const Background = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
z-index:-1;
   img {
    width:100%;
    height:100%;
    object-fit:cover;
   }
`
const ImageTitle = styled.div`
  position:relative;
  right:20px;
  top:80px;
  height: 30vh;
  width: 30vw;
  min-height:170px;
  min-width:200px;

    img {
        
        width:100%;
        height:100%;
        object-fit:contain;
        
    }
`

const Controls = styled.div`
display:flex;
position:relative;
top:90px;


`

const PlayButton = styled.button`
 border-radius:4px;
 border:none;
 width:9vw;
 height:8vh;
 display:flex;
 align-items:center;
 justify-content: center;
 font-size:15px;
 margin:20px;
 letter-spacing:1.8px;
 cursor:pointer;
 overflow:hidden;
  
  &:hover {
    background: rgb(198,198,198)
  }
    
    

`

const TrailerButton = styled.button`
position:relative;
border-radius:4px;
border:none;

width:9vw;
height:8vh;
display:flex;
align-items:center;
justify-content: center;
font-size:13px;
margin:20px;
background: rgba(0, 0, 0, 0.3);
border: 1px solid rgb(249,249,249);
color:rgb(249,249,249);
letter-spacing:1.8px;
cursor:pointer;
overflow:hidden;
   
   
   
  &:hover {
    background: rgb(198,198,198)
  }
    
   
`

const AddButton = styled.button`
border-radius:50%;
border:none;
width:4vw;
height:7vh;
display:flex;
align-items:center;
justify-content: center;
font-size:13px;
margin:20px 10px 5px 10px;
background: rgba(0, 0, 0, 0.4);
border: 1px solid rgb(249,249,249);
color:rgb(249,249,249);
letter-spacing:1.8px;
cursor:pointer;
overflow:hidden;
  
   span{
     
    font-size:30px;
   }
  
`

const GroupWatchButton = styled(AddButton)`
background:rgb(0,0,0);
`
const SubTitle = styled.div`
position:relative;
font-size:15px;
top:100px;
color: rgb(249,249,249)
`
const Description = styled.div`
position:relative;
top:120px;
line-height:1.5;
font-size:20px;
max-width:650px;
`