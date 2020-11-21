import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #000;

  .flip-container {
  width: 300px;
  height: 200px;
  perspective: 1000px;
}

.flipper {
  position: relative;
	width: 100%;
	height: 100%;
  transition: transform 0.8s;
	transform-style: preserve-3d;
}

.flip-container:hover .flipper{
	transform: rotateY(180deg);
}

.front, .back{
  position: absolute;
  width: 100%;
  height: 100%;
}
`

export const Card = styled.div<{ logo: string, width: number, height: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  /* width: 310px;
  height: 600px; */
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  padding: 15px;
  margin-top: 40px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  transition: all 1s;
  box-shadow: 0px 0px 10px 0px #FFF;


  background: #fff;
  background-image: url(${props => props.logo});
  background-repeat: no-repeat, no-repeat;
  background-position: 50% 5%, 200% -40%;
  background-size: 55%, 80%;
  animation: effectShow .4s cubic-bezier(.1,.82,.25,1);
  
  &:hover {
    transition: all 0.6s;
    box-shadow: 0px 0px 20px 10px #387289;
  }

  @keyframes effectShow {
    0% {
      transform: scale(1.4);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  button { 
    &:nth-last-child(2) {
      bottom: 55px !important;
      width: 80%;
      background: #387289;

      &:hover {
        transition: all 1s;
        background: #66CBBC;
      }
    }

    position: absolute;
    bottom: 15px;
    border-radius: 20px;
    border: none;
    background: #ed3a53;
    width: 50%;
    color: #fff;
    height: 30px;
    font-weight: bold;
    cursor: pointer;


    &:hover {
      transition: all 1s;
      background: #fd637b;
    }
  }

  section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    margin-top: 90px;
    width: 80%;
    text-align: center;
    padding-top: 20px;
    transition: all 1.6s;

    label {
      font-size: 20px;
      margin-bottom: 8px;
      transition: all 1.6s;
    }
    
    span {
      transition: all 1.6s;
      font-size: 16px;
      margin-bottom: 8px;
      height: 18px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }  
`

export const Perfil = styled.div<{ top: number, width: number, height: number }>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  margin-top: ${props => props.top}px;
  background: aliceblue;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s;

  svg { 
    width: 80px;
    height: 80px;
    transition: all 1s;
  }

  img { 
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    border-radius: 100%;
    transition: all 1s;
  }

  input[type="file"] {
    opacity: 0;
    position: absolute;
    border-radius: 100%;
    cursor: pointer;
    z-index: 99999;
    width: 145px;
    height: 145px;
  }

  &:hover {
    transition: all 1s;
    box-shadow: 0px 0px 15px 2px #387289;
  }
`

export const Spinner = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  margin-top: 7px;
  width: 100%;
  z-index: 9999;
  top: 0;
  animation: spin 1s 0.1s ease-in-out infinite both;

  @keyframes spin {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
`
