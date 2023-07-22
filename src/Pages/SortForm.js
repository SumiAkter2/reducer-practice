import React, { useState } from 'react';

const SortForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submit = (e) => {
        e.preventDefault();
        const data = {
            firstName,lastName,email,password
        }
console.log(data);
    }
    return (
      <div>
        <form onSubmit={submit}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            onBlur={(e) => setFirstName(e.target.value)}
          />
          <br />
          <label htmlFor="lastName">Last Name</label>
          <br />
          <input
            type="text"
            name="lastName"
            id="lastName"
            onBlur={(e) => setLastName(e.target.value)}
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            name="email"
            id="email"
            onBlur={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="text"
            name="password"
            id="password"
            onBlur={(e) => setPassword(e.target.value)}
          />
          <br />
          <button>submit</button>
        </form>
      </div>
    );
};

export default SortForm;