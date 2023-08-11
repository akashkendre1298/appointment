import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';

const SidePanel = () => {
    const [accounts, setAccounts] = useState([
        { id: 1, name: 'Account 1' },
        { id: 2, name: 'Account 2' },
        { id: 3, name: 'Account 3' },
        // Add more accounts as needed
    ]);

    return (
        <div className="side-panel">
            <div className="home-icon">
                <FaHome />
            </div>
            <div className="account-list">
                <h2>Accounts</h2>
                <ul>
                    {accounts.map(account => (
                        <li key={account.id}>{account.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SidePanel;
