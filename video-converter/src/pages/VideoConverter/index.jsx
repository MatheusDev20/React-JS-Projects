import {
  Container,
  ConvertSteps,
  SelectFormat,
  PerformAction, UploadStep,
  UploadButton,
  VideoDetails,
  CancelButton,
  PerformButton,
  Download
  // Select
} from "./styles";
import React, { useState } from 'react';
import Select from 'react-select'
import api from '../../services/api';

const VideoConverter = (props) => {
  const [file, setFile] = useState(null);
  const [selected, setSelected] = useState(false);
  const [output, setOutput] = useState('avi');
  const [err, setErr] = useState(false);
  const [converted, setConverted] = useState(null);

  const hiddenInput = React.useRef(null);
  const handleClick = event => {
    hiddenInput.current.click();
  };
  let possibleOutputs = [
    { value: 'mp4', label: 'MP4' },
    { value: 'avi', label: 'AVI' },
    { value: 'flv', label: 'FLV' }
  ]
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    setFile(fileUploaded);
    setSelected(true);
  };

  const handleRemoveFile = event => {
    setSelected(false)
    setFile(null)
  }
  const handleSelectChange = (event) => {
    console.log(event.value)
    setOutput(event.value)
    console.log(output)
  }
  const handleConvert = async (event) => {
    let formData = new FormData()
    formData.append("video", file)
    try {
      let response = await api.post(`video-converter?to=${output}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      setConverted(response.data.data.data)
    }
    catch (err) {
      setErr(true)
    }

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
          <span>Selecione o formato</span>
          <Select options={possibleOutputs} onChange={handleSelectChange} />
        </SelectFormat>
        <PerformAction>
          <PerformButton onClick={handleConvert}>Converter</PerformButton>
          {
            err ? (
              <span>Something went wrong pls try again</span>
            )
              : (
                null
              )
          }
          {
            converted !== null && (
              <a href={converted.fileUrl} download={`video-${Date.now()}`}>
                <Download> Baixar Vídeo </Download>
              </a>

            )
          }
        </PerformAction>
      </ConvertSteps>
    </Container >
  )
}

export default VideoConverter;
