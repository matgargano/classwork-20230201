

const Person = ({ firstName, lastName, middleName }) => {
    // const firstName = props.firstName;
    // const lastName = props.lastName;
    // const { firstName, lastName } = props;
    
    return <p>

        Hello, {firstName} {middleName} {lastName}

    </p>;
}

Person.defaultProps = {
    firstName: 'Ye without a name'
}


export default Person;