import Page from "../components/page/page";
import styled from "styled-components";
import {useCallback, useState} from "react";
import contact from "../validation/contact";
import vars from "../styles/vars";
import {lighten} from "polished";

const META = {
    title: "Dorultan Ianos | contact",
}

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

const INITIAL_DATA = {
    email: "",
    message: "",
}

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

export default function Contact() {
    const [data, setData] = useState(JSON.parse(JSON.stringify(INITIAL_DATA)));
    const [errors, setErrors] = useState({});
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        const errors = contact.validate(data);
        if (errors.length) {
            const formatted = errors.reduce((a, b,) => {
                return {...a, [b.path]: b?.message ?? "Error."};
            }, {})
            setErrors(formatted)
        }
    }, [data]);

    const handleInputChange = useCallback(({target: {value, name}}) => {
        setData(v => {
            return {
                ...v,
                [name]: value
            }
        })
    }, [])
    return (
        <Page meta={META} pageContentTitle={`Contact me`}>

            <Form onSubmit={handleSubmit}>
                <InputGroupWrapper>
                    <label htmlFor="email">📧 Email</label>
                    <input type="text" value={data.email} placeholder="joe@domain.com" name="email" {...{onChange: handleInputChange}}/>
                    {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                </InputGroupWrapper>
                <InputGroupWrapper>
                    <label htmlFor="email">💬 Message:</label>
                    <textarea value={data.message} name="message" placeholder="Type your message here ... 👀" {...{onChange: handleInputChange}}/>
                    {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
                </InputGroupWrapper>
                <Button type="submit">Submit</Button>
            </Form>
        </Page>
    );
}
