import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;
  }

  & + li {
    margin-top: 10px;
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid #eee;
  }

  div {
    flex: 1;
    margin-left: 15px;

    strong {
      font-size: 16px;

      a {
        text-decoration: none;
        color: #333;

        &:hover {
          color: #7159c1;
        }
      }

      span {
        background: #eee;
        color: #333;
        border-radius: 2px;
        font-size: 12px;
        font-weight: 600;
        height: 20px;
        padding: 3px 4px;
        margin-left: 10px;
      }
    }

    p {
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    }
  }
`;

export const RadioCentral = styled.div`
  border-top: 1px solid #eee;
  color: #999;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  justify-content: center;
  padding-top: 15px;
  margin-bottom: -20px;
`;

export const Buttons = styled.div`
  padding-left: 37%;
`;

export const ButtonPrev = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.firstPage,
}))`
  background: #7159c1;
  border: 0;
  padding: 15px 25px;
  margin: 10px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  left: 40%;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const ButtonNext = styled.button`
  background: #7159c1;
  border: 0;
  padding: 15px 25px;
  margin: 10px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
