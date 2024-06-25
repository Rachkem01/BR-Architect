
import { useState } from "react"
function Contact () {
    const[name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [comment, setComment] = useState('')
    const[errorName,setErrorName] = useState('')
    const[errorEmail,setErrorEmail] = useState('')
    const[errorSubject, setErrorSubject] =useState('')
    const[errorComment, setErrorComment] = useState('')
    const[NameColor, setNameColor] = useState('')
    const[EmailColor, setEmailColor] = useState('')
    const[SubjectColor,setSubjectColor] = useState('')
    const[CommentColor, setCommentColor] = useState('')

    const handleClick =(e)=>{
        e.preventDefault()
        if(name >8 ){
            setErrorName('')
            setNameColor("green")
        }
        else{
            setErrorName("Name must be at least 8 characters")
            setNameColor("red")
        }

    

    if(email.includes("@gmail")){
        setErrorEmail('')
        setEmailColor("green")
    }
    else{
        setErrorEmail("email must include @gmail")
    }

    if(subject !== ''){
        setErrorSubject("")
        setSubjectColor("green")
        
    }else{

setErrorSubject("Subject must not be empty")
        setSubjectColor("red")
    }

    if(comment !== ''){
        setErrorComment("")
        setCommentColor("green")
        
    }else{

setErrorComment("Comment must not be empty")
        setCommentColor("red")
    }
    }
    return (
    <div className="contact" id='Contact'>
        <h1>Contact</h1>
        <p>Lets get in touch and talk about your next project.</p>
        <div className="form">
            <form>
                <input type="text" value={name} style={{backgroundColor:NameColor}} placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
                <p className="error">{errorName}</p>
                <input type="text" value={email} style={{backgroundColor:EmailColor}} placeholder="Email"
                onChange={(e)=>setEmail(e.target.value)}/>
                <p className="error">{errorEmail}</p>
                <input type="text" value={subject} style={{borderColor:SubjectColor}} placeholder="Subject"
                onChange={(e)=>setSubject(e.target.value)}/>
                <p className="error">{errorSubject}</p>
                <input type="text" value={comment}
                style={{borderColor:CommentColor}} placeholder="Comment"
                onChange={(e)=>setComment(e.target.value)}/>
                <p className="error">{errorComment}</p>
                <button className="Submit-btn" onClick={handleClick}>Send Message</button>
               
            </form>
        </div>

    </div>
   
    )
}
export default Contact