import { Form, Input, Button, Divider, Row, Col, Select } from 'antd'
import React from 'react'
import { ProductItem } from './ProductItem'

export const Search = () => {
  return (
    <>
    <Form layout="inline" initialValues={{category: 'All'}}>
      <Input.Group compact>
      <Form.Item name="category">
        <Select>
          <Select.Option value="All">
            所有分类
          </Select.Option>
        </Select>
      </Form.Item>
      <Form.Item name="search">
        <Input placeholder="请输入搜索关键字"></Input>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">搜索</Button>
      </Form.Item>
      </Input.Group>
    </Form>
    <Divider></Divider>
    <Row gutter={[16, 16]}>
      <Col span="6">
        <ProductItem></ProductItem>
      </Col>
    </Row>
    </>
  )
}