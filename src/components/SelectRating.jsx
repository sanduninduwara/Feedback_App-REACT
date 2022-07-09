import {useState} from 'react'

const SelectRating = ({select}) => {

    const [selected,setSelected]=useState(10);

    const handleChange=(e)=>{
        var value=+e.currentTarget.value // + means get int from str
        setSelected(value)
        select(value)
    }



    const printList = () => {
        const row = [];
        for (var i = 0; i < 10; i++) {
          row.push(       
          <li key={`rating-${i + 1}`} >
            <input
              type='radio'
              id= {`num${i + 1}`}
              name='rating'
              value={i+1}
              onChange={handleChange}
              checked={selected===i+1}
            />
            <label htmlFor={`num${i + 1}`}>{i+1}</label>
          
          </li>);
        }
        return row;
      };


  return (
    <ul className='rating'>
         
        {
            printList()
        }


    </ul>
   

   

  )
}

export default SelectRating