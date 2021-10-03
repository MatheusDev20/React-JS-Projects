import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ConvertSteps = styled.div`
  height: 560px;
  width: 80%;
  display: flex;
  flex-direction: column;
`;
export const UploadStep = styled.div`
  height: 40%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  .options {
    display: flex;
    align-items: center;
    margin-left: 150px;
    width: 70%;
  }
`;
export const UploadButton = styled.button`
  width: 70%;
  border: none;
  background-color: #04AA6D;
  color: white;
  padding: 14px 28px;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  input {
    display: none;
  }
`;
export const VideoDetails = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`
export const CancelButton = styled.button`
  height: 30px;
  width: 50%;
  color: #fff;
  font-size: 16px;
  border: none;
  margin-top: 15px;
  background-color: #04AA6D;
  cursor: pointer;
`;
export const SelectFormat = styled.div`
  height: 20%;
  display:flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const Select = styled.select`
  border: none;
  width: 200px;
  background-color: #04AA6D;
`;

export const PerformAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30%;
  flex-direction: column;

  a {
    width: 40%;
  }
  `;
export const PerformButton = styled.div`
  width: 40%;
  border: none;
  background-color: #04AA6D;
  color: white;
  padding: 14px 28px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 15px;
`;
export const Download = styled.button`
  width: 100%;
  border: none;
  border-radius: 5px;
  background-color: #ff3232;
  color: white;
  padding: 14px 28px;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  margin-bottom: 15px;
`;