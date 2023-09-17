import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"
import {Card} from 'react-bulma-components'
import {Box, Form, Button} from "react-bulma-components"


const Show = (props) => {
    const navigate = useNavigate()
    const params = useParams()  //can use /:id now
    const id = params.id    
    const people = props.people
    const person = people?.find((p) => p._id === id)  //'p' is person, check if person._id from the db is STRICTLY EQUAL to the frontend id param

    //this line from 13 to line 41 can copy from Home.js page, except line 39
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
    const [form, setForm] = useState(person); 
    // destructuring Form object for ease of use
    const {Input, Field, Label} = Form;

    // handleChange function for the form - each keypress is an event we need to update state with
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value }); //...form means give all the value
    };

    // UPDATE PAGE
    // handle submit function for form
    const handleSubmit = (e) => {
        e.preventDefault();
        props.updatePeople(form, id); //change to 'updatePeople' and add 'id'
        setForm(newForm);
        // navigate("/")      //** OPTIONAL: you can redirect whereever you want
    };

    // DELETE PAGE
    const removePerson = (e) => {
        e.preventDefault()
        props.deletePeople(id)
        navigate("/people")
      }


    // person?.firstName <<-- the "?" waits for person to not be undefined or null, then it will populate when 'person' contains data
    // alt: could do return (props.people ? loaded () : loading())

    return (
        <>
            <Card textAlign='center' style={{width:'400px', margin:'0 auto'}}>
            <Card.Content>
            <Card.Header.Title className="is-size-3">
                {person?.firstName} {person?.lastName}
            </Card.Header.Title>
            <Card.Content>
                <strong>Phone Number: </strong><p>{person?.phoneNumber}</p>
                <strong>Address: </strong>
                <p>{person?.streetAddressL1}</p>
                {person?.streetAddressL2 ? <p>{person?.streetAddressL2}</p>: ""}
                <p>{person?.city}, {person?.state} {person?.zip}</p>
                <p>{person?.country}</p>
                <strong>Email: </strong><p>{person?.email}</p>
                </Card.Content>
            </Card.Content>
        </Card>
        <Button color="danger" onClick={removePerson}>
            Delete
        </Button>
        <section>   
                <Box className="form-box">
                    <h2 className='is-size-3 has-font-weight-bold'>Create Person</h2>
                    <form onSubmit={handleSubmit}>
                        <Field>
                            <Label>First Name</Label>
                            <Input 
                                name="firstName" 
                                value={form?.firstName}
                                placeholder='First Name' 
                                //e meant event
                                onChange={(e) => {handleChange(e)}}/> 
                        </Field>
                        <Field>
                            <Label>Last Name</Label>
                            <Input 
                                name="lastName" 
                                value={form?.lastName}
                                placeholder='Last Name' 
                                //e meant event
                                onChange={(e) => {handleChange(e)}}/> 
                        </Field>
                        <Field>
                            <Label>Street Address Line 1</Label>
                            <Input 
                                name="streetAddressL1" 
                                value={form?.streetAddressL1}
                                placeholder="'567 Rainbow Bridge Dr'" 
                                //e meant event
                                onChange={(e) => {handleChange(e)}}/> 
                        </Field>
                        <Field>
                            <Label>Line 2</Label>
                            <Input 
                                name="streetAddressL2" 
                                value={form?.streetAddressL2}
                                placeholder="'Apt #4'" 
                                //e meant event
                                onChange={(e) => {handleChange(e)}}/> 
                        </Field>
                        <Field>
                            <Label>City</Label>
                            <Input 
                                name="city" 
                                value={form?.city}
                                placeholder='City' 
                                //e meant event
                                onChange={(e) => {handleChange(e)}}/> 
                        </Field>
                        <Field>
                            <Label>State</Label>
                            <Input 
                                name="state" 
                                value={form?.state}
                                placeholder='State' 
                                //e meant event
                                onChange={(e) => {handleChange(e)}}/> 
                        </Field>
                        <Field>
                            <Label>Zipcode</Label>
                            <Input 
                                name="zip" 
                                value={form?.zip}
                                placeholder='Zipcode' 
                                //e meant event
                                onChange={(e) => {handleChange(e)}}/> 
                        </Field>
                        <Field>
                            <Label>Email</Label>
                            <Input 
                                name="email" 
                                value={form?.email}
                                placeholder='Email' 
                                onChange={(e) => {handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>Phone Number</Label>
                            <Input 
                                name="phoneNumber" 
                                value={form?.phoneNumber} 
                                placeholder='(xxx)-xxx-xxxx' //to tell the format to user
                                onChange={(e) => {handleChange(e)}}/>
                            </Field>
                            <Button color="primary">
                                Submit
                            </Button>
                    </form>
                </Box>
            </section>

        </>
    )

}

export default Show