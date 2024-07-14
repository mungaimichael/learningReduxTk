import { useState, ChangeEvent, FormEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initUser } from "./redux/userDetailsSlice";

interface UserDetails {
    name: string;
    email: string;
}

const UserDetailsComp = () => {
    const dispatch = useDispatch()
    const [userDetailsValues, setUserDetailsValue] = useState<UserDetails>({ name: '', email: '' });

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserDetailsValue(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onSubmitForm = (e: FormEvent) => {
        e.preventDefault();
        dispatch(initUser(userDetailsValues));
        console.log(userDetailsValues);
    };


    const userDetails = useSelector((state) => state.userDetails)
    return (
        <div>
            <h1>Input the user details</h1>
            <form onSubmit={onSubmitForm}>
                <label htmlFor="name">User Name</label>
                <input type="text" name="name" value={userDetailsValues.name} onChange={onChangeValue} />
                <label htmlFor="email">User Email</label>
                <input type="text" name="email" value={userDetailsValues.email} onChange={onChangeValue} />
                <button type="submit">Submit</button>
            </form>

            <h2>
                Current user is <br /> {userDetails.name} <br />  with the email <br /> {userDetails.email}
            </h2>
        </div>
    );
};

export default UserDetailsComp;
