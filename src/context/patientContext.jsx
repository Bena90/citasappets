import {createContext, useState} from 'react';

export const PatientContext = createContext({});

const PatientProvider = ({children}) => {
    const [ patient, setPatient ] = useState ({})
    const [ patients, setPatients ] = useState (()=> {
        const valuesInLocalStorage = window.localStorage.getItem('patients');
        if (valuesInLocalStorage) {
            try {
                return JSON.parse(valuesInLocalStorage)
              } catch (error) {
                console.log('Error deserializing')
              }
        }else{
            return {}
        }
    }
    )

    const deletePatient = (id) => {
        const newList = patients.filter(item => item.id !== id)
        setPatients (newList)
    }
    return (
        <PatientContext.Provider value={{ patients, setPatients, patient, setPatient, deletePatient}}>
            {children}
        </PatientContext.Provider>
    )
}

export default PatientProvider; 