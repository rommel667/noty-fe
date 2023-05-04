import { FC, useState } from 'react'
import { Label, TextInput, Checkbox, Button } from 'flowbite-react'
import { gql, useMutation } from '@apollo/client';

interface LoginProps {

}

const Login: FC<LoginProps> = ({ }) => {
    const [rememberMe, setRememberMe] = useState("off")
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [login] = useMutation(LOGIN, {
        onCompleted(data) {
            console.log("DATA", data)
            if (rememberMe === "on") {
                localStorage.setItem("token", data.login)
            } else {
                sessionStorage.setItem("token", data.login)
            }
        },
    });

    return (
        <form className="flex flex-col gap-4 w-3/4 mx-auto border rounded-md shadow-md p-3" onSubmit={e => {
            e.preventDefault();
            login({ variables: { email, password } });
        }}>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email1" value="Your email" />
                </div>
                <TextInput
                    id="email1"
                    type="email"
                    required={true}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="password1" value="Your password" />
                </div>
                <TextInput
                    id="password1"
                    type="password"
                    required={true}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="remember" checked={rememberMe === "on"} value={rememberMe} onChange={(e) => {
                    console.log(e)
                    setRememberMe(e.target.value === "on" ? "off" : "on")
                }} />
                <Label htmlFor="remember">
                    Remember me
                </Label>
            </div>
            <Button type="submit">
                Submit
            </Button>
        </form>
    )
}

const LOGIN = gql`
  mutation Login($email: String! $password: String!) {
    login(email: $email, password: $password)
  }
`;

export default Login