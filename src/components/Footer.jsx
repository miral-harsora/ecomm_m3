import React, { useState } from 'react';
import ShopSphere from '../assets/ShopSphere_logo.png';
import { IoCallOutline } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaTelegram, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Modal from './Modal';

const Footer = () => {
    const [modalType, setModalType] = useState(null);

    const openModal = (type) => setModalType(type);
    const closeModal = () => setModalType(null);

    return (
        <div className='bg-gray-100 py-8 px-6'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-16'>
                <div>
                    <img src={ShopSphere} alt="ShopSphere-logo" width={100} className='mb-3' />
                    <p className='text-justify text-sm'>
                        At <strong>ShopSphere</strong>, we bring you quality products, secure transactions, and dedicated support for a seamless shopping experience.
                    </p>
                    <div className='flex items-center mt-4 border border-gray-300 p-2 rounded-lg'>
                        <IoCallOutline size={24} className='mr-2' />
                        <div>
                            <p>Got Questions? Call us 24/7</p>
                            <p className='text-[#F7569B] font-bold'>+0123 456 789</p>
                        </div>
                    </div>
                </div>

                <div>
                    <p className='font-bold mb-2'>Useful Links</p>
                    <Link to="/about"><p>About</p></Link>
                    <Link to="#"><p>Our Services</p></Link>
                    <Link to="#"><p>How to shop On</p></Link>
                    <Link to="/faqs"><p>FAQ</p></Link>
                    <Link to="/contact"><p>Contact us</p></Link>
                </div>

                <div>
                    <Link to="#"><p className='font-bold mb-2'>Customer Service</p></Link> 
                        <Link to="#">   <p>Payment methods</p></Link>
                        <Link to="#">    <p>Money-back guarantee</p></Link>
                        <Link to="#">    <p>Returns</p></Link>
                        <Link to="#">    <p>Shipping</p></Link>
                        <p onClick={() => openModal("tnc")} className='cursor-pointer'>Terms and conditions</p>
                        <p onClick={() => openModal("privacy")} className='cursor-pointer'>Privacy Policy</p>
                </div>

                <div>
                    <Link to="#">   <p className='font-bold mb-2'>My Account</p></Link>
                    <Link to="/login">    <p>Sign in</p></Link>
                    <Link to="/cart">     <p>View Cart</p></Link>
                    <Link to="/wishlist">    <p>My Wishlist</p></Link>
                    <Link to="#">     <p>Track My Order</p></Link>
                    <Link to="#">    <p>Help</p></Link>
                </div>
            </div>

            <hr className='my-6 border-t border-gray-300' />

            <div className='flex flex-col md:flex-row justify-between items-center text-sm'>
                <p>&copy; {new Date().getFullYear()} ShopSphere Rights Reserved</p>
                <div className='flex gap-4 mt-2 md:mt-0'>
                  <Link to="https://www.facebook.com/AlmaBetterOfficial" target='_blank'>  <FaFacebookF size={20} className='cursor-pointer' /></Link>
                   <Link to="https://x.com/AlmaBetter"  target='_blank'>   <FaXTwitter size={20} className='cursor-pointer' /></Link>
                   <Link to="https://www.instagram.com/almabetter/" target='_blank'>   <FaInstagram size={20} className='cursor-pointer' /></Link>
                   <Link to="https://t.me/almabetterofficial" target='_blank'>   <FaTelegram size={20} className='cursor-pointer' /></Link>
                </div>
            </div>

            {modalType === "privacy" && (
                <Modal isOpen={true} onClose={closeModal} title="Privacy Policy" content="" />
            )}

            {modalType === "tnc" && (
                <Modal isOpen={true} onClose={closeModal} title="Terms & Conditions" content="By using ShopSphere, you agree to our terms and conditions. Please read them carefully." />
            )}
        </div>
    );
};

export default Footer;
