import { FC, useState } from 'react'
import { Label, TextInput, Checkbox, Button, Alert } from 'flowbite-react'
import { gql, useMutation } from '@apollo/client';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

interface SignupProps {

}

const Signup: FC<SignupProps> = ({ }) => {

    const navigate = useNavigate()

    const [input, setInput] = useState({ firstName: '', lastName: '', email: '', password: '' })
    const [agree, setAgree] = useState("off")
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isProcessing, setIsProcessing] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const [signup] = useMutation(SIGNUP, {
        onError(error) {
            console.log("ERROR", error)
            setErrorMessage(error.message)
            setIsProcessing(false)
        },
        onCompleted(data) {
            console.log("DATA", data)
            setIsProcessing(false)
        },
    });

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    return (
        <form className="md:w-3/4 lg:w-1/2 xl:w-1/3 mx-auto border rounded-md shadow-md p-5 mt-10 flex flex-col gap-4" onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (agree !== "on") {
                setErrorMessage("Please agree with terms and conditions")
                return
            }
            setIsProcessing(true)
            signup({ variables: { createUserInput: input } });
        }}>
            {errorMessage ?
                <Alert
                    color="failure"
                    icon={HiOutlineInformationCircle}
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
                    <Label
                        htmlFor="firstName"
                        value="Your first name"
                    />
                </div>
                <TextInput
                    id="firstName"
                    name='firstName'
                    value={input.firstName}
                    onChange={handleChangeInput}
                    required={true}
                    shadow={true}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="lastName"
                        value="Your last name"
                    />
                </div>
                <TextInput
                    id="lastName"
                    name='lastName'
                    value={input.lastName}
                    onChange={handleChangeInput}
                    required={true}
                    shadow={true}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="email2"
                        value="Your email"
                    />
                </div>
                <TextInput
                    id="email2"
                    type="email"
                    name='email'
                    value={input.email}
                    onChange={handleChangeInput}
                    required={true}
                    shadow={true}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="password2"
                        value="Your password"
                    />
                </div>
                <TextInput
                    id="password2"
                    type="password"
                    name="password"
                    value={input.password}
                    onChange={handleChangeInput}
                    required={true}
                    shadow={true}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="repeat-password"
                        value="Repeat password"
                    />
                </div>
                <TextInput
                    id="repeat-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required={true}
                    shadow={true}
                    color={(input.password !== '' && confirmPassword !== '') ? (input.password !== confirmPassword ? 'failure' : 'success') : ''}
                    helperText={input.password !== '' && confirmPassword !== '' && (input.password !== confirmPassword ? 'Passwords not match' : 'Passwords match')}
                />
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="agree" checked={agree === "on"} value={agree} onChange={(e) => {
                    setErrorMessage('')
                    setAgree(e.target.value === "on" ? "off" : "on")
                }} />
                <Label htmlFor="agree" className='flex gap-1'>
                    <p>I agree with the</p>
                    <p
                        onClick={() => navigate('/terms-and-conditions')}
                        className="text-blue-600 hover:underline dark:text-blue-500 cursor-pointer"
                    >
                        Terms and Conditions
                    </p>
                </Label>
            </div>
            <Button isProcessing={isProcessing} disabled={isProcessing} type="submit">
                Register new account
            </Button>
            <div className='mx-auto'>
                <p>Already have an account?
                    <span className="text-blue-600 hover:underline dark:text-blue-500 underline cursor-pointer ml-2" onClick={() => navigate('/auth/signin')}>
                        Login
                    </span>
                </p>
            </div>
        </form>
    )
}

const SIGNUP = gql`
  mutation Register($createUserInput: CreateUserInput!) {
    register(createUserInput: $createUserInput)
  }
`;

export default Signup