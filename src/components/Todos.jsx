import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { markComplete } from "../store/actions/todoActions";

const Todos = ({ todos, markComplete }) => {
  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo) => (
          <li key={uuidv4()} className={todo.completed ? "completed" : ""}>
            {todo.title}
            <div>
              <input type="checkbox" onChange={markComplete.bind(this,todo.id)} />
              <button>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  todos: state.myTodos.todos,
});
export default connect(mapStateToProps, { markComplete })(Todos);
