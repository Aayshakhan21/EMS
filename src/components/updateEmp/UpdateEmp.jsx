import { useEffect, useState } from "react";
import CRUD_OP from "../services/Employee.services";
import Navbar from "../navbar/Navbar";
import { useLocation, useNavigate } from "react-router-dom";

const { updateEmployee } = CRUD_OP;

export default function UpdateEmp() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [dept, setDept] = useState("");
  const [empType, setEmpType] = useState("");
  const [salary, setSalary] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });

  useEffect(() => {
    if (state) {
      setName(state.name || "");
      setEmail(state.email || "");
      setPhone(state.phone || "");
      setAge(state.age || "");
      setAddress(state.address || "");
      setDept(state.dept || "");
      setEmpType(state.empType || "");
      setSalary(state.salary || "");
    }
  }, [state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !name ||
      !email ||
      !phone ||
      !age ||
      !address ||
      !dept ||
      !empType ||
      !salary
    ) {
      setMessage({ error: true, msg: "All fields are mandatory..." });
      return;
    }

    const updateEmp = {
      name,
      email,
      phone,
      age,
      address,
      dept,
      empType,
      salary,
    };

    setMessage("");
    try {
      await updateEmployee(state.id, updateEmp);
      setMessage({
        error: false,
        msg: "Employee updated successfully. Redirecting to home in 3 sec...",
      });
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    // Clear fields
    setName("");
    setEmail("");
    setPhone("");
    setAge("");
    setAddress("");
    setDept("");
    setEmpType("");
    setSalary("");
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <Navbar />

      {message.msg && (
        <div
          className={`max-w-3xl mx-auto mt-4 p-4 rounded-lg shadow text-lg font-medium flex justify-between items-center
          ${
            message.error
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          <p>{message.msg}</p>
          <button
            className="ml-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
            onClick={() => {
              setMessage("");
              navigate("/");
            }}
          >
            Close
          </button>
        </div>
      )}

      <div className="max-w-3xl mx-auto bg-white p-6 mt-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Update an Employee
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter employee name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter employee email"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Phone
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter employee phone number"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Age
            </label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter employee age"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Address
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              rows="3"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter employee address"
            />
          </div>

          {/* Department */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Department
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              value={dept}
              onChange={(e) => setDept(e.target.value)}
              placeholder="Enter department"
            />
          </div>

          {/* Employment Type */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Employment Type
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              value={empType}
              onChange={(e) => setEmpType(e.target.value)}
              placeholder="Enter employment type"
            />
          </div>

          {/* Salary */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Salary
            </label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              placeholder="Enter salary"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded-lg transition"
            >
              Submit
            </button>
          </div>

          <p className="text-center mt-4 text-sm">
            Go to{" "}
            <span
              className="text-blue-600 hover:underline cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
