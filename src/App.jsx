
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Patients from "./components/Patients/Patients";
import PatientProvider from "./context/patientContext.jsx";

function App() {

  return (
    <PatientProvider>
      <div >
        <Header/>
        <main className='md:flex mt-5'>
          <Form/>
          <Patients/>
        </main>
      </div>
    </PatientProvider>
  )
}

export default App
