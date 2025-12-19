import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { auth } from 'src/firebaseConfig';

export function ForgotPasswordView() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleReset = async () => {
    setMessage('');
    setError('');

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent. Check your inbox.');
    } catch (err: any) {
      setError(err.message || 'Failed to send reset email');
    }
  };

  return (
    <Box sx={{ maxWidth: 420, mx: 'auto', mt: 5 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Forgot Password
      </Typography>

      <TextField
        fullWidth
        label="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Button fullWidth variant="contained" onClick={handleReset}>
        Send reset link
      </Button>

      {message && (
        <Typography color="success.main" sx={{ mt: 2 }}>
          {message}
        </Typography>
      )}

      {error && (
        <Typography color="error.main" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}
    </Box>
  );
}
