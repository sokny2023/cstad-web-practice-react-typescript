import { Button, Modal } from "flowbite-react";
import { useState } from 'react';
import FormCreateProduct, { addProduct } from "./FormCreateProduct";


const ButtonCreateProduct = () => {
  const [openModal, setOpenModal] = useState(false);

  function getDataForm(product: addProduct) {
    console.log(product);
  }

  async function createProudct(){
    try{
        const postProduct = await fetch('https://fakestoreapi.com/products', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(getDataForm), 
        });

        const res = await postProduct.json();
        console.log(res);
    }catch(error){
        console.log(error);
    }finally{
        setOpenModal(false);
    }
  }

  return (
    <>
      <div className="flex justify-start">
        <Button onClick={() => setOpenModal(true)} gradientDuoTone="greenToBlue">Create Product</Button>
        {/* <Button >Toggle modal</Button> */}
        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>Create new products</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
             <FormCreateProduct getDataForm={getDataForm}></FormCreateProduct>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={createProudct}>Create</Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default ButtonCreateProduct;
