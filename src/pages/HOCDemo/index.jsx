import { useState } from "react";
import ProductList from "../../components/ProductList";
import UserProfile from "../../components/UserProfile";

function HOCDemo() {
    const [userLoading, setUserLoading] = useState(true)
    const [productLoading, setProductLoading] = useState(true)

    return (
        <>
            <button onClick={() => setUserLoading(!userLoading)}>Toggle user loading</button>
            <button onClick={() => setProductLoading(!productLoading)}>Toggle product loading</button>
            <UserProfile isLoading={userLoading} name="User"/>
            <ProductList isLoading={productLoading} name="Products" />
        </>
    );
}

export default HOCDemo;
