import React, { useState } from 'react';

const App = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });

    const [submittedData, setSubmittedData] = useState([]);
    const [selectedDataIndex, setSelectedDataIndex] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        event.preventDefault();
        setSubmittedData([...submittedData, formData]); //store array data
        setFormData({ firstName: '', lastName: '', email: '' });
    };

    const handleDelete = (index) => {
        const updatedSubmittedData = submittedData.filter((data, i) => i !== index);
        setSubmittedData(updatedSubmittedData);
    };

    return (
        <div>
            <h2>Contact Form</h2>
            <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input type="text" id="firstName" name="firstName"
                       value={formData.firstName} onChange={handleInputChange}/>
                <br />

                <label>Last Name:</label>
                <input type="text" id="lastName" name="lastName"
                       value={formData.lastName} onChange={handleInputChange}/>
                <br />

                <label>Email:</label>
                <input type="email" id="email" name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <br />

                <button type="submit">Submit</button>
            </form>

            <h3>Submitted Data:</h3>
            <ul>
                {submittedData.map((data, index) => ( //mapping data
                    //dynamic rendering
                    <li key={index}>
                        {`${data.firstName} ${data.lastName} (${data.email})`}
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
            <button disabled={selectedDataIndex === null}>Delete Selected</button>

        </div>
    );
};

export default App;
