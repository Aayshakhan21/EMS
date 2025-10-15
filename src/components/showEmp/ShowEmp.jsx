import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CRUD_OP from "../services/Employee.services";
import "./showEmp.css";

export default function ShowEmp() {
  const navigate = useNavigate();
  const [empList, setEmpList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await CRUD_OP.getEmployees();
        setEmpList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (empId) => {
    try {
      await CRUD_OP.deleteEmployee(empId);
      alert("Employee deleted successfully...");
      setEmpList(empList.filter((emp) => emp.id !== empId));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        EmployeeManagement.com
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-3 text-left">Sr No.</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Phone</th>
              <th className="px-4 py-3 text-left">Age</th>
              <th className="px-4 py-3 text-left">Address</th>
              <th className="px-4 py-3 text-left">Employment Type</th>
              <th className="px-4 py-3 text-left">Department</th>
              <th className="px-4 py-3 text-left">Salary</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {empList.map((emp, idx) => (
              <tr key={emp.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{idx + 1}</td>
                <td className="px-4 py-2">{emp.name}</td>
                <td className="px-4 py-2">{emp.email}</td>
                <td className="px-4 py-2">{emp.phone}</td>
                <td className="px-4 py-2">{emp.age}</td>
                <td className="px-4 py-2">{emp.address}</td>
                <td className="px-4 py-2">{emp.empType}</td>
                <td className="px-4 py-2">{emp.dept}</td>
                <td className="px-4 py-2">{emp.salary}</td>
                <td className="px-4 py-2 space-x-2">
                  <button
                    onClick={() => {
                      navigate("/updateEmp", { state: emp });
                    }}
                    className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(emp.id)}
                    className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {empList.length === 0 && (
              <tr>
                <td colSpan="10" className="text-center py-6 text-gray-500">
                  No employees found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
