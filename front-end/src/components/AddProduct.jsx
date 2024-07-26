import React, { useState } from 'react'

function AddProduct() {
  const [productName, setProductName] = useState("")
  const [productPrice, setProductPrice] = useState("")
  const [producCategory, setProductCategory] = useState("")
  const [productCompany, setProductCompany] = useState("")

  const handleSubmit = async () =>{
    console.log(productName,productPrice,producCategory,productCompany)

    const userId = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch('http://localhost:3000/add-product',{
      method:"post",
      body:JSON.stringify({productName,productPrice,producCategory,productCompany, userId}),
      headers:{
        "Content-Type":"application/json"
      }
    });

    result = await result.json()
    console.log(result)
  }
  return (
    <section>
    <div className='flex justify-center items-center h-[100vh] flex-col gap-6'>
        <form className="form">
            <p className="title">Add Product </p>
            <div className="input-container">
                <input type="text" placeholder="Enter Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} />
            </div>
            <div className="input-container">
                <input type="number" placeholder="Enter Price" value={productPrice} onChange={e => setProductPrice(e.target.value)} />
            </div>
            <div className="input-container">
                <input type="text" placeholder="Enter Category" value={producCategory} onChange={e => setProductCategory(e.target.value)} />
            </div>
            <div className="input-container">
                <input type="text" placeholder="Enter Company Name" value={productCompany} onChange={e => setProductCompany(e.target.value)} />
            </div>
            <button type="button" onClick={handleSubmit} className="submit">
                Add
            </button>
        </form>
    </div>
</section>
  )
}

export default AddProduct
