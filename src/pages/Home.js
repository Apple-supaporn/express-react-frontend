import { useState } from "react"
import { Box, Form, Button } from "react-bulma-components"

const Home = (props) => {
    const newForm = {
        firstName: "",
        lastName: "",
        streetAddressL1: "",
        streetAddressL2: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        email: "",
        phoneNumber: "",
      }
    // state to hold formData
    const [form, setForm] = useState(newForm);
    // destructuring Form object for ease of use
    const {Input, Field, Label} = Form;

    // handleChange function for the form - each keypress is an event we need to update state with
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value }); //...form means give all the value
    };

    //CREATE PAGE
    // handle submit function for form
    const handleSubmit = (e) => {
        e.preventDefault();
        props.createPeople(form);
        setForm(newForm);
    };

    const loaded = () => {
        return(
            <section>
                <Box className="form-box">
                    <h2 className='is-size-3 has-font-weight-bold'>Create Person</h2>
                    <form onSubmit={handleSubmit}>
                        <Field>
                            <Label>First Name</Label>
                            <Input 
                                name="firstName" 
                                value={form.firstName}
                                placeholder='First Name' 
                                //e meant event
                                onChange={(e) => {handleChange(e)}}/> 
                        </Field>
                        <Field>
                            <Label>Last Name</Label>
                            <Input 
                                name="lastName" 
                                value={form.lastName}
                                placeholder='Last Name' 
                                //e meant event
                                onChange={(e) => {handleChange(e)}}/> 
                        </Field>
                        <Field>
                            <Label>Street Address Line 1</Label>
                            <Input 
                                name="streetAddressL1" 
                                value={form.streetAddressL1}
                                placeholder="'567 Rainbow Bridge Dr'" 
                                //e meant event
                                onChange={(e) => {handleChange(e)}}/> 
                        </Field>
                        <Field>
                            <Label>Line 2</Label>
                            <Input 
                                name="streetAddressL2" 
                                value={form.streetAddressL2}
                                placeholder="'Apt #4'" 
                                //e meant event
                                onChange={(e) => {handleChange(e)}}/> 
                        </Field>
                        <Field>
                            <Label>City</Label>
                            <Input 
                                name="city" 
                                value={form.city}
                                placeholder='City' 
                                //e meant event
                                onChange={(e) => {handleChange(e)}}/> 
                        </Field>
                        <Field>
                            <Label>State</Label>
                            <Input 
                                name="state" 
                                value={form.state}
                                placeholder='State' 
                                //e meant event
                                onChange={(e) => {handleChange(e)}}/> 
                        </Field>
                        <Field>
                            <Label>Zipcode</Label>
                            <Input 
                                name="zip" 
                                value={form.zip}
                                placeholder='Zipcode' 
                                //e meant event
                                onChange={(e) => {handleChange(e)}}/> 
                        </Field>
                        <Field>
                            <Label>Email</Label>
                            <Input 
                                name="email" 
                                value={form.email}
                                placeholder='Email' 
                                onChange={(e) => {handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>Phone Number</Label>
                            <Input 
                                name="phoneNumber" 
                                value={form.phoneNumber} 
                                placeholder='(xxx)-xxx-xxxx' //to tell the format to user
                                onChange={(e) => {handleChange(e)}}/>
                            </Field>
                            <Button color="primary">
                                Submit
                            </Button>
                    </form>
                </Box>
            </section>
        )

    }
    
    const loading = () => {
        return <h1>Loading...</h1>;
    }
    return (props.people ? loaded() : loading());

}
export default Home