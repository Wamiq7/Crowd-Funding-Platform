import styled from "styled-components";
export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 15px;
  text-align: center;

  input,
  select {
    margin: 10px;
    height: 30px;
    border: 1px solid rgb(212, 222, 228);
    border-radius: 6px;
  }
  /* input:nth-child(2) {
    height: 80px;
  } */
  button,
  input[type="submit"] {
    width: auto;
    padding: 0 15px;
    height: 40px;
    margin: 10px auto;
    color: white;
    font-size: 16px;
    border-radius: 6px;
    border: 1px solid #000;
    background: linear-gradient(141deg, #2792b8 0%, #2c3d4f 51%, #12678a 75%);
    cursor: pointer;
  }
  button:hover {
    transition: width 0.3s;
    background: #1585ae;
    border: 1px solid #000;
    box-shadow: inset 0 0 58px #0d303d;
  }
  button:disabled {
    background: grey;
  }
  h1 {
    padding: 0;
    margin: 0;
  }
`;