import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (
    <Container>

        <h4>Recommend for you </h4> 

        <Content>
        
            <Wrap>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg"/>
            </Wrap>
            <Wrap>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg"/>
            </Wrap>
            <Wrap>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg"/>
            </Wrap>
            <Wrap>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg"/>
            </Wrap>
            <Wrap>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg"/>
            </Wrap>
            <Wrap>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg"/>
            </Wrap>
            <Wrap>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg"/>
            </Wrap>
            <Wrap>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg"/>
            </Wrap>
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
