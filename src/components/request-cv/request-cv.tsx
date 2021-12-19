import {RequestCvWrapper} from "./style";
import Overlay from "../overlay/overlay";
import {REQUEST_CV_ID} from '../../constants';
import {useCallback, useState} from "react";
import requestCv from "../../validation/request-cv";
import CloseOverlay from "../overlay/close-overlay";
import {Content} from "../overlay/style";
import {GoogleReCaptcha, GoogleReCaptchaProvider, IGoogleRecaptchaProps} from "react-google-recaptcha-v3";
import {Button, CheckboxGroup, ErrorMessage, Spacer, SuccessMessage} from "../../styles/helpers";

const INITIAL_DATA = {
    privacy_accepted: false,
    email: "",
}

const ERRORS_INITIAL_DATA = {
    privacy_accepted: null,
    email: null,
}

interface stateProps {
    privacy_accepted: boolean,
    email: string;
}

interface errorsProps {
    server?: string | null;
    email?: string | null;
    privacy_accepted?: string | null;
}


const CAPTCHA_V3_SITE_KEY = process?.env?.NEXT_PUBLIC_CAPTCHA_V3_SITE_KEY;


export default function RequestCv() {
    const [data, setData] = useState<stateProps>(INITIAL_DATA);
    const [errors, setErrors] = useState<errorsProps>(JSON.parse(JSON.stringify(ERRORS_INITIAL_DATA)));
    const [token, setToken] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        const errors = requestCv.validate(data);

        if (errors.length) {
            const formatted = errors.reduce((a, b,) => {
                // @ts-ignore
                return {...a, [b.path]: b?.message ?? "Error."};
            }, {})
            // @ts-ignore
            return setErrors(formatted);
        }
        if (!data.privacy_accepted) {
            setErrors({privacy_accepted: "Please tick this box."});
        }

        try {
            const response = await fetch("/api/cv-request", {
                method: "POST",
                body: JSON.stringify(data),
            })
            const {error, success, message} = await response.json();
            if (!response.ok) {
                // @ts-ignore
                setErrors(error);
            } else {
                setData(JSON.parse(JSON.stringify(INITIAL_DATA)));
                success && setSuccessMessage(message)
                setErrors(JSON.parse(JSON.stringify(ERRORS_INITIAL_DATA)));
            }
        } catch (e) {
            console.error(e);
            // @ts-ignore
            setErrors(e.error);
        }

    }, [data]);

    const handleCaptchaVerify = useCallback((v:string) => {
        setToken(v)
    }, [setToken])

    const handleInputChange = useCallback(({target: {value, name, type, checked}}) => {
        setData(v => ({...v, [name]: type === "checkbox" ? checked : value}));
    }, [])
    return (
        <Overlay id={REQUEST_CV_ID}>
            <RequestCvWrapper>
                <CloseOverlay/>
                <Content>
                    Thank you for your interest, fill in the form below to receive the CV on your email.
                    This process is automated and you will only be able to submit this once per email.
                </Content>
                <GoogleReCaptchaProvider
                    reCaptchaKey={CAPTCHA_V3_SITE_KEY}
                    scriptProps={{
                        async: false,
                        defer: false,
                        appendTo: 'head',
                        nonce: undefined
                    }}
                >
                    <form onSubmit={handleSubmit}>
                        <Spacer top={1}/>
                        <input type="email" name="email" value={data.email} placeholder="john_doe@email.com"
                               onChange={handleInputChange}/>
                        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                        <Spacer top={1}/>
                        <CheckboxGroup>
                            <input type="checkbox" checked={data.privacy_accepted} name="privacy_accepted"
                                   onChange={handleInputChange}/>
                            <span className="checkbox"/>
                            <p> By ticking this box, you acknowledge & accept my

                                {/*@ts-ignore*/}
                                <a href="/privacy-policy" target="_blank"> privacy & policy</a>.</p>
                            {errors.privacy_accepted && <ErrorMessage>{errors.privacy_accepted}</ErrorMessage>}
                        </CheckboxGroup>
                        <Spacer top={1}/>
                        <Button onSubmit={handleSubmit}>
                            Submit
                        </Button>
                        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
                        {errors.server && <ErrorMessage>{errors.server}</ErrorMessage>}
                        <GoogleReCaptcha onVerify={handleCaptchaVerify}/>
                    </form>
                </GoogleReCaptchaProvider>
            </RequestCvWrapper>
        </Overlay>
    )
}
