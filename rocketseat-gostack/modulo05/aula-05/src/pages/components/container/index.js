import styled from 'styled-components';

const Container = styled.div`
  max-width: 1000px;
  background: #fff;
  border-radius: 4px;
  box-sizing: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export default Container;
