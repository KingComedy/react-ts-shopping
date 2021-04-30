import React from 'react'
import Layout from './Layout'
import { useSelector } from 'react-redux'
const Shop = () => {
  const state = useSelector(state => state)
  return (
    <Layout title="前端商城" subTitle="挑选你喜欢的商品吧">
      Shop
      {JSON.stringify(state)}
    </Layout>
  )
}

export default Shop