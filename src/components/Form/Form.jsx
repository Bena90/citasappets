import { useFormik } from 'formik';
import { useEffect } from 'react'
import * as Yup from 'yup'
import usePatients from '../../hook/usePatients';
import generateId from '../../services/generateId';
import Error from '../Error/Error';

const Form = () => {

    const {setPatients, patients} = usePatients();

        const initialValues = {
        name: '',
        ownerName: '',
        email: '',
        date: '',
        symptom: '',
    }
    
    useEffect(() => {
        window.localStorage.setItem('patients', JSON.stringify(patients))
      }, [patients])

    const validationSchema = () =>
        Yup.object().shape({
            name: Yup.string().required(),
            ownerName: Yup.string().required(),
            email: Yup.string().email().required(),
            date: Yup.date().required(),
            symptom: Yup.string().min(6).required(),
    })

    const onSubmit = () => {
        let datos = formik.values
        datos.id = generateId()
        console.log(datos)
        setPatients(prev => ([...prev, datos]))
        formik.resetForm()
    }
    
    const formik = useFormik({initialValues, validationSchema, onSubmit})
    
    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className='text-xl'>AGREGAR PACIENTE:</h2>
            <p>Añade pacientes con este formulario</p>

            <form 
                className="shadow-lg shadow-purple-200 rounded-lg px-2 pt-1 pb-4 m-2 bg-white"
                onSubmit={formik.handleSubmit}
            >
                <div className='m-2 flex flex-col'>
                    <label htmlFor="name">Nombre de la mascota:</label>
                    <input
                        id='name'
                        className='mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-rose-200 focus:ring-rose-300 block w-full rounded-md sm:text-sm focus:ring-1'
                        type="text"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                    {formik.errors.name && formik.touched.name &&
                        <Error>
                            <span>*{formik.errors.name}</span> 
                        </Error>
                    }
                <div className='m-2 flex flex-col'>
                    <label htmlFor="ownerName">Nombre del dueño:</label>
                    <input
                        id='ownerName'
                        className='mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-rose-200 focus:ring-rose-300 block w-full rounded-md sm:text-sm focus:ring-1'
                        type="text"
                        value={formik.values.ownerName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                    {formik.errors.ownerName && formik.touched.ownerName &&
                        <Error>
                            <span>*{formik.errors.ownerName}</span> 
                        </Error>
                    }
                <div className='m-2 flex flex-col'>
                    <label htmlFor="email">Email de contacto:</label>
                    <input
                        id='email'
                        className='mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-rose-200 focus:ring-rose-300 block w-full rounded-md sm:text-sm focus:ring-1'
                        type="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                    {formik.errors.email && formik.touched.email &&
                        <Error>
                            <span>*{formik.errors.email}</span> 
                        </Error>
                    }
                <div className='m-2 flex flex-col'>
                    <label htmlFor="date">Fecha de alta:</label>
                    <input
                        id='date'
                        className='mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-rose-200 focus:ring-rose-300 block w-full rounded-md sm:text-sm focus:ring-1'
                        type="date"
                        value={formik.values.date}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                    {formik.errors.date && formik.touched.date &&
                        <Error>
                            <span>*{formik.errors.date}</span> 
                        </Error>
                    }
                <div className='m-2 flex flex-col'>
                    <label htmlFor="symptom">Describe los síntomas:</label>
                    <textarea
                        name="symptom"
                        id="symptom"
                        cols="30"
                        rows="10"
                        value={formik.values.symptom}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-purple-200 focus:ring-purple-300 block w-full rounded-md sm:text-sm focus:ring-1"
                    />
                </div>
                    {formik.errors.symptom && formik.touched.symptom &&
                        <Error>
                            <span>*{formik.errors.symptom}</span> 
                        </Error>
                    }
                <button
                    type="submit"
                    className="p-1 bg-purple-500 hover:bg-purple-700 w-full mt-2 font-semibold text-white rounded-lg"
                    >
                    Agregar
                </button>
            </form>
        </div>
    )
}

export default Form;