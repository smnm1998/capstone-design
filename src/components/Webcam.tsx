import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  position: relative;
  width: 750px;
  height: 500px;
  margin: 0 auto;
  border: 2px solid #000;
`;

const Video = styled.video`
  width: 100%;
  height: auto;
  display: block;
`;

const Canvas = styled.canvas`
  width: 100%;
  height: auto;
  display: block;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column; /* 버튼과 문구를 세로 방향으로 정렬 */
  justify-content: center;
  align-items: center; /* 가운데 정렬 */
  margin-top: 20px;
`;

const Button = styled.button`
  margin: 0 10px;
`;

const Webcam = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isWebcamAvailable, setIsWebcamAvailable] = useState(true);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  useEffect(() => {
    const checkWebcamAvailability = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setIsWebcamAvailable(true);
        }
      } catch (error) {
        console.error('Error accessing webcam:', error);
        setIsWebcamAvailable(false);
      }
    };

    if (!isButtonClicked) {
      checkWebcamAvailability();
    }
  }, [isButtonClicked]);

  const takePicture = () => {
    // 사진 찍기 로직
  };

  const retakePicture = () => {
    // 다시 찍기 로직
  };

  const seeResult = () => {
    // 결과 보기 로직
  };

  return (
    <div>
      <VideoContainer>
        <Video ref={videoRef} autoPlay />
        <Canvas ref={canvasRef} style={{ display: 'none' }} />
      </VideoContainer>
      <ButtonContainer>
        <Button
          onClick={() => setIsButtonClicked(true)}
          disabled={!isWebcamAvailable || isButtonClicked}
        >
          웹캠 연결
        </Button>
        {/* 버튼 아래에 문구 표시 */}
        {!isWebcamAvailable && (
          <p style={{ color: '#ff0000', textAlign: 'center' }}>
            카메라를 지원하지 않는 환경입니다.
          </p>
        )}
      </ButtonContainer>
      {isWebcamAvailable && (
        <ButtonContainer>
          <Button onClick={takePicture}>사진 찍기</Button>
        </ButtonContainer>
      )}
      {isWebcamAvailable && (
        <ButtonContainer>
          <Button onClick={retakePicture}>다시 찍기</Button>
          <Button onClick={seeResult}>결과 보기</Button>
        </ButtonContainer>
      )}
    </div>
  );
};

export default Webcam;
