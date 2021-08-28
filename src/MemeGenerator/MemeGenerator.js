import React,{Component} from "react"

class MemeGenerator extends React.Component{
constructor(){
    super()
    this.state = {
        memeSentence: "",
        imageSelection: ""
    }
    this.handleChange =this.handleChange.bind(this)
}
handleChange(event){
    const {type,name,value} = event.target
    //this.setState({[name]:value})
  this.state.imageSelection == ""
  ? 
  this.setState({
    imageSelection: URL.createObjectURL(event.target.files[0])
  })
  : this.setState({[name]:value})
  
}
render(){

    return(
        <div>
            <h2>MEME GENERATOR</h2>
            <form>
                { <input 
                    type="text"
                    name ="memeSentence" 
                    value ={this.state.memeSentence} 
                    placeholder= "write sentence"
                    onChange={this.handleChange}
                    
                    ></input> }
                <input 
                    type ="file" 
                    name ="imageSelection"
                  //  value = {this.state.imageSelection}
                    onChange={this.handleChange}
                    ></input>
                
                <button>Submit</button>

            </form>
            <div>
                <h3>Your Meme</h3>
                
                <section 
                     style={{
                             backgroundImage:`url(${this.state.imageSelection})`,
                             backgroundSize: "cover",
                            // backgroundRepeat:'no-repeat',
                             backgroundPosition:"center"
                            }} 
                                
                >
                    <h2 style={{color:"white", fontSize:"40px"}}>{
                            this.state.memeSentence ==""
                            ? 
                            window.alert("please select image first")
                            : 
                            this.state.memeSentence                            
                        }</h2>

                    <img    src={this.state.imageSelection} 
                        style={{
                            width:'10%',
                            height:"20%",
                            
                        }}
                                                
                    ></img>
                
                </section>
                
            </div>

        </div>
    )
}

}
export default MemeGenerator