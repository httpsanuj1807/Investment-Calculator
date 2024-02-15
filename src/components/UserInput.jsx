function UserInput({inputValues, onChangeHandler}){

    return(
        <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" name="initialInvestment" onChange={onChangeHandler} required value={(inputValues.initialInvestment) ? inputValues.initialInvestment : ""}/>
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" name="annualInvestment" onChange={onChangeHandler} required value={(inputValues.annualInvestment) ? inputValues.annualInvestment : ""}/>
            </p>
        </div> 
       
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" name="expectedReturn" onChange={onChangeHandler} required value={(inputValues.expectedReturn) ? inputValues.expectedReturn : ""}/>
            </p>
            <p>
                <label>Time Duration</label>
                <input type="number" name="duration" onChange={onChangeHandler} required value={(inputValues.duration) ? inputValues.duration : ""}/>
            </p>
        </div> 
        
        </section>
    );
}

export default UserInput;