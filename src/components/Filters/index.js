import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import filtersSlice from './filtersSlice';
const { Search } = Input;

export default function Filters() {
const dispatch = useDispatch();

  const [searchText, setSearchText] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterPriority, setFilterPriority] = useState([])

  const handleSearchTextChange = (value) => {
    setSearchText(value);
    dispatch(filtersSlice.actions.searchFilterChange(value));
  }

  const handleStatusChange = (value) => {
    setFilterStatus(value);
    dispatch(filtersSlice.actions.statusFilterChange(value));
  }

  const handlePriorityChange = (value) => {
    setFilterPriority(value);
    dispatch(filtersSlice.actions.priorityFilterChange(value));
  }

  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search 
          placeholder='input search text' 
          value={searchText}
          onChange={(e) => handleSearchTextChange(e.target.value)}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group 
          value={filterStatus}
          onChange={(e) => handleStatusChange(e.target.value)}
        >
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={filterPriority}
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
      </Col>
    </Row>
  );
}
