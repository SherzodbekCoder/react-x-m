import Card from './componets/Card';
import { useRef, useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([])
  const [phones, setPhones] = useState([]);


  const nameRef = useRef('');
  const priceRef = useRef(0);
  const descRef = useRef('');
  const statusRef = useRef('active');

  useEffect(() => {
    fetch("https://auth-rg69.onrender.com/api/products/all")
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  function validate() {
    const nameValue = nameRef.current.value;
    if (nameValue.length < 3 || !/^[a-zA-Z]+$/.test(nameValue)) {
      alert("Iltimos, 3 tadan kam harf va faqat harflardan iborat bo'lgan qiymat kiriting.");
      nameRef.current.focus();
      return false;
    }
    return true;
  }

  function handleClick(e) {
    e.preventDefault();
    const isValid = validate();

    if (isValid) {
      const phone = {
        name: nameRef.current.value,
        description: descRef.current.value,
        price: priceRef.current.value,
        status: statusRef.current.value,
        category_id: 2
      };

      fetch("https://auth-rg69.onrender.com/api/products", {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(phone)
      })

        .then(res => res.json())
        .then(data => {
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        })
    }
  }

  return (
    <div className='container'>

      <h1 className='my-4 text-center'>Phones</h1>

      <form className='d-flex w-50 gap-3 flex-column mx-auto'>
        <input ref={nameRef} type="text" className="form-control" placeholder='Enter name...' />
        <input ref={priceRef} type="number" className="form-control" placeholder='Enter age...' />

        <textarea ref={descRef} className="form-control" rows="3" placeholder='Enter description...'></textarea>

        <select ref={statusRef} className="form-control" id="">
          <option value="active">Active</option>
          <option value="inative">Inactive</option>
        </select>

        <button onClick={handleClick} className='btn btn-success'>SAVE</button>
      </form>
      <div className="car-wrapper mt-3 d-flex gap-3 flex-wrap jusitfy-content-center">
        <Card></Card>
      </div>
    </div>
  );
}

export default App;
