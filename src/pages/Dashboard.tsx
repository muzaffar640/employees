import { useEffect, useState } from "react";
import Administrators from "../components/Dashboard/Administrator";
import Members from "../components/Dashboard/Members";
import Divider from "@mui/material/Divider";
import { Employee } from "../types/Employee";
import { useFilterContext } from "../context/FilterContext";
import { styled } from "@mui/system";

const StyledDashboard = styled("div")({
  padding: "64px 60px",
  backgroundColor: "#f9f9fb",
});

const Dashboard = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const { filter } = useFilterContext();

  useEffect(() => {
    fetch(`https://mocki.io/v1/ddb7e0a8-e218-4e36-b1be-b902cdb1c098`)
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);

  const filteredEmployees = employees.filter((employee) =>
    `${employee.first_name} ${employee.last_name}`
      .toLowerCase()
      .includes(filter.toLowerCase())
  );
  const administrators = filteredEmployees.filter(
    (employee) => employee.role === "admin"
  );
  const members = filteredEmployees.filter(
    (employee) => employee.role === "member"
  );

  return (
    <StyledDashboard>
      <Administrators administrators={administrators} />
      <Divider sx={{ marginTop: "50px", marginBottom: "20px" }} />
      <Members members={members} />
    </StyledDashboard>
  );
};

export default Dashboard;
