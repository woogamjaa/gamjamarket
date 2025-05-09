import React from 'react';  
import { useState } from 'react';

interface ProductType {
  id: number;
  name: string;
  explanation: string;
  price: number;
}

function App() {
  const [products , setProduct ] = useState<ProductType[]>([
    {
    id: 102,
    name: '민영이 사랑해',
    explanation: '민영이 사랑해 2 ',
    price: 2000000000
    },
  ]);
  const [name, setName] = useState('');
  const [explanation, setExplanation] = useState('');
  const [price, setPrice] = useState(0);
  
  console.log(products);
  return (
    <>
    <form 
      onSubmit={(event) => { 
        event.preventDefault();
        console.log("제출");
        }}>
      <input onChange={(event) => console.log("상품 이름이 변경되었습니다.", event.target.value)} type="text" placeholder="상품 이름" />
      <input onChange={(event) => console.log("상품 설명이 변경되었습니다.", event.target.value)} type="text" placeholder="상품 설명" />
      <input onChange={(event) => console.log("상품 가격이 변경되었습니다.", event.target.value)} type="number" placeholder="상품 가격" />
      <input type="submit" value="상품 만들기"/> 
    </form>

    {products.map((product) => (
      <div key={product.id}>
        <div>{product.id}</div>
        <div>{product.name}</div>
        <div>{product.explanation}</div>
        <div>{product.price}</div>
      </div>
    ))}
    </>
  );
}
export default App;
