import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Webcam = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isWebcamAvailable, setIsWebcamAvailable] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isPictureTaken, setIsPictureTaken] = useState(false);
  const [showWebcamMessage, setShowWebcamMessage] = useState(false);
  const isDarkMode = useSelector((state: any) => state.darkMode);

  useEffect(() => {
    const checkWebcamAvailability = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setIsWebcamAvailable(true);
        }
      } catch (error) {
        console.error('Error accessing webcam:', error);
        setIsWebcamAvailable(false);
        setShowWebcamMessage(true); // 웹캠 연결 실패 메시지 표시
      }
    };

    if (isButtonClicked) {
      checkWebcamAvailability();
    }
  }, [isButtonClicked]);

  const handleWebcamConnect = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsWebcamAvailable(true);
      }
    } catch (error) {
      console.error('Error accessing webcam:', error);
      setIsWebcamAvailable(false);
      setShowWebcamMessage(true); // 웹캠 연결 실패 메시지 표시
    }
  };

  const takePicture = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      if (context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        setIsPictureTaken(true);
        video.pause(); // 비디오 일시 정지
      }
    }
  };

  const retakePicture = () => {
    if (videoRef.current) {
      videoRef.current.play(); // 비디오 다시 재생
      setIsPictureTaken(false);
    }
  };

  const seeResult = async () => {
    try {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.toBlob(async (blob) => {
          if (!blob) {
            throw new Error('Failed to convert canvas to blob');
          }

          const formData = new FormData();
          formData.append('image', blob, 'uploaded_image.jpg');

          const response = await fetch('http://localhost:3000/result', {
            method: 'POST',
            body: formData,
          });

          if (!response.ok) {
            throw new Error('Failed to upload image');
          }

          const data = await response.json();
          console.log('Emotion result:', data); // 결과를 콘솔에 출력
        }, 'image/jpeg');
      } else {
        console.error('Canvas is null');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <VideoContainer isDarkMode={isDarkMode}>
        <Video ref={videoRef} autoPlay />
        <Canvas
          ref={canvasRef}
          style={{ display: isPictureTaken ? 'block' : 'none' }}
        />
      </VideoContainer>
      <ButtonContainer>
        {!isWebcamAvailable && !showWebcamMessage && (
          <Button onClick={() => setIsButtonClicked(true)}>웹캠 연결</Button>
        )}
        {isWebcamAvailable && !isPictureTaken && (
          <Button onClick={takePicture}>사진 찍기</Button>
        )}
        {isPictureTaken && (
          <>
            <Button onClick={retakePicture}>다시 찍기</Button>
            <Button onClick={seeResult}>결과 보기</Button>
          </>
        )}
      </ButtonContainer>
      {showWebcamMessage && (
        <p style={{ color: '#ff0000', textAlign: 'center' }}>
          카메라를 지원하지 않는 환경이거나 권한이 거부되었습니다
        </p>
      )}
    </div>
  );
};

const VideoContainer = styled.div`
  position: relative;
  width: 750px; /* 원하는 너비로 설정 */
  height: 500px; /* 원하는 높이로 설정 */
  margin: 0 auto;
  border: 2px solid ${(props) => (props.isDarkMode ? '#fff' : '#000')}; /* Dark Mode일 때 border 색 변경 */
  overflow: hidden; /* 비디오가 VideoContainer를 벗어나지 않도록 설정 */
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Canvas = styled.canvas`
  display: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  margin: 0 10px;
  padding: 12px 22px;
  background-color: ${(props) => (props.disabled ? '#ccc' : '#FF6347')};
  color: white;
  font-size: 16px;
  font-family: 'LINESeedKR-Bd', sans-serif;
  border: none;
  border-radius: 12px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.disabled ? '#ccc' : '#FF4500')};
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export default Webcam;
