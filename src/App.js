import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react'
import { Button, Container, Typography } from '@mui/material';

function App() {
  return (
    <div>
        <Container maxWidth="sm" style={{ textAlign: 'center' }}>
            <Typography variant="h1" gutterBottom>LensRead</Typography>
            <Button variant="contained">Click</Button>
        </Container>
    </div>
  );
}

export default App;
