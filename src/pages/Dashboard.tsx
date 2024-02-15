import { useEffect, useState } from "react";
import Administrators from "../components/Dashboard/Administrator";
import Members from "../components/Dashboard/Members";
import Divider from "@mui/material/Divider";
import { Employee } from "../types/Employee";

const Dashboard = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    fetch(`https://mocki.io/v1/ddb7e0a8-e218-4e36-b1be-b902cdb1c098`)
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);

  const administrators = employees.filter(
    (employee) => employee.role === "admin"
  );
  const members = employees.filter((employee) => employee.role === "member");

  return (
    <div
      style={{
        paddingTop: "64px",
        paddingLeft: "60px",
        paddingRight: "60px",
        background: "#f9f9fb",
      }}
    >
      <Administrators administrators={administrators} filter={filter} />
      <Divider sx={{ marginTop: "50px", marginBottom: "20px" }} />
      <Members members={members} />
    </div>
  );
};

export default Dashboard;
