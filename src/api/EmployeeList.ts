import { useQuery } from "react-query";
import axios from "axios";
import { toast } from "react-toastify";

export const useEmployeeList = () => {
  return useQuery("useEmployeeList", async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/ddb7e0a8-e218-4e36-b1be-b902cdb1c098`
      );
      return response.data;
    } catch (error) {
      toast.error("Opps!! Error Employee List.");
      throw error;
    }
  });
};
