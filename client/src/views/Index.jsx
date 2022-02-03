
import bootflix from '../pngs/bootflix.png';
import {useHistory} from "react-router-dom";
import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';


export default function Index() {
    const history = useHistory();
    
    const buttons = [
        <Button onClick={e => history.push('/login')} key="one">Login</Button>,
        <Button onClick={e => history.push('/signup')} key="two">Register</Button>
    ];
    
    const onChangeHandler=(e) =>{
        e.preventDefault()
        history.push(e.target.value)
    }
    return (
    
    <Box
    sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            mt: 16,
            
        },
    }}
    >
    <button className='clear' onClick={() => history.push('/home')}><img className='logo' src={bootflix}></img></button>
    
    <ButtonGroup size="large" color = "error" aria-label="medium error button group">
        {buttons}
    </ButtonGroup>

    </Box>

    
);
}

//     return (
//         <div className=''>
            

//             <div>
//                     <select onChange={(e)=>onChangeHandler(e)}>
//                         <option type="hidden" value=""></option>
//                         <option value="/login">Log In</option>
//                         <option value="/signup">Sign Up</option>
//                     </select>
//                 </div>
//         </div>
//     )
// }

