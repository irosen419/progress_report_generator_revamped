import { FormControl, FormHelperText, InputLabel, Input as UiInput } from '@material-ui/core'

export default function Input({ _type = "text", _value, _name, _error = false, _onChange }) {
    return (
        <FormControl>
            <InputLabel htmlFor="my-input">{_name}</InputLabel>
            <UiInput id="my-input" aria-describedby="my-helper-text" type={_type} value={_value} error={_error} onChange={({ target: { value } }) => _onChange(_name, value)} />
            <FormHelperText id="my-helper-text">We'll never share your {_name?.toLowerCase()} with anyone.</FormHelperText>
        </FormControl>
    )
}