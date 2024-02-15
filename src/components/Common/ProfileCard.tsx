import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { Employee } from "../../types/Employee";

type ProfileCardProps = {
  employee: Employee;
};

const ProfileCard: React.FC<ProfileCardProps> = ({ employee }) => {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "70px",
        width: "100%",
        borderRadius: "15px",
        border: "none",
      }}
    >
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          // justifyContent: "center",
        }}
      >
        <Grid item xs={2} sx={{ paddingLeft: "10px" }}>
          <Avatar alt="Remy Sharp" src={employee?.img} />
        </Grid>
        <Grid item xs={10} sx={{ paddingLeft: "10px" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="p" variant="h6" color="#535353">
                {`${employee?.first_name} ${employee?.last_name} `}
              </Typography>
              <Typography variant="subtitle1" color="#b3b3b3" component="div">
                {employee?.email}
              </Typography>
            </CardContent>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProfileCard;
