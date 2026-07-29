export function HeaderBar() {
  return (
  <>
      <div className="header-bar">
        <p> Ottawa Flood Relief Navigator</p>
        <div className="button-container">
          <button className = "about-button"> About </button>
          <label className = "tools-button"> Tools </label>
          <select className="tools-dropdown">
            <option> Map </option>
            <option> Navigator AI </option>
          </select>
        </div>
      </div>
    </>
  )
}