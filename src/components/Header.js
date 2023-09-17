import { Link } from "react-router-dom"
import { Navbar } from "react-bulma-components"


const Header = (props) => {
    return (
        <Navbar display="flex" justifyContent="space-evenly" fixed="top" size="large">
            <Navbar.Container>
                <Navbar.Item>
                    <Link to="/">
                        Home
                    </Link>
                </Navbar.Item>
            </Navbar.Container>
            <Navbar.Container>
                <Navbar.Item>
                    <Link to="/people">
                        People
                    </Link>
                </Navbar.Item>
            </Navbar.Container>
        </Navbar>
    )
}

export default Header