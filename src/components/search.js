import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

import { useDispatch } from 'react-redux';
import { setSearchMe } from '../redux/searchUp';

export const Search = () => {
    const dispatch = useDispatch();
    const [searching, setSearching] = useState("");

    const submit = (e) => {
        if(searching.length > 0){
            dispatch(setSearchMe(searching));
            setSearching("");
        }
        e.preventDefault();
    }

    return(
        <Form onSubmit={(e) => submit(e)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control 
                type="text" 
                placeholder="ex. Fight Club "
                value={searching}
                onChange={(e) => setSearching(e.target.value)}/>
            </Form.Group>
        </Form>
    );
}