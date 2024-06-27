function Header({ showMeForm, isFormVisible }) {
  return (
    <header className="header">
      <div className="logo-box">
        <span className="logo-letter logo-t">T</span>
        <span className="logo-letter logo-m">M</span>
        <span className="logo-letter logo-s">S</span>
      </div>
      <h1 className="app-title">Task Management System</h1>
      <div>
        <button className="task-add-btn" onClick={showMeForm}>
          {isFormVisible ? "❌ Close" : "➕ Add Task"}
        </button>
      </div>
    </header>
  );
}

export default Header;
