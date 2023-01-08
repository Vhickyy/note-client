import styled from "styled-components"
import { useNoteContext } from "../context/Notecontext"

const AddNoteForm = () => {
    const {setId,editNote,error} = useNoteContext()
  return (
    <Wrapper>
        <p>Add Note</p>
        <form>
            <div className="flex">
                <div className="addTitle">
                    <label htmlFor="title" className="label">Title:</label>
                    <input type="text" id="title" name="title" placeholder="Add Title"/>
                </div>
                <div className="flex2">
                     <div>
                    <label htmlFor="category">Category:</label>
                    <select name="category" id="category">
                        <option value="Uncategorized">Uncategorized</option>
                        <option value="personal">Personal</option>
                        <option value="work">Work</option>
                    </select>
                </div>
                <button>Save</button>
                </div>
               
            </div>
            
            <div>
                <label htmlFor="notes"></label>
                <textarea name="notes" id="notes" placeholder="Enter Text"></textarea>
            </div>
        </form>
    </Wrapper>
  )
}

export default AddNoteForm
const Wrapper = styled.main`
    height: 81.32vh;
    background-color: brown;
    padding: 1rem;
    p{
        padding-bottom: 0.5rem;
    }
    .flex{
        display: grid;
        gap: .5rem;
    }
    form{
        display: grid;
        gap: 1.2rem;
    }
    label{
        display: none;
        transform: translateX(200px);
    }
    input,textarea{
        padding: 0.5rem 1rem;
        width: 100%;
        border-radius: .5rem;
        border: none;
        outline: none;
    }
    textarea{
        height: 60vh;
    }
    select{
        border: none;
        width: 10rem;
    }
    .flex2{
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* justify-content: center; */
    }
    button{
        width: 10rem;
        padding: 0.5rem;
        border: none;
        border-radius: 0.5rem;
        outline: none;
    }
    /* .addTitle{
        width: 70%;
    }
    .addTitle input{
        width: 100%;
    } */
`