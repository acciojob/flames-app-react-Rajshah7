import React, { useState} from "react";
import '../styles/App.css';



let array = ["Siblings","Friends","Love","Affection","Marriage","Enemy"];

const App = () =>    {


    const [names,setNames] = useState({
        name1 : '',
        name2 : ''
    })

    const [answer,setAnswer] = useState();

    const calculateRelationship = () => {
        let firstName = names.name1;
        let lastName = names.name2;

        console.log("firstName",firstName);
        console.log("lastName",lastName);

        firstName = firstName.split('').sort();
        lastName = lastName.split('').sort();

        let i=0;
        let j=0;
        while(i<firstName.length && j<lastName.length){
            if(firstName[i] === lastName[j]){
                firstName.splice(i,1);
                lastName.splice(j,1);
            }else if(firstName[i] < lastName[j]){
                i++;
            }else {
                j++;
            }
        }

        let ansIndex = (firstName.length + lastName.length ) % 6;

        setAnswer(array[ansIndex]);


        
    }

    const handleChange = (e) => {
        const {name,value} = e.target;

        setNames({
            ...names,
            [name]:value
        });
    }

        return(
            <div id="main">
               <form type="Submit">
                <input 
                    type="text"
                    data-testid="input1"
                    name="name1"
                    placeholder="Enter First Name"
                    value={names.name1}
                    onChange={(e) => handleChange(e)}
                />

                <input 
                    type="text"
                    data-testid="input2"
                    name="name2"
                    placeholder="Enter Second Name"
                    value={names.name2}
                    onChange={(e) => handleChange(e)}
                />

                <button type="button" data-testid="calculate_relationship" name="calculate_relationship" onClick={calculateRelationship}>
                    Calculate Relationship Future
                </button>

                <button data-testid="clear" name="clear" onClick={(e) => setNames({name1 :"",name2: ""})}>
                    Clear
                </button>
               </form>

               <h3 data-testid="answer">{answer}</h3>
            </div>
        )
    
}


export default App;
