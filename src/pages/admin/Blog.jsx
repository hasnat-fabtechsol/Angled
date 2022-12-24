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
import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function Blog() {
  
    const location = useLocation();
    const { id } = useParams();
    let emptyFields = {
        title: "",
        description: "",
        image: null,
        content: null,
        contentJson: null,
      
      };
      const [addNew, setAddNew] = useState(emptyFields);
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
        if(event.target.files)
        setAddNew({ ...addNew, [name]: event.target.files[0] })
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
    const response = await apiClient.post("/blogs/", formdata);
    if(response.status==201)
    alert('Created successfully')
     console.log(response.data);
}else
{
    const response = await apiClient.put(`blog/${id}/`, formdata);
   if(response.status==200)
   alert('Updated successfully')

}
    }


  return (
    <div  >
    <div className='d-flex justify-content-between'>

        <AdminButton onClick={()=>setEditorShow(!editorshow)}
                              name={editorshow?"Previous":"Next"}
                            
                            />
                            {editorshow&& <AdminButton onClick={handleSubmit}
                              name={"Submit"}
                            
                            />}
    </div>
                   {!editorshow? <BlogInfo data={data} addNew={addNew} handleChange={handleChange}/>:
        
          
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


const BlogInfo=({data,addNew,handleChange})=>{


    return (
        <Container maxWidth='sm'>
<form   encType='multipart/form-data'>


         
            <TextField
              required
              type="text"
              name="title"
              value={addNew.title}
              label="Title"
              id="outlined-name"
              onChange={handleChange}
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
  />

</Button>
{addNew.image?<Stack><img src={URL.createObjectURL(addNew.image)} alt="" style={{width:350,height:200}}/></Stack>:
data&&<Stack><img src={data.image} alt="" style={{width:350,height:200}}/></Stack>

}

</form>
        
        </Container>
      )
}