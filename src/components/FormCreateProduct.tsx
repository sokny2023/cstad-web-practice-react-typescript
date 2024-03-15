
'use client';

import { Label, TextInput } from 'flowbite-react';
import React, { useEffect, useState } from 'react';


export type addProduct = {
    title : string,
    price : number,
    description : string,
    category : string,
    image : string;
}

type errorType = {
    title? : string,
    price? : string;
}

type createProductFromProps = {
    getDataForm: (product: addProduct) => void;
}

const FormCreateProduct: React.FC<createProductFromProps> = ({getDataForm}) => {
    const [product, setProduct] = useState<addProduct>(
        {
            title : "",
            price : 0,
            description : "",
            category : "unknow",
            image : "https://i.pravatar.cc"
        }
    );

   useEffect(() => {
    getDataForm(product);
   }, [product, getDataForm]);

    const [error, setError] = useState<errorType>();
    useEffect(() => {
        const newError: errorType = {};
        if(product.title.length < 3 && product.title.length) {
            newError.title = "Title must be at least 3 characters";
        }
        if(product.price && Number(product.price < 0)){
            newError.price = "Price cannot be negative";
        }   
        setError(newError);
        }, [product.title, product.price]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {id, value} = event.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [id]: value,
        }))
    };


  return (
    <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="title" value="Ttitle" />
        </div>
        <TextInput id="title" type="text" placeholder="Mac Book pro" value={product.title} onChange={handleInputChange} required />
        {error?.title && <p className='text-red-500 text-xs'>{error.title}</p>}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="price" value="Ttitle" />
        </div>
        <TextInput id="price" type="text" placeholder="1999.99$" value={product.price} onChange={handleInputChange} required />
        {error?.price && <p className='text-red-500 text-xs'>{error.price}</p>}
      </div>    
    </form>
  );
}

export default FormCreateProduct;