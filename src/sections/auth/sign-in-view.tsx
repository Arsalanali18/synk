// import { useState, useCallback } from 'react';

// import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
// import Button from '@mui/material/Button';
// import Divider from '@mui/material/Divider';
// import TextField from '@mui/material/TextField';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputAdornment from '@mui/material/InputAdornment';

// import { useRouter } from 'src/routes/hooks';

// import { Iconify } from 'src/components/iconify';

// // ----------------------------------------------------------------------

// export function SignInView() {
//   const router = useRouter();

//   const [showPassword, setShowPassword] = useState(false);

//   const handleSignIn = useCallback(() => {
//     router.push('/');
//   }, [router]);

//   const renderForm = (
//     <Box
//       sx={{
//         display: 'flex',
//         alignItems: 'flex-end',
//         flexDirection: 'column',
//       }}
//     >
//       <TextField
//         fullWidth
//         name="email"
//         label="Email address"
//         defaultValue="hello@gmail.com"
//         sx={{ mb: 3 }}
//         slotProps={{
//           inputLabel: { shrink: true },
//         }}
//       />

//       <Link variant="body2" color="inherit" sx={{ mb: 1.5 }}>
//         Forgot password?
//       </Link>

//       <TextField
//         fullWidth
//         name="password"
//         label="Password"
//         defaultValue="@demo1234"
//         type={showPassword ? 'text' : 'password'}
//         slotProps={{
//           inputLabel: { shrink: true },
//           input: {
//             endAdornment: (
//               <InputAdornment position="end">
//                 <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
//                   <Iconify icon={showPassword ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
//                 </IconButton>
//               </InputAdornment>
//             ),
//           },
//         }}
//         sx={{ mb: 3 }}
//       />

//       <Button
//         fullWidth
//         size="large"
//         type="submit"
//         color="inherit"
//         variant="contained"
//         onClick={handleSignIn}
//       >
//         Sign in
//       </Button>
//     </Box>
//   );

//   return (
//     <>
//       <Box
//         sx={{
//           gap: 1.5,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           mb: 5,
//         }}
//       >
//         <Typography variant="h5">Sign in</Typography>
//         <Typography
//           variant="body2"
//           sx={{
//             color: 'text.secondary',
//           }}
//         >
//           Don’t have an account?
//           <Link variant="subtitle2" sx={{ ml: 0.5 }}>
//             Get started
//           </Link>
//         </Typography>
//       </Box>
//       {renderForm}
//       <Divider sx={{ my: 3, '&::before, &::after': { borderTopStyle: 'dashed' } }}>
//         <Typography
//           variant="overline"
//           sx={{ color: 'text.secondary', fontWeight: 'fontWeightMedium' }}
//         >
//           OR
//         </Typography>
//       </Divider>
//       <Box
//         sx={{
//           gap: 1,
//           display: 'flex',
//           justifyContent: 'center',
//         }}
//       >
//         <IconButton color="inherit">
//           <Iconify width={22} icon="socials:google" />
//         </IconButton>
//         <IconButton color="inherit">
//           <Iconify width={22} icon="socials:github" />
//         </IconButton>
//         <IconButton color="inherit">
//           <Iconify width={22} icon="socials:twitter" />
//         </IconButton>
//       </Box>
//     </>
//   );
// }


import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import { useRouter } from 'src/routes/hooks';

import { auth } from 'src/firebaseConfig';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function SignInView() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSignIn = async () => {
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/'); // ✅ dashboard
    } catch (err: any) {
      setError(err.message);
    }
  };

  const renderForm = (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
        flexDirection: 'column',
      }}
    >
      <TextField
        fullWidth
        label="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ mb: 3 }}
        InputLabelProps={{ shrink: true }}
      />

      <Link
        variant="body2"
        color="inherit"
        sx={{ mb: 1.5, cursor: 'pointer' }}
      >
        Forgot password?
      </Link>

      <TextField
        fullWidth
        label="Password"
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        InputLabelProps={{ shrink: true }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                <Iconify icon={showPassword ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ mb: 3 }}
      />

      {error && (
        <Typography color="error" variant="body2" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}

      <Button
        fullWidth
        size="large"
        color="inherit"
        variant="contained"
        onClick={handleSignIn}
      >
        Sign in
      </Button>
    </Box>
  );

  return (
    <>
      <Box
        sx={{
          gap: 1.5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: 5,
        }}
      >
        <Typography variant="h5">Sign in</Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Don’t have an account?
          <Link variant="subtitle2" sx={{ ml: 0.5 }}>
            Get started
          </Link>
        </Typography>
      </Box>

      {renderForm}

      <Divider sx={{ my: 3, '&::before, &::after': { borderTopStyle: 'dashed' } }}>
        <Typography variant="overline" sx={{ color: 'text.secondary' }}>
          OR
        </Typography>
      </Divider>

      <Box sx={{ gap: 1, display: 'flex', justifyContent: 'center' }}>
        <IconButton color="inherit">
          <Iconify width={22} icon="socials:google" />
        </IconButton>
        <IconButton color="inherit">
          <Iconify width={22} icon="socials:github" />
        </IconButton>
        <IconButton color="inherit">
          <Iconify width={22} icon="socials:twitter" />
        </IconButton>
      </Box>
    </>
  );
}
