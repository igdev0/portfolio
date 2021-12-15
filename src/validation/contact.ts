import Validate from 'validate'
const contact = new Validate({
    email: {
        type: String,
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        required: true,
        message: {
            match: "This field has to be an email address.",
            required: "This field is required",
        }
    },
    message: {
        type: String,
        length: {
            min: 1,
            max: 500
        },
        message: {
            length: "Your message has to be between 1-500 characters 😳"
        }
    }
})

export default contact;
