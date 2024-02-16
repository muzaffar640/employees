import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Employee } from "../../types/Employee";
import ProfileCard from "../Common/ProfileCard";

type AdministratorsProps = {
  administrators: Employee[];
};

const Administrators: React.FC<AdministratorsProps> = ({ administrators }) => {
  return (
    <div>
      <Typography
        variant="h5"
        noWrap
        component="div"
        sx={{
          flexGrow: 1,
          color: "#868ba2",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        Administrators
      </Typography>
      <Grid container spacing={2}>
        {administrators?.map((administrator, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <ProfileCard employee={administrator} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Administrators;
