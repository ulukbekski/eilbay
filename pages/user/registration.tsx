import React from 'react';
import UserAnimation from '@/components/UI/UserAnimation';
import Link from "next/link";
import { Typography, TextField, InputAdornment, IconButton, Button, Box, Divider } from "@mui/material";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { DarkButton } from '@/components/UI/DarkButton';
import { useForm } from 'react-hook-form';
import { validations } from '@/utils/forms/validations';
import { yupResolver } from '@hookform/resolvers/yup';

function Registration() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPasswordCopy, setShowPasswordCopy] = React.useState(false);

  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(validations),
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleClickShowPasswordCopy = () => setShowPasswordCopy((show) => !show);
  const handleMouseDownPasswordCopy = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const onSubmit = (data:object) => {
    console.log(data);
    // Perform form submission logic here
  };

  return (
    <div className='user max-w-[1200px] m-auto flex items-center'>
      <UserAnimation />
      <div className="text-center max-h-[700px] md:w-6/12 w-full">
        <div className="registration px-5">
          <Typography variant="h2" 
            sx={{ 
              color: "primary.main",
              fontSize: { xs: 24, md: 24, lg: 24, xl: 36 },
              whiteSpace: "nowrap"
            }}
          >
            Привет, <br/>
            зарегистрируйтесь для начала
          </Typography>

          <Box sx={{ mx: "auto", maxWidth: 400, width: "100%" }}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <TextField 
                {...form.register('username')}
                type='text'
                sx={{ mt: '40px'}}
                fullWidth 
                id='outlined-adornment' 
                label="Имя пользователя"
                helperText={form.formState.errors.username?.message}
                error={!!form.formState.errors.username?.message}
              />

              <TextField
                {...form.register('email')}
                type="email" 
                sx={{ my: 2}}
                fullWidth
                id='outlined-adornment' 
                label="Email"
                helperText={form.formState.errors.email?.message}
                error={!!form.formState.errors.email?.message}
              />

              <TextField
                {...form.register('password')}
                variant="outlined"
                id="outlined-adornment-password"
                fullWidth
                sx={{mb: 2}}
                type={showPassword ? 'text' : 'password'}
                label="Пароль"
                helperText={form.formState.errors.password?.message}
                error={!!form.formState.errors.password?.message}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VscEye /> : <VscEyeClosed />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                {...form.register('confirmPassword')}
                id="outlined-adornment-passwordCopy"
                type={showPasswordCopy ? 'text' : 'password'}
                label="Подтверждение пароля"
                helperText={form.formState.errors.confirmPassword?.message}
                error={!!form.formState.errors.confirmPassword?.message}
                variant="outlined"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPasswordCopy}
                        onMouseDown={handleMouseDownPasswordCopy}
                        edge="end"
                      >
                        {showPasswordCopy ? <VscEye /> : <VscEyeClosed />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <DarkButton
                disabled={!form.formState.isValid}
                variant="contained"
                className='dark-button'
                sx={{ my: 2, width: "100%", bgcolor: "#1E232C", fontSize: 16, fontWeight: 700, color: 'white', borderRadius: 2 }}
              >
                Войти
              </DarkButton>
            </form>

            <Divider>
              <Typography sx={{ fontSize: 14, color: "secondary.main", fontWeight: 600, px: 5 }}>
                или
              </Typography>
            </Divider>

            <Box sx={{ display: "flex" }}>
              <Button variant="outlined" sx={{ height:"52px", width: "100%", mr: 1, mt: 2.5, borderRadius: 2 }}>W</Button>
              <Button variant="outlined" sx={{ height:"52px", width: "100%", mr: 1, mt: 2.5, borderRadius: 2 }}>W</Button>
              <Button variant="outlined" sx={{ height:"52px", width: "100%", mt: 2.5, borderRadius: 2 }}>W</Button>
            </Box>

            <Typography sx={{ mt: 2, fontSize: "18px" }}>
              У вас уже есть аккаунт? <Link href='/user/login' className="font-bold text-info">Войти сейчас</Link>
            </Typography>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Registration;
