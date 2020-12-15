import React, { useState } from 'react';

const HookUserForm = () => {
    const [user, setUser] = useState({ firstName: '', lastName: '', })
    return (
        <div className="card card-body">
            <div className="row">
                <form className="">
                    <div className="">
                        <div className="form-group">
                            <label htmlFor="first_name">First Name</label>
                            <input value={user.firstName} 
                                   onChange={e => setUser({ ...user, firstName: e.target.value })} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="last_name">Last Name</label>
                            <input value={user.lastName} 
                                   onChange={e => setUser({ ...user, lastName: e.target.value })} />
                        </div>
                        <hr/>
                        First Name : {user.firstName} <br />
                        Last Name  : {user.lastName}
                        <hr />
                        <pre>
                            {JSON.stringify(user)}
                        </pre>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default HookUserForm;