import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 footer">
            <div className="container py-8 mx-auto">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="col-span-1">
                        <h3 className="text-white">About Us</h3>
                        <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="col-span-1">
                        <h3 className="text-white">Contact Us</h3>
                        <p className="text-gray-300">Email: info@example.com</p>
                        <p className="text-gray-300">Phone: 123-456-7890</p>
                    </div>
                    <div className="col-span-1">
                        <h3 className="text-white">Follow Us</h3>
                        <ul className="flex social-media">
                            <li><a href="#"><i className="text-gray-300 fab fa-facebook"></i></a></li>
                            <li><a href="#"><i className="text-gray-300 fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="text-gray-300 fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;