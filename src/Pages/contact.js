import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './App.css';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ekkr7ge",
        "template_jsqz1wx",
        form.current,
        "eI2Q7KT_ftku7XWIo"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


  return (
    <div className= "Contact">
        <header>
            My ToDo List
        <Link to ="/">
                <Button 
                type="button"
                className="primaryBtn">
                Home
              </Button>
              </Link>
                <Link to ="/contact">
                <Button  type="button"
                className="primaryBtn">
                Contact
              </Button>
              </Link>
              </header>
    
    <h1>Contact</h1>
              
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
    
   </div> 
  );
};


export default Contact;

// Styles
const StyledContactForm = styled.div`

  width: 400px;
  margin: auto;

  

  form {
    
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;


    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
    font-family: 'Courier New', Courier, monospace;
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(190, 76, 97);
      color: white;
      border: none;
    }
  }
`;