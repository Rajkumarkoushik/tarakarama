import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { BsCurrencyRupee } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from 'react-icons/fa';

function Address({ cartItems, totalCartPrice }) {
  const [show, setShow] = useState(false);
  const [addresses, setAddresses] = useState(() => {
    const savedAddresses = localStorage.getItem("addresses");
    return savedAddresses ? JSON.parse(savedAddresses) : [];
  });
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    pinCode: "",
    address: "",
    locality: "",
    city: "",
    state: ""
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("addresses", JSON.stringify(addresses));
  }, [addresses]);

  const handleClose = () => {
    setShow(false);
    setIsEditing(false);
    setFormData({
      name: "",
      mobile: "",
      pinCode: "",
      address: "",
      locality: "",
      city: "",
      state: ""
    });
  };
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedAddresses = addresses.map((address, index) => 
        index === editIndex ? formData : address
      );
      setAddresses(updatedAddresses);
      setIsEditing(false);
    } else {
      setAddresses([...addresses, formData]);
    }
    setFormData({
      name: "",
      mobile: "",
      pinCode: "",
      address: "",
      locality: "",
      city: "",
      state: ""
    });
    handleClose();
  };

  const handleEdit = (index) => {
    const addressToEdit = addresses[index];
    setFormData(addressToEdit);
    setIsEditing(true);
    setEditIndex(index);
    handleShow();
  };

  const handleRemove = (index) => {
    const updatedAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(updatedAddresses);
  };

  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-8">
              <div>
                <div className='d-flex justify-content-between align-items-center'>
                  <h6>Select Delivery Address</h6>
                  <button className='button' onClick={handleShow}>ADD NEW ADDRESS</button>
                </div>
                {addresses.length > 0 && (
                  <div className="mt-3">
                    {addresses.map((address, index) => (
                      <div key={index} className="address-card p-3 mb-3">
                       <h6> {address.name}</h6>
                       <p>{address.address}, {address.locality}, {address.city}, {address.state} -{address.pinCode}</p>
                     <p>Mobile: <strong>{address.mobile}</strong></p>
                        <div className="d-flex">
                          <button className='button' onClick={() => handleEdit(index)}><FaEdit /> Edit</button>
                          <button className='button mx-3' onClick={() => handleRemove(index)}><FaTrash /> Remove</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-4">
              <div className='address-estimation'>
                <h6>Deliver Estimates</h6>
                <div className='py-3'>
                  {cartItems.map((item) => {
                    const { id, Name, INR, img } = item;
                    return (
                      <div key={id} className='d-flex justify-content-between align-items-center address-items'>
                        <img src={img} alt={Name} />
                        <p>Estimated delivery by within one week</p>
                      </div>
                    );
                  })}
                </div>
                <div className="p-4">
                  <h6>Price Details ({cartItems.length} Items)</h6>
                  <div>
                    <p>Total MRP :- <span><BsCurrencyRupee />{totalCartPrice}/-</span></p>
                    <p>Shipping FEE :- {}</p>
                  </div>
                  <div>
                    <h6>Total Amount :- <span><BsCurrencyRupee />{totalCartPrice}/-</span> </h6>
                    <button className="button w-100"><Link to="/address">CONTINUE</Link></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal className='modal-main' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isEditing ? "EDIT ADDRESS" : "ADD NEW ADDRESS"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>CONTACT DETAILS</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name*"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Form.Control
                type="text"
                placeholder="Mobile No*"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAddress">
              <Form.Label>ADDRESS</Form.Label>
              <Form.Control
                type="text"
                placeholder="Pin Code*"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
                required
              />
              <Form.Control
                type="text"
                placeholder="Address(House No, Building, Street Area)*"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
              <Form.Control
                type="text"
                placeholder="Locality/ Town*"
                name="locality"
                value={formData.locality}
                onChange={handleChange}
                required
              />
              <div className="d-flex form-state">
                <Form.Control
                  type="text"
                  placeholder="City/ District*"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
                <Form.Control
                  type="text"
                  placeholder="State*"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </div>
            </Form.Group>
            <Modal.Footer className='d-block'>
              <button type="submit" className='button w-100'>{isEditing ? "UPDATE ADDRESS" : "ADD ADDRESS"}</button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Address;
