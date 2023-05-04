import { FC, useState } from 'react'
import { Label, TextInput, Checkbox, Button, Alert } from 'flowbite-react'
import { gql, useMutation } from '@apollo/client';
import { useUserStore } from '@/state/user.store';
import { HiInformationCircle } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

interface LoginProps {

}

const Login: FC<LoginProps> = ({ }) => {

    const navigate = useNavigate()

    const [rememberMe, setRememberMe] = useState("off")
    const [input, setInput] = useState({ email: '', password: '' })
    const [isProcessing, setIsProcessing] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const { updateIsAuth } = useUserStore()

    const [login] = useMutation(LOGIN, {
        onError(error) {
            console.log("ERROR", error)
            setErrorMessage(error.message)
            setIsProcessing(false)
        },
        onCompleted(data) {
            console.log("DATA", data)
            if (rememberMe === "on") {
                localStorage.setItem("token", data.login)
                updateIsAuth()
            } else {
                sessionStorage.setItem("token", data.login)
                updateIsAuth()
            }
            setIsProcessing(false)
        },
    });

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setErrorMessage('')
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    return (
        <form className="flex flex-col gap-4" onSubmit={e => {
            e.preventDefault();
            setIsProcessing(true)
            login({ variables: { ...input } });
        }}>
            {errorMessage ?
                <Alert
                    color="failure"
                    icon={HiInformationCircle}
                >
                    <span>
                        <span className="font-medium">
                            Error!
                        </span>
                        {' '}{errorMessage}
                    </span>
                </Alert> : null}
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email1" value="Your email" />
                </div>
                <TextInput
                    id="email1"
                    type="email"
                    name='email'
                    required={true}
                    value={input.email}
                    onChange={handleChangeInput}
                // color='failure'
                // helperText={<><span className="font-medium">Alright!</span>{' '}Username available!</>}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="password1" value="Your password" />
                </div>
                <TextInput
                    id="password1"
                    type="password"
                    name='password'
                    required={true}
                    value={input.password}
                    onChange={handleChangeInput}
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
            <Button isProcessing={isProcessing} disabled={isProcessing} type="submit">
                Submit
            </Button>
            <div className='mx-auto'>
                <p>No account yet?
                    <span className="text-blue-600 hover:underline dark:text-blue-500 underline cursor-pointer ml-2" onClick={() => navigate('/auth/signup')}>
                        Register
                    </span>
                </p>
            </div>
        </form>
    )
}

const LOGIN = gql`
  mutation Login($email: String! $password: String!) {
    login(email: $email, password: $password)
  }
`;

export default Login