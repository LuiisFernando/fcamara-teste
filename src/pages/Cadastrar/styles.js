import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    /* max-width: 600px; */
    margin: 50px;

    div {
        max-width: 800px;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    input {
    /* background: rgba(0, 0, 0, 0.1); */
    /* border: 1px solid #eee;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    margin: 10px 0; */
    &::placeholder {
      /* color: rgba(255, 255, 255, 0.7); */
    }
  }

  .generic-input {
    border: 1px solid #eee;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    margin-top: 15px;
  }

  textarea {
    border: 1px solid #eee;
    border-radius: 4px;
    height: 100px;
    padding: 0 15px;
    margin: 0 0 10px;
  }

  .MuiFormControl-root {
      height: 84px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
  }

  .contador {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    top: 0;
  }

  .areaText {
    height: 120px;
  }

`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    button {
        margin: 5px 0 0;
        height: 44px;
        background: #02af23;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;
        padding: 0 10px;

        &:hover {
            background: ${darken(0.03, "#00de2a")};
        }
        &:disabled {
          background: #5aa969;
          cursor: default;
        }
    }
`;