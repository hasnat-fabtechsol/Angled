import React from 'react'
import { useState } from 'react'
import { AdminButton } from '../../components/mui'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertFromRaw,convertToRaw ,EditorState} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Button, TextField } from '@mui/material';
import { Container, Stack } from '@mui/system';
import apiClient from '../../api/apiClient';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import LoadingOverlay from '../../components/mui/LoadingOverlay';

export default function Blog() {
  
    const location = useLocation();
    const navigate=useNavigate()
    const { id } = useParams();
    let emptyFields = {
        title: "",
        description: "",
        image: null,
        content: null,
        contentJson: null,
      
      };
      const [addNew, setAddNew] = useState(emptyFields);
      const [loading, setLoading] = useState(false);
      const [message, setMessage] = useState({text:"",color:""});
      const [submitMsg, setSubmitMsg] = useState({text:"",color:""});
      const [editorState,setEditorState]=useState(EditorState.createEmpty())

      const [editorshow,setEditorShow]=useState(false)
      const [data]= useState(location.state);
      useEffect(()=>{
        if(data){
           setAddNew({
               title:data.title,
               description:data.description,
               content:data.content,
           });
           const convertedState = convertFromRaw(JSON.parse( data.contentJson))
          setEditorState( EditorState.createWithContent(convertedState ))
        }
      },[])
   
      const handleChange = (event) => {
        const { name, value } = event.target;
        if(event.target.files){
          if(event.target.files[0].size>5242880)
          return setMessage({text:"Image can't be more than 5MB",color:"danger"})
          setAddNew({ ...addNew, [name]: event.target.files[0] })
        }
        else
        setAddNew({ ...addNew, [name]: value });
      };



    const handleSubmit=async()=>{
        var formdata=new FormData()
        formdata.append('title',addNew.title)
        formdata.append('description',addNew.description)
        if(addNew.image){
            console.log(" exist")
            formdata.append('image',addNew.image)
        }
        else
        console.log("doesn't exist")

        formdata.append('content',draftToHtml(convertToRaw(editorState.getCurrentContent())))
        formdata.append('contentJson',JSON.stringify(convertToRaw(editorState.getCurrentContent())))

if(!data){
  setLoading(true)
    const response = await apiClient.post("/blogs/", formdata);
    setLoading(false)
    if(response.status!==201) return setSubmitMsg({text:"Error occured while Submiting Data try again",color:"danger"})
    setSubmitMsg({text:"Successfully Added New Blog",color:"success"})
    setTimeout(()=>navigate(-1),2000)
}else
{
  setLoading(true)
    const response = await apiClient.put(`blog/${id}/`, formdata);
    setLoading(false)
   if(response.status!==200) return setSubmitMsg({text:"Error occured while Submiting Data try again",color:"danger"})
   setSubmitMsg({text:"Successfully Updated Blog",color:"success"})
   setTimeout(()=>navigate(-1),2000)

}
    }
    function checkEmpty(){

      if(!addNew.title){
        setMessage({text:"Title is Required",color:"danger"})
        return true
      }
      if(!addNew.description){
        setMessage({text:"description is Required",color:"danger"})
        return true
      }
      if(data.image)return false
      if(!addNew.image){
        setMessage({text:"Please Select a Image",color:"danger"})
        return true
      }
      return false
    
      
    }
    function resetErrors() {
      setMessage({text:"",color:""})
    }
    function validateForm(){
      console.log(checkEmpty())
      if(checkEmpty())
      return
      setEditorShow(!editorshow)
    }


  return (
    <div  >
     {loading&& <LoadingOverlay open={loading}/>}
    <div className='d-flex justify-content-between'>

        <AdminButton onClick={validateForm}
                              name={editorshow?"Previous":"Next"}
                            
                            />
                             {submitMsg.text&& <div className={`bg-${submitMsg.color} p-1 m-1`}>
                  <span>{submitMsg.text}</span>
                </div>}
                            {editorshow&& <AdminButton onClick={handleSubmit}
                              name={"Submit"}
                            
                            />}
    </div>
                   {!editorshow? <BlogInfo data={data} addNew={addNew} handleChange={handleChange}  message={message} resetErrors={resetErrors}/>:
        
          
      <div >

    <Editor
  


      
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
  
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
            image: {
              className: undefined,
              component: undefined,
              popupClassName: undefined,
              urlEnabled: true,
              uploadEnabled: true,
              alignmentEnabled: true,
              uploadCallback: undefined,
              previewImage: false,
              inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
              alt: { present: false, mandatory: false },
              defaultSize: {
                height: '400',
                width: '400',
              },
            }
          }}
    editorState={editorState}
    onEditorStateChange={setEditorState}
  />

      </div>
       }
        
        </div>
  )
}


const BlogInfo=({data,addNew,handleChange,message,resetErrors})=>{


    return (
        <Container maxWidth='sm'>
           {message.text&& <div className={`bg-${message.color} p-1 m-1 mb-2`}>
                  <span>{message.text}</span>
                </div>}
<form   encType='multipart/form-data'>


         
            <TextField
              required
              type="text"
              name="title"
              value={addNew.title}
              label="Title"
              id="outlined-name"
              onChange={handleChange}
              onFocus={resetErrors}
              fullWidth
              sx={{ marginBottom: "25px" }}
            />
         
              <TextField
                required
                name="description"
                value={addNew.description}
                label="Description"
                id="outlined-name"
                onChange={handleChange}
                onFocus={resetErrors}
                // InputProps={{ inputProps: { min: 0, max: 10 } }}
                sx={{ width: { xs: "100%" } }}
              />
            
         <Button
  variant="contained"
  component="label"
  sx={{marginY:3}}
>
  Upload File
  <input
    type="file"
    hidden
    name='image'
    onChange={handleChange}
    onFocus={resetErrors}
  />

</Button>
{addNew.image?<Stack><img src={URL.createObjectURL(addNew.image)} alt="" style={{width:350,height:200}}/></Stack>:
data&&<Stack><img src={data.image} alt="" style={{width:350,height:200}}/></Stack>

}

</form>
        
        </Container>
      )
}
