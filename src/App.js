import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react'
import { Button, Container, Typography } from '@mui/material';
import Webcam from "react-webcam";

const CustomWebcam = () => {
  return (
    <div className="container">
      <Webcam height={600} width={600} />
    </div>
  );
};

function App() {
  return (
    <div>
        <Container maxWidth="sm" style={{ textAlign: 'center' }}>
            <Typography variant="h1" gutterBottom>LensRead</Typography>
            <Button variant="contained">Click</Button>
            <CustomWebcam />
        </Container>
    </div>
  );
}

export default App;
