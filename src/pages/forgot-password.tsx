// import { useState } from 'react';
// import { sendPasswordResetEmail } from 'firebase/auth';

// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';

// import { auth } from 'src/firebaseConfig';

// export function ForgotPasswordView() {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');

//   const handleReset = async () => {
//     setMessage('');
//     setError('');

//     try {
//       await sendPasswordResetEmail(auth, email);
//       setMessage('Password reset email sent successfully.');
//     } catch (err: any) {
//       setError(err.message || 'Failed to send reset email');
//     }
//   };

//   return (
//     <Box sx={{ maxWidth: 400, mx: 'auto' }}>
//       <Typography variant="h5" sx={{ mb: 2 }}>
//         Forgot Password
//       </Typography>

//       <TextField
//         fullWidth
//         label="Email address"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         sx={{ mb: 2 }}
//       />

//       <Button fullWidth variant="contained" onClick={handleReset}>
//         Send Reset Link
//       </Button>

//       {message && (
//         <Typography sx={{ mt: 2 }} color="success.main">
//           {message}
//         </Typography>
//       )}

//       {error && (
//         <Typography sx={{ mt: 2 }} color="error.main">
//           {error}
//         </Typography>
//       )}
//     </Box>
//   );
// }

import { ForgotPasswordView } from '../sections/auth/forgot-password-view';

export default function ForgotPasswordPage() {
  return <ForgotPasswordView />;
}
