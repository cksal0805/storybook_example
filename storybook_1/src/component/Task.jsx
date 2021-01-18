import React from 'react';

function Task({ task, onArchiveTask, onPinTask }) {
  return (
    <div className={`list-item ${task.state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={task.state === 'TASK_ARCHIVED'}
          disabled={true}
          name="checked"
        />
        <span
          className="checkbox-custom"
          onClick={() => onArchiveTask(task.id)}
        />
      </label>
      <div className="title">
        <input
          type="text"
          value={task.title}
          readOnly={true}
          placeholder="Input title"
        />
      </div>
      <div className="actions" onClick={(event) => event.stopPropagation()}>
        {task.state !== 'TASK_ARCHIVED' && (
          <a onClick = {() => onPinTask(task.id)}>
            <span className="icon-star" />
          </a>
        )}
      </div>
    </div>
  );
}

export default Task;
