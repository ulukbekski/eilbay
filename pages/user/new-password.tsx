import React from 'react';
import UserAnimation from '@/components/UI/UserAnimation';
import Link from "next/link";
import { Typography, TextField, InputAdornment, IconButton, Button, Box, Divider } from "@mui/material";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { DarkButton } from '@/components/UI/DarkButton';
import { useForm } from 'react-hook-form';
import { PasswordValidations } from '@/utils/forms/validations';
import { yupResolver } from '@hookform/resolvers/yup';

function NewPassword() {

  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(PasswordValidations),
  });
  const onSubmit = (data:object) => {
    console.log(data);
  };
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPasswordCopy, setShowPasswordCopy] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const handleClickShowPasswordCopy = () => setShowPasswordCopy((show) => !show);
  
  return (
    <div className='user max-w-[1200px] m-auto flex items-center'>
      <UserAnimation />
      <div className="text-center max-h-[650px] h-min md:w-6/12 w-full">
        <div className=" px-5">
          <Typography variant="h2" sx={{ color: "primary.main", fontSize: { xs: 28, md: 32, lg: 36, xl: 40 } }}>
            Забыли пароль?
          </Typography>

          <Box sx={{ mx: "auto", maxWidth: 400, width: "100%" }}>
            <Typography sx={{ color: "secondary.main", textAlign: "left", mt: 2.5 }}>
              Пожалуйста напишите адрес вашей электронной почты для получения кода
            </Typography>
            <form onSubmit={form.handleSubmit(onSubmit)}>
 

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
                        onMouseDown={handleMouseDownPassword}
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
             <Typography sx={{ mt: 2, fontSize: "18px" }}>Не получили код?<Link href='/user/login' className="font-bold text-info">Отправить снова</Link></Typography>
          </Box>

        </div>
      </div>
    </div>
  )
}

export default NewPassword;
