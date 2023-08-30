import {StyledTextInput,StyledFormArea,
    StyledFormButton,StyledFormButton1,StyledLabel,
    Avatar,StyledTitle,colors,ButtonGroup,ExtraText,TextLink,CopyrightText} 
    from './../components/Styles';

import Logo from './../assest/logo1.png';
import { auth, provider } from "../config/firebase.tsx";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

//formik
import {Formik,Form } from 'formik';
import {TextInput} from "./../components/FormLib";
import * as Yup from  'yup';

import {FiMail ,FiLock} from 'react-icons/fi';

const Login = () => {
    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result);
        navigate("/home");
    };
    return (
       <div>
        <StyledFormArea>
            <Avatar image={Logo}/>
            <StyledTitle color={colors.theme}size={30}>Member Login</StyledTitle>
            
                <Formik
                    initialValues ={{
                        email: "",
                        password: "",
                        
                    }}
                    validationSchema = {
                        Yup.object({
                            email: Yup.string().email("Invalid email address")
                            .required("Required"),
                            password: Yup.string().min(8,"Password is too short").max(30,"password is too long").required("Required"),
                        })
                    }
                    onSubmit={(values,{setSubmitting}) => {
                        console.log(values);
                    }}
                >
                    {() =>(
                        <>
                        <Form>
                            <TextInput 
                                name="email"
                                type="text"
                                label="Email Address"
                                placeholder="xyz@example.com"
                                icon={<FiMail/>}
                            />
                            <TextInput 
                                name="password"
                                type="password"
                                label="password"
                                placeholder="********"
                                icon={<FiLock/>}
                            />
                            <ButtonGroup>
                                <StyledFormButton 
                                type="submit">Login
                                </StyledFormButton>
                            </ButtonGroup>
                        </Form>
                        <ButtonGroup>
                                <StyledFormButton1 onClick={signInWithGoogle}>Sign In With Google
                                </StyledFormButton1>
                            </ButtonGroup>
                        </>
                    )}
                </Formik>
                <ExtraText>
                    New here ? <TextLink to="/signup">Signup</TextLink>
                </ExtraText>
        </StyledFormArea>
        <CopyrightText>
            All rights reserved & copy;2020
        </CopyrightText>
       </div>
    )
}
export default Login;
