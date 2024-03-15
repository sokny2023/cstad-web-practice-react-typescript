import { Button, Modal } from "flowbite-react";
import { useState } from 'react';
import FormCreateProduct, { addProduct } from "./FormCreateProduct";


const ButtonCreateProduct = () => {
  const [openModal, setOpenModal] = useState(false);

  function getDataForm(product: addProduct) {
    console.log(product);
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
            <Button onClick={() => setOpenModal(false)}>Create</Button>
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
