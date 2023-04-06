import React from 'react';

const Answers = () => {
    return (
        <div className='text-center p-4'>
            <h4 className='text-danger'>What is the difference between "Props" and "state"</h4>
            <h5 className='text-success'>Answer:</h5>
            <p> props are passed down from a parent component and are read-only,<br />
                while state is managed within a component and can be changed using setState. Props are used to control the behavior of child components, while state is used to manage the dynamic behavior of a components</p>
            <h4 className='text-danger'>How useState work?</h4>
            <h5 className='text-success'>Answer:</h5>
            <p>useState is React Hook that allows  to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>
            <h4 className='text-danger'>Some important work of useState without data loading</h4>
            <h5 className='text-success'>Answer:</h5>
            <p>1. To store a boolean value that controls whether a component or feature is visible or hidden. <br />

                2. To store a string or number value that represents user input or a UI setting that the user has <br />

                3. To store an array or object that represents internal state within the component, such as a list of items that the user has added or a set of filters that are currently applied. <br />

                4. To store a function that updates state or performs some other action within the component.</p>
            <h4 className='text-danger'>HOw dose react work under the hood?</h4>
            <h5 className='text-success'>Answer:</h5>
            <p>One of the key benefits of React is that it creates a virtual representation of the web page called the "virtual DOM." This virtual DOM is like a snapshot of the web page that's stored in memory.

                Whenever something changes in your web application, React updates the virtual DOM to reflect those changes. It then compares the new virtual DOM to the old one and figures out what needs to be updated on the real web page.

                By using the virtual DOM, React is able to make updates to the web page more efficiently, without having to reload the entire page or make a lot of unnecessary changes.

                React also has a feature called "state" that allows you to store data within a component. For example, you might store the text that a user types into a text box, or the number of items in a list.

                Whenever the state of a component changes, React updates the virtual DOM and figures out what needs to be updated on the real web page, just like before.</p>

        </div>
    );
};

export default Answers;