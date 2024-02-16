import Administrators from "../components/Dashboard/Administrator";
import Members from "../components/Dashboard/Members";
import Divider from "@mui/material/Divider";
import { Employee } from "../types/Employee";
import { useFilterContext } from "../context/FilterContext";
import { useEmployeeList } from "../api/EmployeeList";
import { Loader } from "../components/Common/Loader";
import { styled } from "@mui/material/styles";
import Toaster from "../components/Common/Toaster";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const StyledDashboard = styled("div")({
  padding: "64px 60px",
  backgroundColor: "#f9f9fb",
});
const AddButton = styled(Fab)(({ theme }) => ({
  position: "fixed",
  zIndex: 1000,
  [theme.breakpoints.up("xs")]: {
    bottom: "40px",
    right: "40px",
    [theme.breakpoints.up("sm")]: {
      bottom: "60px",
      right: "60px",
    },
  },
}));

const Dashboard = () => {
  const { filter } = useFilterContext();
  const { data: employeeList, isLoading: employeeListLoading } =
    useEmployeeList();

  const filteredEmployees = employeeList?.filter((employee: Employee) =>
    `${employee?.first_name} ${employee?.last_name}`
      .toLowerCase()
      .includes(filter.toLowerCase())
  );
  const administrators = filteredEmployees?.filter(
    (employee: Employee) => employee?.role === "admin"
  );
  const members = filteredEmployees?.filter(
    (employee: Employee) => employee?.role === "member"
  );
  if (employeeListLoading) {
    return <Loader />;
  }
  return (
    <>
      <Toaster />
      <StyledDashboard>
        <Administrators administrators={administrators} />
        <Divider sx={{ marginTop: "50px", marginBottom: "20px" }} />
        <Members members={members} />
        <AddButton color="primary" aria-label="add">
          <AddIcon color="info" fontSize="large" />
        </AddButton>
      </StyledDashboard>
    </>
  );
};

export default Dashboard;
