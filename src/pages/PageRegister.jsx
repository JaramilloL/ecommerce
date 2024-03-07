import Register from "../components/forms/Register"
import shop from '../assets/shop.jpg'

const PageRegister = () => {
  return (
    <div className="container w-50">
    <div className="d-flex justify-content-center">
        <img src={shop} alt="img" className="img-fluid w-25 mt-5 mb-5" />
      </div>
        <Register/>
    </div>
  )
}

export default PageRegister