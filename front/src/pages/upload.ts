import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #000;
`

export const Card = styled.div<{ logo: string }>`
  display: flex;
  flex-direction: column;
  width: 310px;
  height: 627px;
  padding: 15px;
  margin-top: 40px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  /* box-shadow: 15px 10px 25px 0px  #9DDED1; */
  background: #fff;
  background-image: url(${props => props.logo});
  background-repeat: no-repeat, no-repeat;
  background-position: 50% 5%, 200% -40%;
  background-size: 40%, 80%;
  animation: open .5s;

  button { 
    
  }
`