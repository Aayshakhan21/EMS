import { useState } from "react";
import CRUD_OP from "../services/Employee.services";
import Navbar from "../navbar/Navbar";
import { useNavigate } from "react-router-dom";

const { addEmployee } = CRUD_OP;

export default function AddEmp() {
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

    const newEmp = { name, email, phone, age, address, dept, salary, empType };
    setMessage("");

    try {
      await addEmployee(newEmp);
      // setMessage({ error: false, msg: "New Employee added successfully..." });
      // // Navigate to the homepage after a successful submission
      // navigate("/");
      setMessage({ error: false, msg: "New Employee added successfully..." });

      setTimeout(() => {
        navigate("/");
      }, 1000); // Wait 2 seconds before navigating
    } catch (err) {
      console.log(err);
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
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {message?.msg && (
        <div
          className={`mx-auto w-[90%] max-w-3xl mt-6 p-4 rounded-lg flex justify-between items-center 
                    ${
                      message.error
                        ? "bg-red-100 text-red-700"
                        : "bg-green-100 text-green-700"
                    }`}
        >
          <p className="text-lg font-medium">{message.msg}</p>
          <button
            className="ml-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            onClick={() => {
              setMessage("");
              navigate("/");
            }}
          >
            Close
          </button>
        </div>
      )}

      <div className="flex justify-center items-center mt-10">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-md w-full max-w-3xl"
        >
          <h3 className="text-2xl font-bold text-center text-gray-700 mb-6">
            Add an Employee
          </h3>

          {/* Input Field */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField label="Name" value={name} onChange={setName} />
            <InputField
              label="Email"
              type="email"
              value={email}
              onChange={setEmail}
            />
            <InputField label="Phone" value={phone} onChange={setPhone} />
            <InputField
              label="Age"
              type="number"
              value={age}
              onChange={setAge}
            />
            <InputField label="Department" value={dept} onChange={setDept} />
            <InputField
              label="Employment Type"
              value={empType}
              onChange={setEmpType}
            />
            <InputField
              label="Salary"
              type="number"
              value={salary}
              onChange={setSalary}
            />
          </div>

          {/* Address */}
          <div className="mt-4">
            <label className="block font-semibold text-gray-700 mb-1">
              Address
            </label>
            <textarea
              className="w-full border border-gray-300 rounded px-3 py-2"
              rows="3"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter employee address"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded w-full sm:w-1/2"
            >
              Submit
            </button>
          </div>

          <p className="text-center mt-4 text-gray-600">
            Go to{" "}
            <a href="/" className="text-blue-500 underline">
              home
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

// Custom input field component
function InputField({ label, type = "text", value, onChange }) {
  return (
    <div>
      <label className="block font-semibold text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        className="w-full border border-gray-300 rounded px-3 py-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </div>
  );
}
