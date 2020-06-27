import React from "react";
import "./Contact.css";
import emailjs from 'emailjs-com';


class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: "",
            email: "",
            message: "",
            thanks: "thank-you-hidden"
        };
        this.subjectChange = this.subjectChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.messageChange = this.messageChange.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    sendMessage() {
        emailjs.init("user_paw9N4bEJ6sJgI7Xk8juv");
        var template_params = {
            "subject": this.state.subject,
            "email": this.state.email,
            "message": this.state.message
        }

        emailjs.send("default_service", "template_XpXE6h38", template_params, "user_paw9N4bEJ6sJgI7Xk8juv")
            .then((result) => {
                this.setState({ thanks: "thank-you-visible", message: "", subject: "", email: "" },
                    () => {
                        window.setTimeout(()=>{
                            this.setState({thanks:"thank-you-hidden"})
                        },10000)
                    })

            }, (error) => {
                console.log(error.text);
            }
            )
    }

    subjectChange(e) {
        this.setState({ subject: e.target.value });
    }

    emailChange(e) {
        this.setState({ email: e.target.value });
    }

    messageChange(e) {
        this.setState({ message: e.target.value });
    }


    render() {

        return (
            <div className="contact">
                <h1>Contact Me</h1>
                <h3>Your email</h3>
                <input type="text" id="email" value={this.state.email} onChange={this.emailChange} name="email" />
                <h3>Subject</h3>
                <input type="text" id="subject" value={this.state.subject} onChange={this.subjectChange} name="subject" />
                <h3>Message</h3>
                <textarea name="message" value={this.state.message} onChange={this.messageChange} id="message" />

                <div id="contact-button" onClick={this.sendMessage}>Submit</div>

                <div id={this.state.thanks}>
                    <h1>Thank you for reaching out. We'll be in touch soon.</h1>
                </div>
            </div>
        )
    }
}

export default Contact;