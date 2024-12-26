"use client";
import styles from './page.module.scss';
import {FormEvent, useState} from 'react';
import Button from '@/app/components/button/button';

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
    } else {
      setApiError(body?.error??null);
    }

  };

  const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {value, name} = event.currentTarget;
    setData(prevState => ({...prevState, [name]: value}));
  };

  return (
      <div className={styles.contact}>
        <div className={styles.contact__container}>
          <h1>Contact me</h1>
          <p>Use this form to send me a message, I will try to reach out as soon as I can, otherwise reach out on
            socials</p>
          <form onSubmit={handleSubmit} className={styles.contact__form}>
            <fieldset className={styles.contact__form__field}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="john.doe@domain.com" value={data.email}
                     onChange={handleInputChange}/>
              {errors.email && <div className={styles.contact__form__field__error}>{errors.email}</div>}
            </fieldset>
            <fieldset className={styles.contact__form__field}>
              <label htmlFor="message">Message</label>
              <textarea value={data.message} name="message" placeholder="Type a message ..." maxLength={150}
                        onChange={handleInputChange}/>
              {errors.message && <div className={styles.contact__form__field__error}>{errors.message}</div>}
            </fieldset>
            {apiError && <>
                <div className={styles.contact__form__field__error}>{apiError}</div>
                <br/>
            </>}
            <Button asLink={false} variant="filled">Submit</Button>
          </form>
        </div>
      </div>
  );
}