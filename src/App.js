import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React, { useCallback } from 'react'
import { Button, Container, Typography } from '@mui/material';
import Webcam from "react-webcam";

// https://blog.logrocket.com/using-react-webcam-capture-display-images/#potential-use-cases-webcam-functionality
const CustomWebcam = () => {
    const webcamRef = React.useRef(null)
    const [imgSrc, setImgSrc] = React.useState(null)

    // create a capture function
    const takePicture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
    }, [webcamRef])

    // create retake function
    const retakePicture = () => {
        setImgSrc(null)
    }

    return (
        <div className="container">
            {imgSrc ? <img src={imgSrc} alt="camera picture" /> : <Webcam height={600} width={600} ref={webcamRef} screenshotFormat="image/png"/>}
            {imgSrc ? <Button variant="contained" onClick={retakePicture}>Retake Picture</Button> : <Button variant="contained" onClick={takePicture}>Take Picture</Button>}
        </div>
    );
};

function App() {
  return (
    <div>
        <Container maxWidth="sm" style={{ textAlign: 'center' }}>
            <Typography variant="h1" gutterBottom>LensRead</Typography>
            <CustomWebcam />
        </Container>
    </div>
  );
}

export default App;
