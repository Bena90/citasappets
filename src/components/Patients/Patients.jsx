import React, { useContext } from 'react';
import { PatientContext } from '../../context/PatientContext';
//import usePatients from '../../hook/usePatients';
import Card from '../Card/Card';


const Patients = () => {
    const {patients} = useContext(PatientContext)

    return (
        <div className='md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll mx-5 '>
            {
                (patients.length !== undefined) ? 
                <>
                    <h2 className='text-xl'>PACIENTES INGRESADOS:</h2>
                    <p>Administra tus pacientes</p>
                    {
                        patients.map((pat) => <Card key={pat.id} pat={pat}/>)
                    }
                </>
                :
                <>
                    <h2 className='text-xl'>NO HAY PACIENTES INGRESADOS</h2>
                    <p>Comienza agregando pacientes</p>
                </>
            }

        </div>

    );
}

export default Patients;
