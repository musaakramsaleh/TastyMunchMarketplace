import  { useContext } from 'react';
import { AuthContext } from '../../Components/Firebase_Provider/Firebase_Provider';

const UseAuth = () => {
    const all = useContext(AuthContext)
    return all
};

export default UseAuth;