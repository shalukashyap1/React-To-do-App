function AddTodo() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <input type="text" name="" placeholder="Todo here" id="" />
        </div>
        <div className="col-4">
          <input type="date" name="" id="" />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success"
            style={{ marginRight: "60px", width: "100px" }}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
