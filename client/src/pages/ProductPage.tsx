import { useEffect } from "react";
import { useParams } from "react-router-dom";


function ProductPage() {
    const param = useParams();

    useEffect(() => {
        console.log(param); 
    });

  return <h1> 상품 상세페이지 </h1>
}
export default ProductPage;