import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: var(--primary);
  border-radius: 4px;
  box-shadow: 0 0 20px var(--box-shadow);
  padding: 30px;
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }

  button {
    border: 1px solid var(--black);
    border-radius: 5px;
    margin-top: 20px;
    padding: 10px 15px;

    cursor: pointer;
  }
`;
