import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/action';
import {v4 as uuidv4}  from 'uuid';
import { useState } from 'react';
import { todoListSelector } from '../../redux/selectors';

export default function TodoList() {
  const [todoName, setTodoName] =  useState('');
  const [priority, setPriority] = useState('Medium');
  const todoList = useSelector(todoListSelector);

  const dispatch = useDispatch();

  const handleAddButtonClick = () => {
    dispatch(addTodo({
      id: uuidv4(),
      name: todoName,
      priority: priority,
      completed: false,
    }))
  }

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  }

  const handlePriorityChange = (value) => {
    setPriority(value);
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* <Todo name='Learn React' priority='High' />
        <Todo name='Learn Redux' priority='Medium' />
        <Todo name='Learn JavaScript' priority='Low' /> */}
        {todoList.map(todo => (
          <Todo 
            key={todo.id} 
            name={todo.name}  
            priority={todo.priority}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input 
            value={todoName}
            onChange={(e) => handleInputChange(e)}
          />
          <Select 
            defaultValue="Medium"
            value={priority}
            onChange={(value) => handlePriorityChange(value)}
          >
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button 
            type='primary'
            onClick={handleAddButtonClick}
          >
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
