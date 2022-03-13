import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Navbar = ({ todos }) => {
  const lengthTodos = todos.length;
  return (
    <div className="navbar">
      <h1>My Redux Todo App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Total todos: {lengthTodos}</li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  todos: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  todos: state.myTodos.todos,
});

export default connect(mapStateToProps, {})(Navbar);
