import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { saveConact } from './reduxComponent/contact.action';

export default function Add() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const dispacher = useDispatch();
    const saveData = (e) => {
        e.prevantDefault();
        console.log("called")
        const contact = { name: name, email: email, number: number };
        dispacher(saveConact(contact));
    }

    return (
        <div className='container'>
            <h1>Add Contact Detail</h1>
            <div className='row'>
                <div className='col-sm-12 col-md-6 col-lg-4 mx-auto'>

                    <div className='shadow p-5'>
                        <form onSubmit={saveData}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Person Name</label>
                                <input type="text" className="form-control" id="name" aria-describedby="emailHelp" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputnumber1" className="form-label">number</label>
                                <input type="number" className="form-control" id="exampleInputnumber1" value={number} onChange={(e) => setNumber(e.target.value)} />
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}
