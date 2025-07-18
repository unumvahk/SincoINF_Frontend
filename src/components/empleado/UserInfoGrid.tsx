import { Grid, Typography } from '@mui/material';

interface UserInfoGridProps {
  userInfo: { label: string; value: string }[]
}

const UserInfoGrid = ({ userInfo }: UserInfoGridProps) => {
  return (
    <Grid container spacing={1} sx={{ flexGrow: 1 }}>
      {userInfo.map((item, idx) => (
        <Grid size={6} key={idx}>
          <Typography variant="body2" fontWeight="bold">
            {item.label}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.value}
          </Typography>
        </Grid>
      ))}
    </Grid>
  )
}

export default UserInfoGrid;