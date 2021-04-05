import React, { Component } from 'react'

 class Thirdquestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
          employee:[{
         
            "name": "karthik",
            "job": "IT",
            "index":0
          },
          {
         
            "name": "siva",
            "job": "IT",
            "index":1
          }
        ],
          index:1,   
          name: '',
          job: '',
        };
        this.add = this.add.bind(this);
        this.myChangeHandler=this.myChangeHandler.bind(this);
        this.del=this.del.bind(this);

        
      }
      del=(id)=>
      {
        const newList = this.state.employee.filter((item) => item.index !== id);
        alert(newList);
        this.setState({employee:newList})
      }

      myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
        event.preventDefault()
      
      }
      add=()=>{
        const { name,job, employee,index } = this.state;
        
        const e={
         
          "name": name,
          "job": job,
          "index":index
        }
        

       let dupl=employee;
       dupl.push(e);
        this.setState({
            employee:dupl,
            name:'',
            job:'',
            index:index+1
        }); 
        console.log(employee)
        
      }
     
      render() {
        const {employee}=this.state;
        const a=employee.map(e=>{return (
          <tr>
             <td>{e.name}</td>
             <td>{e.job}</td>
             <td><button onClick={() => this.del(e.index)} value={e.index} className="butto">Delete</button></td>
          </tr>
        )})
        return (
         <div>
          <table>
            <tr>
            <th>Name</th>
            <th>JOb</th>
            <th>Delete</th>
            </tr>
            {a}

          </table>
        
          <label>Name</label><br/>
          <input
            type='text'
            name='name'
            onChange={this.myChangeHandler}
          />
          <br/>
          <label>Job</label><br/>
          <input
            type='text'
            name='job'
            onChange={this.myChangeHandler}
          />
          <br/>
          <input type='button   ' onClick={this.add}   className="butto"/>
          
          

         </div>
        );
      }
 }



export default Thirdquestion