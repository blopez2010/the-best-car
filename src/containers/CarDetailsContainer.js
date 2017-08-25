import React from 'react'

const CarDetailsContainer = (props) => (
  <h1>{props.match.params.id}</h1>
)

export default CarDetailsContainer;