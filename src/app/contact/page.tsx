"use client";
import styles from './page.module.scss';
import {FormEvent, useState} from 'react';
import {ReCaptchaProvider} from 'next-recaptcha-v3';

interface ContactForm {
  email: string,
  message: string,
}

const ContactFormDefaultValue: ContactForm = {
  email: "",
  message: ""
};

const ContactFormErrors = {
  email: null,
  message: null,
};

type ContactFormErrorType = {
  email: string | null,
  message: string | null,
}

export default function Contact() {
  const [apiError, setApiError] = useState<string | null>(null);
  const [data, setData] = useState<ContactForm>(JSON.parse(JSON.stringify(ContactFormDefaultValue)));
  const [successMsg, setSuccessMsg] = useState<string | null>();
  const [errors, setErrors] = useState<ContactFormErrorType>(JSON.parse(JSON.stringify(ContactFormErrors)));
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!data.email.length) {
      setErrors(prevState => ({...prevState, email: "Please enter your email"}));
    } else {
      setErrors(prevState => ({...prevState, email: null}));
    }

    if (!data.message.length) {
      setErrors(prevState => ({...prevState, message: "Please type a message before submitting"}));
    } else {
      setErrors(prevState => ({...prevState, message: null}));
    }
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data)
    })

    const body: {error?: string, message?:string} = await res.json();

    if(res.status === 200) {
      setData({message: "", email: ""});
      setApiError(null)
      setSuccessMsg("I have received your message, shortly I will come back to you. ");
    } else {
      setApiError(body?.error??null);
      setSuccessMsg(null);
    }

  };

  const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {value, name} = event.currentTarget;
    setData(prevState => ({...prevState, [name]: value}));
  };

  return (
      <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY??""}>
      <div className={styles.contact}>
        <div className={styles.contact__container}>
          <h1>Available Soon.</h1>
        </div>
      </div>
      </ReCaptchaProvider>
  );
}