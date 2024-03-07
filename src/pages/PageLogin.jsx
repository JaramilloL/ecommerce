import Login from "../components/forms/Login";
import shop from "../assets/shop.jpg";

const PageLogin = () => {
  return (
    <div className="container w-50">
      <div className="d-flex justify-content-center">
        <img src={shop} alt="img" className="img-fluid w-25 mt-5 mb-5" />
      </div>

      <Login />
    </div>
  );
};

export default PageLogin;
