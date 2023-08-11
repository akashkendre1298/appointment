import React, { useState } from 'react';
import "./EntryTable.css"

const data = [
    { name: 'John Doe', contact: '123-456-7890' },
    { name: 'Jane Smith', contact: '987-654-3210' },
    { name: 'Alice Johnson', contact: '555-555-5555' },
    { name: 'Bob Brown', contact: '111-222-3333' },
    { name: 'Eve Wilson', contact: '888-777-6666' },
    // ... more data entries
];

const EntriesPerPage = 5;

const TableWithPagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / EntriesPerPage);
    const startIndex = (currentPage - 1) * EntriesPerPage;
    const endIndex = startIndex + EntriesPerPage;

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    return (
        <div className='table-div-scroll'>
            <table className='table-scroll'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {data.slice(startIndex, endIndex).map((entry, index) => (
                        <tr key={index}>
                            <td className='patient-name-contact'>{entry.name}</td>
                            <td className='patient-name-contact'>{entry.contact}</td>
                        </tr>
                    ))}
                </tbody>
                <div>
                    <button onClick={handlePrevPage} disabled={currentPage === 1}>
                        Previous
                    </button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                        Next
                    </button>
                </div>
            </table>

        </div>
    );
};

export default TableWithPagination;
