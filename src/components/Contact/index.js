import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers.js';

function ContactForm()
{
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    function handleChange(e)
    {
        if (e.target.name === 'email')
        {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);

            if (!isValid)
            {
                setErrorMessage('Your email is invalid.');
            } 
            else
            {
                setErrorMessage('');
            }
        }
        else
        {
            if (!e.target.value.length)
            {
                setErrorMessage(`${e.target.name} is required.`);
            } 
            else
            {
                setErrorMessage('');
            }
        }
        if (!errorMessage) 
        {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e)
    {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section className="contact-form row">
            <h1 className="col-12">Contact me</h1>
            <form className="col-6" id="contact-form" onSubmit={handleSubmit}>
                <div className="col-12 form-floating">
                    <input className="form-control" type="text" name="Name" defaultValue={name} onBlur={handleChange} placeholder="Name" />
                    <label htmlFor="name">Name:</label>
                </div>
                <div className="col-12 form-floating">
                    <input className="form-control" type="email" name="Email" defaultValue={email} onBlur={handleChange} placeholder="Email Address" />
                    <label htmlFor="email">Email address:</label>
                </div>
                <div className="col-12 form-floating">
                    <textarea className="form-control" name="Message" rows="5" defaultValue={message} onBlur={handleChange} placeholder="Message"/>
                    <label htmlFor="message">Message:</label>
                </div>
                {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
                )}
                <button type="submit" data-testid="submit_btn">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;