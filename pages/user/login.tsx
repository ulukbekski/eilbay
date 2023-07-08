import React from "react";
import Link from "next/link";
import { Typography, TextField, InputAdornment, IconButton, Button, Box, Divider } from "@mui/material";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import UserAnimation from "@/components/UI/UserAnimation";
import { DarkButton } from "@/components/UI/DarkButton";
import { useForm } from "react-hook-form";
import { LoginValidations } from "@/utils/forms/validations";
import { yupResolver } from '@hookform/resolvers/yup';

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(LoginValidations),
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event:any) => {event.preventDefault();};
  
  const onSubmit = (data:any) => {
    console.log(data);
    // Perform form submission logic here
  };

  return (
    <div className='user max-w-[1200px] flex items-center m-auto'>
      <UserAnimation />
      <div className="text-center max-h-[650px] h-min md:w-6/12 w-full">
        <div className="login px-5">
          <Typography variant="h2" sx={{ color: "primary.main", fontSize: { xs: 24, md: 32, lg: 36, xl: 40 } }}>
            Добро пожаловать! <br />
            Рады видеть тебя снова.
          </Typography>

          <Box sx={{ mx: "auto", maxWidth: 400, width: "100%" }}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <TextField
                type="text"
                sx={{ mt: '60px',mb:2, width: "100%" }}
                id='outlined-adornment'
                label="Имя пользователя"
                {...form.register("email")}
                helperText={form.formState.errors.email?.message}
                error={!!form.formState.errors.email?.message}
                />

              <TextField
                {...form.register("password")}
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                label="Пароль"
                helperText={form.formState.errors.password?.message}
                error={!!form.formState.errors.password?.message}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" id="ad">
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
                variant="outlined"
                fullWidth
              />
              <Link href="/user/emailRequest" className="block w-fit ml-auto no-underline font-bold hover:underline">Забыли пароль?</Link>
              <DarkButton
                disabled={!form.formState.isValid}
                type="submit"
                className='dark-button'
                variant="contained"
                sx={{ my: 4, width: "100%", borderRadius: 2, ":hover": {} }}
              >
                Войти
              </DarkButton>
            </form>

            <Divider>
              <Typography sx={{ fontSize: 14, color: "secondary.main", fontWeight: 600, px: 5 }}>
                или
              </Typography>
            </Divider>

            <Box sx={{ display: "flex", gap: 1 }}>
              <Button variant="outlined" sx={{ width: "100%", mt: 2.5, borderRadius: 2, height: "54px" }}>W</Button>
              <Button variant="outlined" sx={{ width: "100%", mt: 2.5, borderRadius: 2, height: "54px" }}>W</Button>
              <Button variant="outlined" sx={{ width: "100%", mt: 2.5, borderRadius: 2, height: "54px" }}>W</Button>
            </Box>

            <Typography sx={{ mt: 2, fontSize: "18px" }}>
              У вас нет аккаунта? <Link href='/user/registration' className="font-bold text-info">Зарегистрируйтесь</Link>
            </Typography>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Login;
