import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class SimpleForm extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            Age: '',
            gender: '',
            location:'QLD',
            isDietaryRestriction: false
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event){
            const{ name,value,type,checked } = event.target   
           //without using checkbox
          // this.setState({ [name]:value })  
           //after using checkbox need to use this 
           type === "checkbox"?this.setState({[name]:checked}): this.setState({ [name]:value })  
    }
    
    
    render() {
        return (
            <main>
                <form >
                    <input 
                        name ="firstName"
                        placeholder="First Name" 
                        type="text" 
                        value ={this.state.firstName} 
                        onChange ={this.handleChange}/><br />
                        
                    <input 
                        placeholder="Last Name" 
                        name="lastName"
                        type="text" 
                        value = {this.state.lastName} 
                        onChange ={this.handleChange}/><br />
                        
                    <input 
                        placeholder="Age" 
                        name="Age"
                        type="text"
                        value ={this.state.Age} 
                        onChange={this.handleChange} /><br />
                    
                    {/* Create radio buttons for gender here */}
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender ==="male"}
                        onChange={this.handleChange}
                    />Male
                    <br />
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.gender==="female"}
                        onChange={this.handleChange}
                    />Female
                    
                    {/* Create select box for location here */}
                    <br />
                    <label>select the location</label>
                        <select
                            value={this.state.lastName}
                            onChange={this.handleChange}
                            name ="location"
                        >
                            <option value ="QLD">QLD</option>
                            <option value ="NSW">NSW</option>
                            <option value ="VIC">VIC</option>
                            <option value ="TAS">TAS</option>
                            <option value ="ACT">ACT</option>
                            <option value ="WA">WA</option>
                            <option value ="SA">SA</option>
                            <option value ="NT">NT</option>
                        </select>
                    
                    {/* Create check boxes for dietary restrictions here */}
                    <br />
                    <input
                        type="checkbox"
                        name="isDietaryRestriction"
                        checked={this.state.isDietaryRestriction}
                        onChange={this.handleChange}
                    />Is Dietary Restriction
                    <br />
                    
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName/* First and last name here */}</p>
                <p>Your age: {this.state.Age/* Age here */}</p>
                <p>Your gender: {this.state.gender/* Gender here */}</p>
                <p>Your destination: {this.state.location/* Destination here */}</p>
                <p>
                    Your dietary restrictions: 
                    {this.state.isDietaryRestriction? "YES": "NO"/* Dietary restrictions here, comma separated */}
                </p>
            </main>
        )
    }
}

export default SimpleForm
