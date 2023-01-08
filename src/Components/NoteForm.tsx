import { FaSearch } from "react-icons/fa"
import styled from "styled-components"
import { useDelete } from "../context/Deletecontext"
type NoteProps = {
    title:string,
    category:string,
    changeValue:(e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>)=>void,
    deleteflag:Boolean,
    filter:()=>void,
}
const NoteForm = ({title,category,changeValue,deleteflag,filter}:NoteProps) => {
    // const {deleteflag,title,category,changeValue,filter} = useDelete()
    
  return (
    <Wrapper>
        <div>
         <p> Notes</p>
         {deleteflag &&<button>Clear All</button>}
        </div> 
        <div className='note-top'>
          <div className='search'>
            <input type="text" placeholder="Search" 
            name='title' autoComplete="off" value={title} onChange={(e)=>{
            changeValue(e)
            filter()
            }}/>
            <FaSearch className='icon'/>  
          </div>
        <div className='sort'>
            <div>
              <label htmlFor="filter">Filter:</label>
                <select name="category" id="filter" value={category} onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>{changeValue(e)
                filter()}}>
                    <option value="all">All</option>
                    <option value="personal">Personal</option>
                    <option value="work">Work</option>
                </select>
                </div>
                <div>
              <label htmlFor="sort">Sort:</label>
                <select name="sort" id="sort">
                    <option value="a-z">A-Z</option>
                    <option value="z-a">Z-A</option>
                    <option value="oldest">Oldest</option>
                    
                </select>
            </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default NoteForm
const Wrapper = styled.div`
   .note-top{
        display: grid;
        gap: .5rem;
    }
    input{
        height: 100%;
        width: 93%;
        border: none;
        padding: .5rem 1rem;
        outline: none;
    }
    select{
        border: none;
        padding: .2rem;
        outline: none;
        margin-left: .5rem;
        width: 7.1rem;
    }
    option{
        /* height: 4rem;
        padding: 1rem; */
    }
    .icon{
        width: 1.2rem;
        height: 100%;
        color: gray;
    }
    .sort{
        display: flex;
        justify-content: space-between;
        /* background-color: azure; */
    }
`