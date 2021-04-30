import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Input from '../Components/Input';
import { Container, FormGroup, Button } from '@material-ui/core';
import { useStyles } from '../Styles/makeStyles'

export default function Signup() {
    const history = useHistory()

    const [signUpCredentials, setSignUpCredentials] = useState({ first_name: "", last_name: "", email: "" })
    const { first_name, last_name, email } = signUpCredentials

    const setFormValues = (name, value) => {
        name = name.toLowerCase().split(" ").join("_")
        setSignUpCredentials({ ...signUpCredentials, [name]: value })
    }

    const formSubmit = () => {
        history.push('/dashboard')
    }

    const { flex } = useStyles()

    return (
        <Container className={flex}>
            <FormGroup>
                <Input _value={last_name} _name="Last Name" _onChange={setFormValues} />
                <Input _value={first_name} _name="First Name" _onChange={setFormValues} />
                <Input _type="email" _value={email} _name="Email" _onChange={setFormValues} />
                <Button variant="submit" onClick={formSubmit} >Sign Up</Button>
            </FormGroup>
            <p>Already a member? <Link to="/login">Log In!</Link></p>
        </Container>
    )
}