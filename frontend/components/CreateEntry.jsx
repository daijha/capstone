function CreateEntry() {
    
  return (
    <>
      <h1 className="pageName">Create</h1>

      <div className="pageBody">
        <div className="nameDate">
          <label> Name:
            <input type="text"></input>
          </label>
          <label> Date:
            <input type="date"></input>
          </label>
        </div>
        <div>
          <textarea rows="20" cols="80"></textarea>
          {/* this allows for a bigger text box */}
        </div>
        <button> Save Entry </button>
      </div>
    </>
  );
}
export default CreateEntry;
