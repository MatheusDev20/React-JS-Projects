import {
  Container,
  ConvertSteps,
  SelectFormat,
  PerformAction, UploadStep,
  UploadButton,
  VideoDetails,
  CancelButton,
  Select
} from "./styles";
import React, { useState } from 'react';
const VideoConverter = (props) => {
  const [file, setFile] = useState(null);
  const [selected, setSelected] = useState(false)

  const hiddenInput = React.useRef(null);
  const handleClick = event => {
    hiddenInput.current.click();
  };
  let possibleOutputs = [
    'avi',
    'flv',
    'mp4'
  ]
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    setFile(fileUploaded);
    console.log(file)
    setSelected(true);
  };

  const handleRemoveFile = event => {
    setSelected(false)
    setFile(null)
  }

  return (
    <Container>
      <ConvertSteps>
        <UploadStep>
          <div className="options">
            <UploadButton onClick={handleClick}>
              Selecionar arquivo de video
            </UploadButton>
            <input type="file" name="file"
              ref={hiddenInput}
              onChange={handleChange}
              style={{ display: 'none' }} />
          </div>
          {
            selected ? (
              <VideoDetails>
                <h3><span style={{ color: 'rgb(219, 112, 147)' }}>Vídeo</span> : {file.name}</h3>
                <h3><span style={{ color: 'rgb(219, 112, 147)' }}>Tipo</span> : {file.type}</h3>

                <CancelButton
                  onClick={handleRemoveFile}
                >Cancelar
                </CancelButton>
              </VideoDetails>
            ) :
              null
          }
        </UploadStep>
        <SelectFormat>
          {/* <Select>
            {possibleOutputs.map((out) => {
              return (
                <option value={out}>{out}</option>
              )
            })}
        </Select> */}
        </SelectFormat>
        <PerformAction>
          Perform Action
        </PerformAction>
      </ConvertSteps>
    </Container >
  )
}

export default VideoConverter;
