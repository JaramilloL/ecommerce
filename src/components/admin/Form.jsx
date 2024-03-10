//este es el formuario para gregar contenidoa la base de datos de firestore

const Form = () => {
  return (
    <div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="name..."
          name={"Name"}
        />
        <label htmlFor="floatingInput">Name</label>
      </div>
      <div className="d-flex justify-content-center align-content-center align-items-center">
        <button className="btn btn-primary">Add</button>
      </div>
    </div>
  );
};

export default Form;
