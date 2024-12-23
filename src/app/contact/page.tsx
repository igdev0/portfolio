import styles from './page.module.scss';
import {FormEvent, useState} from 'react';

interface ContactForm {
  email: string,
  message: string,
}

const ContactFormDefaultValue: ContactForm = {
  email: "",
  message: ""
}

const ContactFormErrors = {
  email: null,
  message: null,
}

type ContactFormErrorType = {
  email: string | null,
  message: string | null,
}

export default function Contact() {

  const [data, setData] = useState<ContactForm>(JSON.parse(JSON.stringify(ContactFormDefaultValue)));
  const [errors, setErrors] = useState<ContactFormErrorType>(JSON.parse(JSON.stringify(ContactFormErrors)));
  const handleSubmit = () => {
    if(!data.message.length) {
      setErrors(prevState => ({...prevState, message: "Please type a message before submitting"}))
    }
  }

  const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {value, name} = event.currentTarget;
    setData(prevState => ({...prevState, [name]: value}))
  }

  return (
      <div className={styles.contact}>
        <div className={styles.contact__container}>
          <form onSubmit={handleSubmit} className={styles.contact__form}>
            <fieldset className={styles.contact__form__field}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="john.doe@domain.com" value={data.email}
                     onChange={handleInputChange}/>
              {errors.email && <div className={styles.contact__form__field__error}>{errors.email}</div>}
            </fieldset>
            <fieldset className={styles.contact__form__field}>
              <label htmlFor="message">Message</label>
              <textarea value={data.message} name="message" maxLength={150} onChange={handleInputChange}/>
              {errors.message && <div className={styles.contact__form__field__error}>{errors.message}</div>}
            </fieldset>
          </form>
        </div>
      </div>
  )
}