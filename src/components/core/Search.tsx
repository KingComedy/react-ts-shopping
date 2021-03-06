import { Form, Input, Button, Divider, Row, Col, Select } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../../store/actions/category.actions'
import { searchProduct } from '../../store/actions/product.actions'
import { AppState } from '../../store/reduces'
import { CategoryState } from '../../store/reduces/category.reducer'
import { ProductState } from '../../store/reduces/product.reducer'
import { ProductItem } from './ProductItem'

export const Search = () => {
  const dispatch = useDispatch()
  const { category } = useSelector<AppState, CategoryState>(state => state.category)
  const { search } = useSelector<AppState, ProductState>(state => state.product)
  useEffect(() => {
    dispatch(getCategory())
  }, [dispatch])
  const onFinish = (val: {category: string, search: string}) => {
    dispatch(searchProduct(val))
  }
  return (
    <>
    <Form onFinish={onFinish} layout="inline" initialValues={{category: 'All'}}>
      <Input.Group compact>
      <Form.Item name="category">
        <Select>
          <Select.Option value="All">
            所有分类
          </Select.Option>
          {
            category.result.map(item => {
              return <Select.Option key={item._id} value={item._id}>
              {item.name}
            </Select.Option>
            })
          }
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
        {
          search.map(item => {
            return <ProductItem key={item._id} product={item}></ProductItem>
          })
        }
      </Col>
    </Row>
    </>
  )
}
