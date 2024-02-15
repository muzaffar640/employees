import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { Employee } from "../../types/Employee";

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
          //   display: { xs: "none", sm: "block" },
          color: "#868ba2",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        Administrators
      </Typography>
      <Grid container spacing={2}>
        {administrators?.map((administrator, index) => (
          <Grid item xs={3} key={index}>
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
                  <Avatar alt="Remy Sharp" src={administrator?.img} />
                </Grid>
                <Grid item xs={10} sx={{ paddingLeft: "10px" }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="p" variant="h6" color="#535353">
                        {`${administrator?.first_name} ${administrator?.last_name} `}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="#b3b3b3"
                        component="div"
                      >
                        {administrator?.email}
                      </Typography>
                    </CardContent>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Administrators;
