import styled from 'styled-components';

const SettingsBox = styled.div`
  border-radius: 16px;
  /* padding: 16px; */
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  padding-bottom: 8px;
  background-color: ${({ theme }) => theme.palette.grey[50]};
  border: 2px solid ${({ theme }) => theme.palette.grey[100]};
  max-width: 480px;
  margin: 0 auto;
  /* margin: 0 16px; */
  padding: 24px;
  .box-header,
  .box-body {
    margin-bottom: 24px;
  }

  .box-header {
    h6 {
      margin-bottom: 2px;
    }
    p {
      color: ${({ theme }) => theme.palette.text.secondary};
      max-width: 320px;
    }
  }

  .box-body {
    form {
      input {
        margin-bottom: 8px;
      }
    }
  }

  .box-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .status {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      p {
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${({ theme }) => theme.palette.text.disabled};
      }
      .status-state {
        margin-inline-start: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: green;
        font-weight: 700;
        svg {
          fill: green;
        }
      }
    }
    .actions {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const Styled = {
  SettingsBox,
};
