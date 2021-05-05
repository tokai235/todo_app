import React, { ChangeEvent, useState } from 'react'
import { Button, Checkbox } from '@material-ui/core'
import useTodoTasks from 'src/store/todoTasks/hooks'
import './App.css'
import { getFormattedDate } from 'src/utils/dateUtils'
import { NewTask } from 'src/types/task'
import { TaskTextField, TaskCheckbox } from 'src/components/Feild'
import styled from 'styled-components'

function App(): JSX.Element {
  const [inputTaskTitle, setInputTaskTitle] = useState<string>('')

  const {
    todoTasks,
    addTodoTasks,
    deleteTodoTasks,
    updateTodoTasks,
  } = useTodoTasks()

  const onAddNewTask = () => {
    if (!inputTaskTitle) return

    const newTask: NewTask = {
      title: inputTaskTitle,
    }

    // 新規タスクの作成
    addTodoTasks(newTask)

    // タスク作成したらinputを空にする
    setInputTaskTitle('')
  }

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputTaskTitle(event.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <TaskTextField
            label="タスクを入力"
            type="text"
            value={inputTaskTitle}
            onChange={onChange}
            // onBlur={onAddNewTask}
          />

          <AddTaskButton
            variant="contained"
            color="primary"
            onClick={onAddNewTask}
          >
            追加
          </AddTaskButton>
        </div>

        {todoTasks.map((task) => {
          return (
            <div key={task.id}>
              <TaskCheckbox color="primary" />

              <p>{task.title}</p>
              <p>期限: {task.deadline}</p>

              <Button
                variant="contained"
                color="secondary"
                onClick={() => deleteTodoTasks(task)}
              >
                削除
              </Button>

              <Button
                variant="contained"
                onClick={() =>
                  updateTodoTasks({
                    id: task.id,
                    title: task.title + ' update',
                    deadline: getFormattedDate(new Date()),
                  })
                }
              >
                アップデート
              </Button>
            </div>
          )
        })}
      </header>
    </div>
  )
}

const AddTaskButton = styled(Button)`
  margin-top: 13px;
  margin-left: 10px;
`

export default App
