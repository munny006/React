import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUser = useLoaderData();
    const handleUpdate = event => {
        event.preventDefaul();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name,email)
    }
    return (
        <div>
            <h3>Update information of {loadedUser.name}</h3>
            <form onSubmit={handleUpdate}>
                <input type='text' name='name' defaultValue={loadedUser?.name} /><br/><br/>
                <input type='email' name='email' defaultValue={loadedUser?.email} /><br/><br/>
                <input type='submit' value="update" />

            </form>
        </div>
    );
};

export default Update;