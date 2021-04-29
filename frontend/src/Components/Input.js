import { FormControl, FormHelperText, InputLabel, Input as UiInput } from '@material-ui/core'

export default function Input({ type = "text", _value, _name, _onChange }) {
    return (
        <FormControl>
            <InputLabel htmlFor="my-input">{_name}</InputLabel>
            <UiInput id="my-input" aria-describedby="my-helper-text" type={type} value={_value} onChange={({ target: { value } }) => _onChange(_name, value)} />
            <FormHelperText id="my-helper-text">We'll never share your {_name?.toLowerCase()} with anyone.</FormHelperText>
        </FormControl>
    )
}