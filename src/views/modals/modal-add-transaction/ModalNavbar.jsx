import React, { useEffect, useState } from 'react';
import './ModalNavbar.css';
import { NavLink } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

const ModalNavbar = ({
  transactionToUpdate,
  transactionsTableData,
  setTransactionsTableData,
  closeModal,
}) => {
  const [formDataTemp, setFormDataTemp] = useState({
    direction: '',
    status: '',
    _value: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const formData = { ...formDataTemp };
    formData[name] = value;
    setFormDataTemp(formData);
  };

  // transaction direction
  const dropdownOptionsTransactionDirection = [
    { id: 1, title: 'Debit', value: 'debit' },
    { id: 2, title: 'Credit', value: 'credit' },
  ];
  const [
    dropdownSelectedTransactionDirection,
    setDropdownSelectedTransactionDirection,
  ] = useState({ id: 1, title: 'Debit', value: 'debit' });
  const [
    showDropdownTransactionDirection,
    setShowDropdownTransactionDirection,
  ] = useState(false);

  // status
  const dropdownOptionsStatus = [
    { id: 1, title: 'Success', value: 'success' },
    { id: 2, title: 'Pending', value: 'pending' },
    { id: 3, title: 'Failed', value: 'failed' },
  ];
  const [dropdownSelectedStatus, setDropdownSelectedStatus] = useState({
    id: 1,
    title: 'Success',
    value: 'success',
  });
  const [showDropdownStatus, setShowDropdownStatus] = useState(false);

  const handleClickBtn = () => {
    const id = new Date().getTime();
    const created_at = new Date().toISOString();
    const updated_at = new Date().toISOString();
    const currency = 'NGN';
    let reference = Math.floor(Math.random() * Math.pow(10, 16));
    const transactionToAdd = {
      ...formDataTemp,
      id,
      created_at,
      updated_at,
      currency,
      reference,
    };
    const transactionsTableDataTemp = [
      transactionToAdd,
      ...transactionsTableData,
    ];
    setTransactionsTableData(transactionsTableDataTemp);
    closeModal();
  };

  useEffect(() => {
    const formData = { ...formDataTemp };
    formData.direction = dropdownSelectedTransactionDirection.value;
    formData.status = dropdownSelectedStatus.value;
    setFormDataTemp(formData);
  }, [dropdownSelectedTransactionDirection, dropdownSelectedStatus]);

  return (
    <div className='modal-navbar'>
      <div className='nav-links'>
        <NavLink
          className={({ isActive }) => {
            return isActive ? 'navlink-active' : 'text-color';
          }}
          to='/'
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? 'navlink-active' : 'text-color';
          }}
          to='/products'
        >
          Products
          <FaChevronDown />
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? 'navlink-active' : 'text-color';
          }}
          to='/faq'
        >
          FAQ
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? 'navlink-active' : 'text-color';
          }}
          to='/contact-us'
        >
          Contact us
        </NavLink>
      </div>
      <div className='btns'>
        <button className='outline'>
          Login <FaChevronDown className='icon' />
        </button>
        <button
          className='primary'
        >
          Sign Up
        </button>
      </div>
      <form action=''></form>
    </div>
  );
};

export default ModalNavbar;
