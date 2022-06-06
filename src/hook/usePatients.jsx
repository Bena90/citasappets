import { useContext } from "react"
import { PatientContext } from "../context/patientContext.jsx"

const usePatients = () => useContext (PatientContext) ;

export default usePatients