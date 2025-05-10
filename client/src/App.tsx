import React from 'react';  
import { useState, useRef } from 'react';

interface ProductType {
  id: number;
  name: string;
  explanation: string;
  price: number;
}

interface ProductItemProps {
  product: ProductType;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const { id, name, explanation, price } = product;
  const [isEditMode, setIsEditMode] = useState(false);
  return (
    <div>
      <div>{id}</div>
      <div>{name}</div>
      <div>{explanation}</div>
      <div>{price}</div>
      <button type="button" onClick={()=> console.log("삭제하기")}>삭제</button>
      <button type="button" onClick={()=> console.log("수정하기")}>수정</button>
    </div>
  );
}

function App() {
  const [products , setProducts ] = useState<ProductType[]>([
  ]);
  const [name, setName] = useState('');
  const [explanation, setExplanation] = useState('');
  const [price, setPrice] = useState(0);
  const fakeId = useRef(0);
  const handleCreate = (newProduct: Omit<ProductType, 'id'>) => {
    fakeId.current += 1;
    setProducts([...products, { ...newProduct, id: fakeId.current }]);
  }

  console.log(products);
  return (
    <>
    <form 
      onSubmit={(event) => { 
        event.preventDefault();
        handleCreate({name, explanation, price});
        }}>
      <input onChange={(event) => setName(event.target.value)} type="text" placeholder="상품 이름" />
      <input onChange={(event) => setExplanation(event.target.value)} type="text" placeholder="상품 설명" />
      <input onChange={(event) => setPrice(parseInt(event.target.value, 10))} type="number" placeholder="상품 가격" />
      <input type="submit" value="상품 만들기"/> 
    </form>

    {products.map((product) => (
      <ProductItem key={product.id} product={product} />
    ))}
    </>
  );
}
export default App;