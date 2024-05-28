// Step 1: Import necessary React and external libraries/modules
import React, { useEffect, useState } from "react";
import Stepper from "awesome-react-stepper";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// Step 2: Import utility function
import {getImageUrlFromRequirement} from '../utilities';

// Step 3: Import requirements data
import requirements from '../data/requirements.json';

// Step 4: Define a functional component named 'RequestStepper'
export default function RequestStepper({onSubmit}) {

    // Step 4.1: Declare state variables and their setter methods
    const [category, setCategory] = useState('');
    const [values, setValues] = useState({
        fare: '',
        requirement: '',
        time: '09:30'
    });

     // Step 4.2: Function to handle changes in form inputs
    const valueOnChange = (event) => {
        setValues((previouData) => ({
            ...previouData,
            [event.target.name]: event.target.value,
          }));
    }

    // Step 4.3: Function to submit the form
    const submit = () => {
        onSubmit({...values, category});
    }

    // Step 4.4: Render the component
    return (

        // Step 4.4.1: Stepper component with a submit button
        <Stepper submitBtn={<Button onClick={submit} className="defaultBtn">Submit</Button>}>

            {/* Step 4.4.1.1: First form section - Select Category */}
            <div className="stepper-form">
                <SelectCategory category={category} onChange={setCategory} />
            </div>

            {/* Step 4.4.1.2: Second form section - Select Requirements */}
            <div className="stepper-form">
                <Requirements data={requirements} onChange={valueOnChange} value={values.requirement} />
            </div>

            {/* Step 4.4.1.3: Third form section - Enter Fare and Display Image */}
            {/* <div className="stepper-form">
                <div className="my-4">
                    <h6>Fare for the request</h6>
                    <input placeholder="Enter price in (INR)" name="fare" onChange={valueOnChange} className="w-100" type="number" defaultValue={values.fare} id="fare" />
                </div>
                <div className="row justify-content-center mt-4">
                    <img alt="" src={'https://i.giphy.com/bO7ab7fElg0AU.webp'} style={{ height: '200px', objectFit: 'contain' }} />
                </div>
            </div> */}

            {/* Step 4.4.1.4: Fourth form section - Enter Time and Display Image */}
            <div className="stepper-form">
                <div className="my-4">
                    <h6>date</h6>
                    <input placeholder="date" name="date" onChange={valueOnChange} className="date" type="date" defaultValue={values.time} id="date" />
                </div>
                <div className="row justify-content-center mt-4">
                    <img alt="" src={'https://i.pinimg.com/originals/9b/5e/e7/9b5ee709abd31e11a261572b498762e1.gif'} style={{ height: '200px', objectFit: 'contain' }} />
                </div>
            </div>
        </Stepper>
    );
}

// Step 5: Sub-component for handling Requirements
function Requirements({ data, value, onChange }) {
    // Step 5.1: Declare state variable and its setter method
    const [requirementImage, setRequirementImage] = useState('');

    // Step 5.2: Initialize default requirement image
    const initDefaultRequirementImage = () => {

        // Check if a value is already selected
        if (value && value.length) {
            setRequirementImage(getImageUrlFromRequirement(value));
        } else {

            // Set the default image based on the first requirement in the data array
            const requirement = data.length ? data[0] : {};
            setRequirementImage(requirement.image);
        }
    };

    // Step 5.3: useEffect hook to initialize default image
    useEffect(() => {
        initDefaultRequirementImage();
    }, []);

    // Step 5.4: Function to handle changes in requirement selection
    const valueOnChange = (event) => {
        onChange(event);
        // Update the image based on the selected requirement
        setRequirementImage(getImageUrlFromRequirement(event.target.value));
    };

    // Step 5.5: Render the component
    return (
        <div className="my-4">
            <h6>Select requirement</h6>
            {/* Step 5.5.1: Dropdown for selecting requirements */}
            <select onChange={valueOnChange} name="requirement" className="form-select">
                {data.map((option, index) => (
                    <option key={index} defaultChecked={option.value === value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            {/* Step 5.5.2: Display image based on the selected requirement */}
            <div className="row justify-content-center mt-4">
                <img alt="" src={requirementImage} style={{ height: '200px', objectFit: 'contain' }} />
            </div>
        </div>
    );
}


// Step 6: Component for selecting category
function SelectCategory({ category, onChange }) {

    // Step 6.1: Function to handle changes in category selection
    const valueOnChange = (event, type) => {

        // Step 6.1.1: Check if the checkbox is checked
        if (event.target.value === 'on') {

            // Step 6.1.2: Trigger the onChange callback with the selected category type
            onChange(type);
        }
    }

    // Step 6.2: Render the component
    return (
        <div className="my-4">
            <h6>Choose category</h6>
            {/* Step 6.2.1: Display checkboxes for selecting categories */}
            <div className="row justify-content-center mt-4">

                {/* Step 6.2.1.1: Food Delivery category */}
                <div className="col-6 col-md-4">
                    <input
                        id="delivery"
                        onChange={(e) => valueOnChange(e, 'delivery')}
                        className="d-none"
                        name="category"
                        defaultChecked={category === 'delivery'}
                        type="checkbox"
                    />
                    <label htmlFor="delivery">
                        {/* Step 6.2.1.1.1: Card component for styling */}
                        <Card className="bg-light">
                            <Card.Body>

                                {/* Step 6.2.1.1.2: Title for the category */}
                                <Card.Title className="text-center">MACHINARY</Card.Title>

                                 {/* Step 6.2.1.1.3: Subtitle with an image for the category */}
                                <Card.Subtitle className="my-2 text-muted text-center">

                                    <img
                                        src={"https://www.tractorjunction.com/blog/wp-content/uploads/2022/09/Top-10-agriculture-equipment-list-in-India-1024x576.jpg"}
                                        className="w-100"
                                        style={{ borderRadius: '5px', width: '150px', height: '85px' }}
                                    />
                                </Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </label>
                </div>

                {/* Step 6.2.1.2: Travel category */}
                <div className="col-6 col-md-4">
                    <input
                        className="d-none"
                        onChange={(e) => valueOnChange(e, 'drop')}
                        name="category"
                        defaultChecked={category === 'drop'}
                        type="checkbox"
                        id="drop"
                    ></input>
                    <label htmlFor="drop">

                         {/* Step 6.2.1.2.1: Card component for styling */}
                        <Card className="bg-light">
                            <Card.Body>

                                {/* Step 6.2.1.1.2: Title for the category */}
                                <Card.Title className="text-center">WORKERS</Card.Title>

                                {/* Step 6.2.1.1.3: Subtitle with an image for the category */}
                                <Card.Subtitle className="my-2 text-muted text-center">
                                    <img
                                        src={"https://th.bing.com/th/id/R.e2c73dbf8a8f512a95ee3a2ec35f5d72?rik=DuUew48QLbwHzw&riu=http%3a%2f%2fvnmanpower.com%2fupload_images%2fimages%2fall%2ffarm-workers-from-vmst.jpg&ehk=s1NXBhEe0wVXkZGBnlrnXcEoGY1R4UtFvQ9kW7HVQ0Y%3d&risl=&pid=ImgRaw&r=0"}
                                        className="w-100"
                                        style={{ borderRadius: '5px', width: '150px', height: '85px' }}
                                    />
                                </Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </label>
                </div>
            </div>
        </div>
    );
}
