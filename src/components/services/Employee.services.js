import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../config/firebase-config";

// Get the collection reference from DB...
const employeeCollectionRef = collection(db, "Employees");

// Get all the employees...
const getEmployees = () => {
  const employeeList = getDocs(employeeCollectionRef);
  return employeeList;
};

// this method is used to get single employee
const getEmployee = (id) => {
  const employeeDoc = doc(db, "Employees", id);
  return employeeDoc;
};

// Add an employee...
const addEmployee = (newEmp) => {
  return addDoc(employeeCollectionRef, newEmp);
};

// Update Employee...
// const updateEmployee = (id, updateEmployee) => {
//   // first find the employee in doc
//   const employeeDoc = doc(db, "Employees", id);
//   return updateDoc(employeeDoc, updateEmployee);
// };

const updateEmployee = async (id, employeeUpdates) => {
  try {
    const employeeDoc = doc(db, "Employees", id);
    await updateDoc(employeeDoc, employeeUpdates);
    console.log("Employee updated successfully!");
  } catch (error) {
    console.error("Error updating employee:", error);
    throw error; // Rethrow the error to be handled by the caller
  }
};

// Delete an employee...
const deleteEmployee = (id) => {
  const employeeDoc = doc(db, "Employees", id);
  return deleteDoc(employeeDoc);
};
const CRUD_OP = {
  getEmployees,
  getEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
export default CRUD_OP;
