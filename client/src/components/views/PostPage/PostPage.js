import React, { useState } from 'react';
import './PostPage.css';
import { Typography, Button, Form, message, Input, Icon} from 'antd';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import axios from 'axios';
import { useSelector } from 'react-redux'
const { TextArea } = Input;


  const categoryList = [
  { value: 0, name: "Blog" },
  { value: 1, name: "Story" },
  { value: 2, name: "Fun" },
]

function PostPage(props) {
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [category, setCategory] = useState("Blog");

  const user = useSelector(state => state.user)

  const onChangeHandler = (e) => {
    const type = e.target.name
    console.log(type)
    switch (type) {
      case 'title':
        setTitle(e.target.value);
        break;
      case 'story':
        setStory(e.target.value);
        break;
      case 'category':
        setCategory(e.target.value);
        break;
      default:
        break;
    }
  }

  const onSubmit = (e) => {
    console.log('onsubmit')
    e.preventDefault();
    let data = {
      writer: user.userData._id,
      name: user.userData.name,
      title: title,
      story: story,
      category: category
    }
    console.log(data);
    axios.post('/api/posts/upload', data).then((res) => {
      if(res.data.success){
        console.log(res.data);
        setTimeout(() => {
          props.history.push('/');
        }, 3000);
      }else{
        alert("failed to upload the post");
      }
    
    })
  }

  return (
    <div className="post-page">
      <h1 className='title'> <HiOutlinePencilAlt/>   Upload Post </h1>
      <Form onSubmit={onSubmit}>
        <div className="form-post">
          <label className='form-label'>Title</label>
          <Input className='form-input-textarea' name="title" onChange={onChangeHandler} value={title} ></Input>
        
          <label className='form-label'>Story</label>
          <TextArea style={{ height:'250px' }}className='form-input-textarea' name="story" onChange={onChangeHandler} value={story} ></TextArea>
          
          <div className='form-select'>
            <select name="category" onChange={onChangeHandler} value={category} >
              {categoryList.map((data, index) => (
                <option key={index} value={data.value}>
                  {data.name}
                </option>
              ))}
            </select>
      
          <Button className="form-btn" type="primary" size="large" onClick={onSubmit}>
          Post
          </Button>
          </div>
          </div>
          </Form>
    </div>
  )
}

export default PostPage
