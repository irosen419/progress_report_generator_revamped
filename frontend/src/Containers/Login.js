import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Input from '../Components/Input';
import { Container, FormGroup, Button } from '@material-ui/core';

export default function Login() {

    const history = useHistory()

    const [credentials, setCredentials] = useState({ full_name: "", email: "" })
    const { full_name, email } = credentials

    const setFormValues = (name, value) => {
        name = name.toLowerCase().split(" ").join("_")
        setCredentials({ ...credentials, [name]: value })
    }

    const formSubmit = () => {
        history.push('/dashboard')
    }

    return (
        <Container id="login">
            <FormGroup>
                <Input _value={full_name} _name="Full Name" _onChange={setFormValues} />
                <Input _value={email} _name="Email" _onChange={setFormValues} />
                <Button variant="submit" onClick={formSubmit} >Login</Button>
            </FormGroup>
            <p>Not a member? <Link to="/signup">Sign Up!</Link></p>
        </Container>
    )
}