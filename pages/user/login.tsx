import React from "react";
import Link from "next/link";
import Image from 'next/image'
import Button from "@mui/material/Button";
import { Typography, TextField, InputAdornment, IconButton, Alert, Box, Divider } from "@mui/material";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import UserAnimation from "@/components/Layout/UserAnimation";
import { DarkButton } from "@/components/UI/DarkButton";
import { useForm } from "react-hook-form";
import { LoginValidations } from "@/utils/forms/validations";
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginDto } from "@/utils/api/types";
import { setCookie } from "nookies";
import { userApi } from "@/utils/api";
import logo from '@/assets/Eilibay.svg'



import whatsapp from '@assets/icons/whatsap.svg'
import telega from '@assets/icons/telega.png'
import google from '@assets/icons/google_ic.svg'

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("")

  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(LoginValidations),
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event:any) => {event.preventDefault();};
  
  const onSubmit = async (dto: LoginDto) => {
    try {
      const data = await userApi.login(dto);
      setCookie(null, "authToken", data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
    } catch (err) {
      console.log( "ошибка", err);
      setErrorMessage("Неверный email или пароль!")
    }
  };

  return (
    <div className='user max-w-[1200px] flex items-center m-auto'>
      <UserAnimation />
      <div className="text-center max-h-[650px] h-min md:w-6/12 w-full">
        <div className="login px-5">
          

          <Typography variant="h2" sx={{display:{xs:"none",md:"block"}, color: "primary.main", fontSize: { xs: 24, md: 32, lg: 36, xl: 40 } }}>
            Добро пожаловать! <br />
            Рады видеть тебя снова.
          </Typography>
          <Box sx={{display:{xs:"block",md:"none"}}}>
            <Image
              className='m-auto mb-2.5 w-10 md:w-[60px]'
              src={logo}
              width={80}
              height={100}
              alt="logo img " />
              <Typography variant='h2' sx={{fontSize:{md:24,lg:36}}}>
                Eilbay
              </Typography>
          </Box>

          

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

              {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

              <Link href="/user/emailRequest" className="block w-fit ml-auto no-underline font-bold hover:underline">Забыли пароль?</Link>
              <DarkButton
                disabled={!form.formState.isValid || form.formState.isSubmitting}
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

            <Box sx={{ display: "flex" }}>
              <Button
                variant="outlined"
                sx={{
                  height: "52px",
                  width: "100%",
                  mr: 1,
                  mt: 2.5,
                  borderRadius: 2,
                }}
              >
                <Image src={whatsapp} alt="" width={30}></Image>
              </Button>
              <Button
                variant="outlined"
                sx={{
                  height: "52px",
                  width: "100%",
                  mr: 1,
                  mt: 2.5,
                  borderRadius: 2,
                }}
              >
               <Image src={google} alt="" width={30}></Image>
              </Button>
              <Button
                variant="outlined"
                sx={{ height: "52px", width: "100%", mt: 2.5, borderRadius: 2 }}
              >
               <Image src={telega} alt="" width={30}></Image>
              </Button>
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
