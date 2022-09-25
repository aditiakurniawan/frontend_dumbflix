import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IoArrowBackCircleOutline } from "react-icons/io5";

function NotFound() {
    document.title = `Page Not Found | Dumbflix`

    return (
        <div className="d-flex justify-content-center align-items-center flex-column w-100" style={{ height: "100vh", backgroundColor: "black" }}>
            <Image src="/notfound.svg" style={{ width: "300px" }} />
            <h1 className='text-white'>Page Not Found</h1>
            <Link to={'/'} className='text-white'>
                <IoArrowBackCircleOutline style={{ color: "white" }} size={"20px"} className="me-1"/>
                Back to home
            </Link>
        </div>
    )
}

export default NotFound