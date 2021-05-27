// import { useState } from 'react'

// // import TeachStack from './TechStack'
// const AddEmployee = ({ onAdd }) => {
//     const [name, setText] = useState('')
//     const [LastName, setLastName] = useState('')

//     // const [reminder, setReminder] = useState(false)
//     const [Role, setRole] = useState('')
//     const [Email, setEmail] = useState('')
//     const [Type, setType] = useState('')



//     const onSubmit = (e) => {

//         e.preventDefault()
//         if (!name) {
//             alert('Please add a task')
//             return
//         }
//         onAdd({ name,LastName, Role, Email,Type })
//         setText('')
//         setLastName ("")
//        setRole('')
//         setEmail('')
//         setType('')
//         // setReminder(false)
//     }

//     return (
//         <form className='add-form' onSubmit={onSubmit}>
//             <div className='form-control'>
//                 <label>First Name</label>
//                 <input

//                     type='text'
//                     name="synopis"
//                     placeholder='First Name'
//                     value={name}
//                     onChange={(e) => setText(e.target.value)}
//                 />
//             </div>
//             <div className='form-control'>
//                 <label>Last Name</label>
//                 <input
//                     name="synopis"
//                     type='text'
//                     placeholder='Last Name'
//                     value={LastName}
//                     onChange={(e) => setType(e.target.value)}
//                 />
//             </div>

//             <div className='form-control'>
//                 <label>Select Role</label>
//                 <select
//                     type=''
//                     name="author"
//                     placeholder='Role'
//                     value={Role}
//                     onChange={(e) => setRole(e.target.value)}
//                 />
//             </div>
//             <div className='form-control'>
//                 <label>Email</label>
//                 <input
//                     name="synopis"
//                     type='text'
//                     placeholder='Email'
//                     value={Email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//             </div>
//             <div className='form-control'>
//                 <label>Employee Type</label>
//                 <input
//                     name="synopis"
//                     type='text'
//                     placeholder='Type'
//                     value={Type}
//                     onChange={(e) => setType(e.target.value)}
//                 />
//             </div>
       


//             {/* <div className='form-control form-control-check'>
//                 <label>Set Reminder</label>
//                 <input
//                     type='checkbox'
//                     checked={reminder}
//                     value={reminder}
//                     onChange={(e) => setReminder(e.currentTarget.checked)}
//                 />
//             </div> */}
//             <input type='submit' value='Add Emplyee' className='btn btn-block' />
//         </form>
//     )
// }

// export default AddEmployee