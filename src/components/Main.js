import { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"
import Home from "../pages/Home"

const Main = (props) => {
    const [people, setPeople] = useState(null)

    //if production/deployment put this SENSITIVE URL in your .env file
    const URL = 'http://localhost:4000/people/'  //make sure to have an ending

    const getPeople = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
        setPeople(data.data)
    }

    const createPeople = async (person) => {
        //console.log("inside createpeople")
    // make post request to create people
    await fetch(URL, {
        method: 'POST', 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(person)
    })
    //update list of people after adding new person
    getPeople()
    }

    const updatePeople = async (person, id) => {
        // make a put request to updatePeople
        //localhost:4000/people/:id <-- make sure the URL ends in a slash so we can have the desired route
        const response = await fetch(URL + id, {     //'const response' if you want to see the response that the backend returns, assign it to a valiable
            method: "PUT",  //'put' can be lower or upper case, as long as correct word.
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(person),
        })
        // update list of people
        getPeople()
    }

    const deletePeople = async (id) => {
        // make a delete request to deletePeople
        await fetch (URL + id, {    //localhost:4000/people/:id <-- :id is req.params on the backend!
            method: "DELETE"
        })
        getPeople()
    }



    useEffect(() => {
        getPeople()
    }, [])

    return (
        <main>
            <Routes>
                <Route path="/" element={<Home people={people} createPeople={createPeople}/>}/>
                <Route path="/people" element={<Index people={people} />}/>
                <Route path="/people/:id" element={<Show people={people} updatePeople={updatePeople} deletePeople={deletePeople}/>}/>
            </Routes>
        </main>
    )
}

export default Main
