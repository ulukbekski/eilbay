import { FC } from 'react';
import { Avatar, Box, Grid, Link, Typography } from '@mui/material';
// import FlagIcon from 'flag-icons/react';

interface Country {
  name: string;
  code: string;
}

interface ProfileProps {
  fullName: string;
  avatar: string;
  products?: any[];
  rating: number;
  country?: Country;
  description: string;
}


const Profile: FC<ProfileProps> = ({
  fullName,
  avatar,
  products,
  rating,
  country,
  description,
}) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        {fullName}
      </Typography>
      <Grid container spacing={2} justifyContent="center" alignItems="center" mb={2}>
        <Avatar src={avatar} alt="avatar" sx={{ width: 64, height: 64 }} />
        <Grid item xs={3}>
          <Typography variant="h5" align="center">
            {products?.length}
          </Typography>
          <Typography variant="subtitle2" align="center">
            Публикаций
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h5" align="center">
            {rating}
          </Typography>
          <Typography variant="subtitle2" align="center">
            Рейтинг
          </Typography>
        </Grid>
        <Grid item xs={3}>
          {country && (
            <>
              {/* <FlagIcon code={country.code.toLowerCase()} size={32} /> */}
              <Typography variant="subtitle2" align="center">
                {country.name}
              </Typography>
            </>
          )}
        </Grid>
      </Grid>

      <Box textAlign="center" mb={2}>
        <Typography variant="h5">{fullName}</Typography>
        <Typography variant="body1">{description}</Typography>
      </Box>

      <Grid container justifyContent="center" alignItems="center">
        <Link href="#">
          <Avatar src="/assets/excses-transformed 1.png" alt="logo img " sx={{ mr: 2 }} />
        </Link>
        <Link href="#">
          <Avatar src="/assets/Frame 623.svg" alt="logo img " sx={{ mr: 2 }} />
        </Link>
        <Link href="#">
          <Avatar src="/assets/image 47.png" alt="logo img " sx={{ mr: 2 }} />
        </Link>
        <Link href="#">
          <Avatar src="/assets/material-symbols_call.svg" alt="logo img " sx={{ mr: 2 }} />
        </Link>
        <Link href="#">
          <Avatar src="/assets/Rectangle 1994.png" alt="logo img " />
        </Link>
      </Grid>
    </Box>
  );
};

export default Profile;
