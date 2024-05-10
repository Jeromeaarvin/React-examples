export const ADDUSER = "addUser";
export const UPDATE_USER = "UPDATE_USER";



const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = {};
    if (!formData.firstname.trim()) {
        validationErrors.firstname = "First name required";
    }
    if (!formData.lastname.trim()) {
        validationErrors.lastname = "Last name required";
    }
    if (!formData.mobileNumber.trim()) {
        validationErrors.mobileNumber = "Mobile number required";
    } else if (formData.mobileNumber.length !== 10) {
        validationErrors.mobileNumber = "Enter valid Mobile number";
    }
    if (!formData.email.trim()) {
        validationErrors.email = "Enter Email ID";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        validationErrors.email = "Enter valid Email ID";
    }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
        try {
            const response = await fetch('http://localhost:8080/signup/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('Failed to save user data');
            }
            // Optionally, you can handle the response here
            const userDataResponse = await fetch('http://localhost:8080/user'); // Use the correct endpoint for fetching user data
            if (!userDataResponse.ok) {
                throw new Error('Failed to fetch user data');
            }
            const userData = await userDataResponse.json();
            setFormData(userData);

            // Reset the form after successful submission
            setFormData({
                firstname: '',
                lastname: '',
                mobileNumber: '',
                email: ''
            });
            setProfile(true);
            setShowPopup(false);
        } catch (error) {
            console.error('Error saving user data:', error);
            // Handle error, show message to user, etc.
        }
    }
    setShowDetails(true);
};

