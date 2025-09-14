function Welcome(props){
    return (
    <div>
        <h2> Welcome, {props.name}! This is from a component!!</h2>
        <h2> Your age is {props.age}</h2>
    </div>
    );

}

export default Welcome;