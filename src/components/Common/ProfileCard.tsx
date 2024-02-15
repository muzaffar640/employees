import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { Employee } from "../../types/Employee";
import { styled } from "@mui/material/styles";

type ProfileCardProps = {
  employee: Employee;
};
const StyledCard = styled(Card)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  border-radius: 15px;
  border: none;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    background-color: rgba(245, 245, 245, 0.9);
  }
`;

const StyledGrid = styled(Grid)`
  display: flex;
  align-items: center;
`;
const ProfileCard: React.FC<ProfileCardProps> = ({ employee }) => {
  return (
    <StyledCard>
      <StyledGrid>
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
      </StyledGrid>
    </StyledCard>
  );
};

export default ProfileCard;
