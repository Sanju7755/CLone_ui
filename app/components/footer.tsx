// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto grid grid-cols-3 gap-8">
                <div>
                    <h3 className="text-lg font-semibold mb-2">Product</h3>
                    <ul>
                        <li>What's New</li>
                        <li>Pricing and Plans</li>
                        <li>Assistant Market</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Resources</h3>
                    <ul>
                        <li>Blog</li>
                        <li>Quick Start</li>
                        <li>Developer Handoff</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Company</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Terms of Service</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div className="text-center mt-8">
                <p>© 2023-2024 LobeHub, LLC. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
