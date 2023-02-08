import React from 'react';
interface IProps {
    people:{
      name:string,
      age:number,
      url:string,
      note?:string
    }[]
  }
const List: React.FC<IProps> =({people})=> {
  const renderPeople = (): JSX.Element[] =>{
    return people.map((person)=>(
      <li className='List'>
        <div className='List-header'>
          <img className='List-img' src={person.url} alt={person.name} />
          <h2 >{person.name}</h2>
        </div>
        <p>{person.age} years old</p>
        <p className='List-note'>{person.note}</p>
      </li>
    ))
  }
    return (
       <ul>
       {renderPeople()}
       </ul>
    );
}

export default List;