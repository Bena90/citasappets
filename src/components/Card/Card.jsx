import React, { useState } from 'react';
import usePatients from '../../hook/usePatients';

const Card = ({pat}) => {
    const {setPatients, deletePatient, patients} = usePatients()

    const [ editState, setEditState ] = useState (false);
    const [ editValue, setEditValue ] = useState ({});

    const handleEdit = (dato) => {
        setEditValue (dato)
        setEditState(true)        
    }

    const handleChange = (evt) => {
        if (evt.id === 'name'){
            setEditValue((prev) => ({...prev, name: evt.value}))
        }else if (evt.id === 'ownerName'){
            setEditValue((prev) => ({...prev, ownerName: evt.value}))
        }else if (evt.id === 'email'){
            setEditValue((prev) => ({...prev, email: evt.value}))
        }else if (evt.id === 'date'){
            setEditValue((prev) => ({...prev, date: evt.value}))
        }else if (evt.id === 'symptom'){
            setEditValue((prev) => ({...prev, symptom: evt.value}))
        }
    }

    const handleSubmit = () => {
        let uploadPatients = patients.map(element => (element.id === editValue.id) ? editValue : element)
        setPatients(uploadPatients)
        setEditValue({})
        setEditState (false)
    }

    return (
        <div className='shadow-lg shadow-purple-200 rounded-lg px-2 pt-2 pb-4 m-2 bg-white'>
            <p className='font-semibold'>
                Nombre: {' '}
                { editState ? 
                    <input 
                        type="text"
                        id='name'
                        className='mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-rose-200 focus:ring-rose-300 block w-full rounded-md sm:text-sm focus:ring-1'
                        value={editValue.name}
                        onChange={ (e) => handleChange (e.target) }
                    />
                :
                    <span className='font-normal'>
                        {' '+pat.name}
                    </span>
                }
            </p>
            <p className='font-semibold'>
                Propietario:  {' '}
                { editState ? 
                    <input 
                        type="text" 
                        id='ownerName'
                        className='mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-rose-200 focus:ring-rose-300 block w-full rounded-md sm:text-sm focus:ring-1'
                        value={editValue.ownerName}
                        onChange={ (e) => handleChange (e.target) }
                    />
                :
                    <span className='font-normal'>
                        {' '+pat.ownerName}
                    </span>
                }
            </p>
            <p className='font-semibold'>
                Email de contacto: {' '} 
                { editState ? 
                    <input 
                        type="text" 
                        id='email'
                        className='mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-rose-200 focus:ring-rose-300 block w-full rounded-md sm:text-sm focus:ring-1'
                        value={editValue.email}
                        onChange={ (e) => handleChange (e.target) }
                    />
                :
                    <span className='font-normal'>
                        {' '+pat.email}
                    </span>
                }
            </p>
            <p className='font-semibold'>
                Fecha de alta: {' '}
            { editState ? 
                    <input 
                        type="text" 
                        id='date'
                        className='mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-rose-200 focus:ring-rose-300 block w-full rounded-md sm:text-sm focus:ring-1'
                        value={editValue.date}
                        onChange={ (e) => handleChange (e.target) }
                    />
                :
                    <span className='font-normal'>
                        {' '+pat.date}
                    </span>
                }
            </p>
            <p className='font-semibold'>
                Síntomas: 
            </p>
            <p className='font-normal indent-3'>
            { editState ? 
                    <textarea 
                        type="text"
                        id='symptom'
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-purple-200 focus:ring-purple-300 block w-full rounded-md sm:text-sm focus:ring-1"
                        value={editValue.symptom}
                        onChange={ (e) => handleChange (e.target) }
                    />
                :
                    <span className='font-normal'>
                        {' '+pat.symptom}
                    </span>
                }
            </p>
            <div className='flex justify-evenly'>
                {
                    !editState ?
                        <button
                            type="button" 
                            className='mx-3 mt-2 py-1 px-6 bg-purple-500 hover:bg-purple-700 font-semibold text-white rounded-lg'
                            onClick={ () => handleEdit(pat) }
                        >
                            Editar
                        </button>
                    :
                        <button
                            type="button" 
                            className='mx-3 mt-2 py-1 px-6 bg-green-500 hover:bg-green-700 font-semibold text-white rounded-lg'
                            onClick={ () => handleSubmit () }
                        >
                            Guardar
                        </button>

                }
                <button 
                    type="button" 
                    className='mx-3 mt-2 py-1 px-6 bg-red-500 hover:bg-red-700 font-semibold text-white rounded-lg'
                    onClick={ () => deletePatient(pat.id)}
                >
                    Borrar
                </button>
            </div>
        </div>
    );
}

export default Card;
