import { useContext } from "react"
import { PatientContext } from "../context/PatientContext"

const usePatients = () => useContext (PatientContext) ;

export default usePatients