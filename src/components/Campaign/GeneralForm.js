import React, { useState } from 'react';

const GeneralForm = () => {
   
   // const [primaryOptionPaltform, setPrimaryOptionPlatform] = useState(false);
    // const [one, setOne] = useState(true);
    // const [two, setTwo] = useState(false);
    // const [three, setThree] = useState(false);
    // const [four, setFive] = useState(false);
    // const [five, setSix] = useState(false);
    // const [six, setSeven] = useState(false);
   
  
  //let show=[true,false,false,false,false,false,false];
    //const[dispaly,setDisplay]=useState([true,false,false,false,false,false,false]);
    //const[show,setShow]=useState({0:true,1:false,2:false,3:false,4:false,5:false,6:false});
    // const[show,setShow]=useState([true,false,false,false,false,false,false]);
    // const handleOptionPlatform = (id) => {
    //     let dispaly=[false,false,false,false,false,false,false];
    //     //let dispaly=show;
    //      // console.log('clicke platform',id);
    //     let nextId=parseInt(id+1);
    //    // console.log('next id',show);
    //     dispaly[id]=!show[id];
    //     //dispaly[id]=false;
    //     //console.log('dipaly one',dispaly);
    //     dispaly[`${nextId}`]=!show[`${nextId}`];
      
     
    //    // show[id]=!show[id];
    //     console.log('dipaly second',dispaly);
    //     //show=dispaly;
    //     setShow(dispaly);
        
       
    // }
    // const handleOptionPlatformBack = (id) => {
    //     let dispaly=[false,false,false,false,false,false,false];
    //     //let dispaly=show;
    //      // console.log('clicke platform',id);
    //     let nextId=parseInt(id-1);
    //    // console.log('next id',show);
    //     dispaly[id]=!show[id];
    //     //dispaly[id]=false;
    //     //console.log('dipaly one',dispaly);
    //     dispaly[`${nextId}`]=!show[`${nextId}`];
      
     
    //    // show[id]=!show[id];
    //     console.log('dipaly second',dispaly);
    //     //show=dispaly;
    //     setShow(dispaly);
        
       
    // }
    const [form, setForm] = useState({
        email: "",
        name: "",
        password: "",
      })
      const [count, setCount] = useState(1)
    
      const updateForm = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        })
      }
    return (
        <>  
            {
            /* {show[0]&& <div>
            <h1>Platform1</h1>
            
            <h2>What is your primary platform?</h2>
            <p>Primary platform where you want to run this campaign</p>
            <input type="text"/>
            <div><button onClick={()=>handleOptionPlatform(0)}>next</button></div>
            </div>
            }
            {show[1] && <div>
            <h1>Platform2</h1>
            
            <h2>What is your primary platform?</h2>
            <p>Primary platform where you want to run this campaign</p>
            <input type="text"/>
            <div><button onClick={()=>handleOptionPlatform(1)}>next</button></div>
            <div><button onClick={()=>handleOptionPlatformBack(1)}>Back</button></div>
            </div>
            }
            {show['2'] && <div>
            <h1>Platform3</h1>

            <h2>What is your primary platform?</h2>
            <p>Primary platform where you want to run this campaign</p>
            <input type="text"/>
            <div><button onClick={()=>handleOptionPlatform(2)}>next</button></div>
            <div><button onClick={()=>handleOptionPlatformBack(2)}>Back</button></div>
            </div>
            }
            {show['3'] && <div>
            <h1>Platform3</h1>

            <h2>What is your primary platform?</h2>
            <p>Primary platform where you want to run this campaign</p>
            <input type="text"/>
            <div><button onClick={()=>handleOptionPlatform(3)}>next</button></div>
            <div><button onClick={()=>handleOptionPlatformBack(3)}>Back</button></div>
            </div>
            }
            {show['4'] && <div>
            <h1>Platform4</h1>

            <h2>What is your primary platform?</h2>
            <p>Primary platform where you want to run this campaign</p>
            <input type="text"/>
            <div><button onClick={()=>handleOptionPlatform(4)}>next</button></div>
            <div><button onClick={()=>handleOptionPlatformBack(4)}>Back</button></div>
            </div>
            }
            {show['5'] && <div>
            <h1>Platform5</h1>

            <h2>What is your primary platform?</h2>
            <p>Primary platform where you want to run this campaign</p>
            <input type="text"/>
            <div><button onClick={()=>handleOptionPlatform(5)}>next</button></div>
            <div><button onClick={()=>handleOptionPlatformBack(5)}>Back</button></div>
            </div>
            }
            {show['6'] && <div>
            <h1>Platform6</h1>

            <h2>What is your primary platform?</h2>
            <p>Primary platform where you want to run this campaign</p>
            <input type="text"/>
           
            <div><button onClick={()=>handleOptionPlatformBack(6)}>Back</button></div>
            </div>
            }
           
            {primaryOptionPaltform && <div>
            <h1> Option Platform</h1>

            <h2>What is your Additional Platforms (Optional)?</h2>
            <p>Additional platforms to boost your campaign</p>
            <input type="text"/>
            <div><button>next</button></div>
            </div>
            } */
            }
      <h1>Step {count} of 3</h1>
      <form
        className="col-4 form"
        onSubmit={() =>
          alert(
            `Submitted Email: ${form.email} Name: ${form.name} Password: ${form.password}`
          )
        }
      >
        {count === 1 ? (
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={updateForm}
              value={form.email}
            />
          </div>
        ) : null}
        {count === 2 ? (
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={updateForm}
              value={form.name}
            />
          </div>
        ) : null}
        {count === 3 ? (
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={updateForm}
              value={form.password}
            />
          </div>
        ) : null}
        {count === 3 ? (
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        ) : null}
      </form>
      <button
        className="btn btn-dark"
        type="submit"
        onClick={() => setCount(count - 1)}
        disabled={count < 2}
      >
        Back
      </button>
      <button
        className="btn btn-light"
        type="submit"
        onClick={() => setCount(count + 1)}
        disabled={count > 2}
      >
        Next
      </button>
        </>
    );
};

export default GeneralForm;