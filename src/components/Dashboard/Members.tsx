import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Employee } from "../../types/Employee";
import ProfileCard from "../Common/ProfileCard";

type MembersProps = {
  members: Employee[];
};

const Members: React.FC<MembersProps> = ({ members }) => {
  return (
    <div style={{ paddingBottom: "30px" }}>
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
        Members
      </Typography>
      <Grid container spacing={2}>
        {members?.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <ProfileCard employee={member} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Members;
