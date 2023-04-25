import Nav from '../utils/nav'
import Card from '../utils/card'
import "./login.css";


const CreateCategory = () => {
  return (
    <>
        <Nav>
            Creating Category
        </Nav>
        <Card>
            <p>Enter A Name For Category</p>
            <form>
                <input type='text'/>
            </form>
        </Card>
    </>
    
  )
}

export default CreateCategory