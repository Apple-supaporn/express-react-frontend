import { Content, Button } from "react-bulma-components"
import { Link } from "react-router-dom"

const Index = (props) => {
    console.log(props, "OUTSIDE PROPS")
    //loaded function
    const loaded = () => {
        console.log("IN LOADED", props)
        return props.people.map((person) => {
            return(<Content
                display="flex"
                flexDirection="row"
                justifyContent="space-evenly"
                alignItems="baseline"
                // this className is from bulma
                className="has-background-grey-lighter person-content"
            > 

                <h3>{person.firstName} {person.lastName}</h3>
                <p>{person.streetAddressL1}</p>
                {person.streetAddress2 ? <p>{person.streetAddress2}</p>: ""}
                <p>{person.city}, {person.state} {person.zip}</p>

                <Link to={`/people/${person._id}`}>
                    <Button color='text'>
                        See More
                    </Button>
                </Link>

            </Content>
        )})
    }
    //loading function
    const loading = () => {
        console.log("IN LOADING", props)
        return(<h1>Loading...</h1>)
    }
    return (props.people ? loaded() : loading())
}


export default Index