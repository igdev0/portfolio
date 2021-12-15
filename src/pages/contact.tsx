import ConfettiGenerator from "confetti-js";
import {lighten} from "polished";
import {GoogleReCaptcha, GoogleReCaptchaProvider} from 'react-google-recaptcha-v3';
import Page from "../components/page/page";
import styled from "styled-components";
import {useCallback, useRef, useState} from "react";
import contact from "../validation/contact";
import vars from "../styles/vars";

const META = {
    title: "Dorultan Ianos | contact",
}

const CAPTCHA_V3_SITE_KEY = process?.env?.NEXT_PUBLIC_CAPTCHA_V3_SITE_KEY;
const SUCCESS_MESSAGE = "<strong>Success</strong> is the perfect word that matches with your action! 🎊";
const ConfettiWrapper = styled.canvas`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`
const InputGroupWrapper = styled.div`
  margin: 1em 0;
  padding: 1em;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 1em;
    color: ${({theme}) => theme.main === 'light' ? vars.colors.black : vars.colors.white};
  }

  textarea {
    min-height: 10em;
    max-width: 100%;
  }

  textarea,
  input {
    border: none;
    padding: 1em;
    background-color: ${vars.colors.wheat};
  }
`;

const Form = styled.form`
  max-width: 950px;
  width: 100%;
  background-color: ${({theme}) => theme.main === 'light' ? lighten(.95, vars.colors.black) : vars.colors.black};
  border-radius: 10px;
  padding-bottom: 1em;
`;

const Button = styled.button`
  padding: 1em 2em;
  background-color: ${vars.colors.green};
  border: none;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  display: block;
`

const ErrorMessage = styled.div`
  margin-top: 1em;
  padding: 0;
  color: red;
  font-size: .8rem;
`;
const SuccessMessage = styled.div`
  margin-top: 1em;
  padding: 0;
  color: deepskyblue;
  text-align: center;
  font-size: .8rem;
  font-weight: 400;

  strong {
    border-bottom: 2px solid deepskyblue;
  }
`;

interface DataType {
    email: string,
    message: string,
    server?: string,
}

const INITIAL_DATA = {
    email: "",
    message: "",
    server: ""
}

export default function Contact() {
    const [data, setData] = useState<DataType>(JSON.parse(JSON.stringify(INITIAL_DATA)));
    const [errors, setErrors] = useState<DataType>(JSON.parse(JSON.stringify(INITIAL_DATA)));
    const confettiRef = useRef<HTMLCanvasElement>(null);
    const [token, setToken] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const handleConfetti = useCallback(() => {
        const instance = new ConfettiGenerator({target: confettiRef.current});
        instance.render();
        setSuccess(true);
        const timeout = setTimeout(() => {
            instance.clear()
            setSuccess(false);
            clearTimeout(timeout);
        }, 5000)
    }, [confettiRef, setSuccess]);

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        const errors = contact.validate(data);

        if (errors.length) {
            const formatted = errors.reduce((a, b,) => {
                return {...a, [b.path]: b?.message ?? "Error."};
            }, {})
            return setErrors(formatted);
        }
        handleConfetti()
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(data),
            })
            if (!response.ok) {
                const {error} = await response.json();
                setErrors({server: error ?? ""});
            } else {
                setData(JSON.parse(JSON.stringify(INITIAL_DATA)));
                setErrors(INITIAL_DATA);
            }
        } catch (e) {
            console.error(e);
        }
    }, [data, handleConfetti]);

    const handleCaptchaVerify = useCallback((v: string) => {
        setToken(v)
    }, [setToken])

    const handleInputChange = useCallback(({target: {value, name}}) => {
        setData(v => {
            return {
                ...v,
                [name]: value
            }
        })
    }, []);

    return (
        <Page meta={META} pageContentTitle={`Contact me`}>
            <ConfettiWrapper ref={confettiRef} id="confetti"/>
            <GoogleReCaptchaProvider
                reCaptchaKey={CAPTCHA_V3_SITE_KEY}
                scriptProps={{
                    async: false,
                    defer: false,
                    appendTo: 'head',
                    nonce: undefined
                }}
            >
                <Form onSubmit={handleSubmit}>
                    <InputGroupWrapper>
                        <label htmlFor="email">📧 Email</label>
                        <input type="text" value={data.email} placeholder="joe@domain.com"
                               name="email" {...{onChange: handleInputChange}}/>
                        {!!errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                    </InputGroupWrapper>
                    <InputGroupWrapper>
                        <label htmlFor="email">💬 Message:</label>
                        <textarea value={data.message} name="message"
                                  placeholder="Type your message here ... 👀" {...{onChange: handleInputChange}}/>
                        {!!errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
                    </InputGroupWrapper>
                    {!!errors.server && <ErrorMessage>Server says: {errors.server}</ErrorMessage>}
                    <GoogleReCaptcha onVerify={handleCaptchaVerify}>Verify</GoogleReCaptcha>
                    {token && <Button type="submit">Submit</Button>}
                    {success && <SuccessMessage dangerouslySetInnerHTML={{__html: SUCCESS_MESSAGE}}/>}
                </Form>
            </GoogleReCaptchaProvider>
        </Page>
    );
}
