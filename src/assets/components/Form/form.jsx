// import React, { useState, useEffect } from 'react';
// import getdata from './helper';
// import '../Form/form.css'

// function Form() {
//     const [input, setInput] = useState({
//         fname: '',
//         lname: '',
//         email: '',
//         address: '',
//         phone: '',
//         id: null
//     });

//     const [data, setData] = useState(() => {
//         const localData = localStorage.getItem('data');
//         return localData ? JSON.parse(localData) : getdata();
//     });

//     const handleChange = (e) => {
//         const name = e.target.name;
//         const value = e.target.value;
//         setInput({ ...input, [name]: value });
//     };

//     const handleEdit = (id) => {
//         const updateData = data.find((item) => item.id === id);
//         if (updateData) {
//             setInput({ ...updateData });
//         }
//     };

//     const handleDelete = (id) => {
//         const filteredData = data.filter((item) => item.id !== id);
//         setData(filteredData);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (input.id) {
//             // Edit existing data
//             const updatedData = data.map((item) =>
//                 item.id === input.id ? input : item
//             );
//             setData(updatedData);
//         } else {
//             // Add new entry
//             const newData = { ...input, id: Math.floor(Math.random() * 10000) };
//             setData([...data, newData]);
//         }

//         setInput({
//             fname: '',
//             lname: '',
//             email: '',
//             address: '',
//             phone: '',
//             id: null
//         });
//     };

//     useEffect(() => {
//         localStorage.setItem('data', JSON.stringify(data));
//     }, [data]);

//     return (
//         <div className='container'>
//                 <h1 className="text-center bg-primary text-white p-2 mt-5" >Employee Management Form</h1>
//             <form className="g-3 box" onSubmit={handleSubmit} >
//                 <div className='box-center'>

//                 <div className="col-md-6">
//                     <label htmlFor="id" className="form-label bg-primary text-white w-100 text-center p-3 fw-bold fs-3 mt-5">New Employee</label>
//                     <br />
//                     <label htmlFor="name" className="form-label">first-Name</label>
//                     <input type="text" className="form-control" id="fname" name="fname" value={input.fname} onChange={handleChange} />
//                 </div>
//                 <div className="col-md-6">
//                     <label htmlFor="name" className="form-label">last-name</label>
//                     <input type="text" className="form-control" id="lname" name="lname" value={input.lname} onChange={handleChange} />
//                 </div>
//                 <div className="col-md-6">
//                     <label htmlFor="email" className="form-label">Email</label>
//                     <input type="email" className="form-control" id="email" name="email" value={input.email} onChange={handleChange} />
//                 </div>
//                 <div className="col-md-6">
//                     <label htmlFor="email" className="form-label">Phone</label>
//                     <input type="text" className="form-control" id="phone" name="phone" value={input.phone} onChange={handleChange} />
//                 </div>
//                 <div className="col-6">
//                     <label htmlFor="address" className="form-label">Address</label>
//                     <input type="text" className="form-control" id="address" name="address" value={input.address} onChange={handleChange} />
//                 </div>
//                 <div className="col-6">
//                     <button type="submit" className="btn btn-primary mt-5">{input.id ? 'Update' : 'Sign in'}</button>
//                 </div>
//                 </div>
//             </form>
            
//             <h1 className="text-center bg-primary text-white p-2 mt-5">View Data</h1>
//             <table className="table">
//                 <thead>
//                     <tr>
//                         {/* <th scope="col">SR.no</th> */}
//                         <th scope="col">SR.NO</th>
//                         <th scope="col">First Name</th>
//                         <th scope="col">Last Name</th>
//                         <th scope="col">Email</th>
//                         <th scope="col">Phone</th>
//                         <th scope="col">Address</th>
//                         <th scope="col">Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((item, index) => (
//                         <tr key={item.id}>
//                             {/* <th scope="row">{index + 1}</th> */}
//                             <td>{item.id}</td>
//                             <td>{item.fname}</td>
//                             <td>{item.lname}</td>
//                             <td>{item.email}</td>
//                             <td>{item.phone}</td>
//                             <td>{item.address}</td>
//                             <td>
//                                 <button className='btn btn-warning me-2' onClick={() => handleEdit(item.id)}>Edit</button>
//                                 <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default Form;



import React, { useState, useEffect } from 'react';
import getdata from './helper';
import '../Form/form.css';

function Form() {
    const [input, setInput] = useState({
        fname: '',
        lname: '',
        email: '',
        address: '',
        phone: '',
        dob: '',
        salary: '',
        status: '',
        id: null
    });

    const [data, setData] = useState(() => {
        const localData = localStorage.getItem('data');
        return localData ? JSON.parse(localData) : getdata();
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput({ ...input, [name]: value });
    };

    const handleEdit = (id) => {
        const updateData = data.find((item) => item.id === id);
        if (updateData) {
            setInput({ ...updateData });
        }
    };

    const handleDelete = (id) => {
        const filteredData = data.filter((item) => item.id !== id);
        setData(filteredData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input.id) {
            // Edit existing data
            const updatedData = data.map((item) =>
                item.id === input.id ? input : item
            );
            setData(updatedData);
        } else {
            // Add new entry
            const newData = { ...input, id: Math.floor(Math.random() * 10000) };
            setData([...data, newData]);
        }

        setInput({
            fname: '',
            lname: '',
            email: '',
            address: '',
            phone: '',
            dob: '',
            salary: '',
            status: '',
            id: null
        });
    };

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data));
    }, [data]);

    return (
        <div className='body'>
            <div className='main'>
                <h1 style={{backgroundColor: '#323949'}} className="text-center  text-white p-5" >Employee Management Form</h1>
                <form className="g-3 box" onSubmit={handleSubmit} >
                    <div className='box-center'>
                        <div className="col-md-6">
                            <label htmlFor="fname" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="fname" name="fname" value={input.fname} onChange={handleChange} required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="lname" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="lname" name="lname" value={input.lname} onChange={handleChange} required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" name="email" value={input.email} onChange={handleChange} required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input type="text" className="form-control" id="phone" name="phone" value={input.phone} onChange={handleChange} required />
                        </div>
                        <div className="col-6">
                            <label htmlFor="dob" className="form-label">Date of Birth</label>
                            <input type="date" className="form-control" id="dob" name="dob" value={input.dob} onChange={handleChange} required />
                        </div>
                        <div className="col-6">
                            <label htmlFor="salary" className="form-label">Salary</label>
                            <input type="number" className="form-control" id="salary" name="salary" value={input.salary} onChange={handleChange} required />
                        </div>
                        <div className="col-6">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="text" className="form-control" id="address" name="address" value={input.address} onChange={handleChange} required />
                        </div>
                        <div className="col-6">
                            <label htmlFor="status" className="form-label">Working Status</label>
                            <select className="form-control" id="status" name="status" value={input.status} onChange={handleChange} required>
                                <option value="">Select Status</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                        <div className="col-6">
                            <button type="submit" className="btn btn-primary mt-5">{input.id ? 'Update' : 'Sign in'}</button>
                        </div>
                    </div>
                </form>

                <h1 className="text-center text-white p-2 mt-5" style={{backgroundColor: '#323949'}}>View Data</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">SR.NO</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">DOB</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Status</th>
                            <th scope="col">Address</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.fname}</td>
                                <td>{item.lname}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.dob}</td>
                                <td>{item.salary}</td>
                                <td>{item.status}</td>
                                <td>{item.address}</td>
                                {/* <td>{item.id}</td> */}
                                <td>
                                    <button style={{backgroundColor:'#40445A'}} className='btn  me-2' onClick={() => handleEdit(item.id)}>Edit</button>
                                    <button style={{backgroundColor:'#40445A'}} className='btn ms-2' onClick={() => handleDelete(item.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Form;
