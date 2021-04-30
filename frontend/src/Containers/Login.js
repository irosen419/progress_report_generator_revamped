import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Input from '../Components/Input';
import { Container, FormGroup, Button } from '@material-ui/core';
import { useStyles } from '../Styles/makeStyles'

export default function Login() {

    const history = useHistory()

    const [loginCredentials, setLoginCredentials] = useState({ password: "", email: "" })
    const { password, email } = loginCredentials

    const setFormValues = (name, value) => {
        setLoginCredentials({ ...loginCredentials, [name.toLowerCase()]: value })
    }

    const formSubmit = () => {
        history.push('/dashboard')
    }

    const { flex } = useStyles()

    return (
        <Container id="login" className={flex}>
            <FormGroup>
                <Input _type="email" _value={email} _name="Email" _onChange={setFormValues} />
                <Input _type="password" _value={password} _name="Password" _onChange={setFormValues} />
                <Button variant="submit" onClick={formSubmit} >Login</Button>
            </FormGroup>
            <p>Not a member? <Link to="/signup">Sign Up!</Link></p>
        </Container>
    )
}