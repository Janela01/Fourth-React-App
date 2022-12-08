import {Wrapper,FormKind,SecondWrapper,Img,ThirdWrapper,Input,Button,H2,SecondImg} from './styles/Main.styled'
import img from '../images/icone-d-image-jaune.png'
import memes from './data/memes.js';
import {useState} from 'react';

export default function Main(){
      
      const [meme,setMeme]=useState(memes[1])
         
      function clicked(){
            const rand=Math.floor(Math.random() * memes.length);
            setMeme(memes[rand]);
            document.getElementById('one').value='';
            document.getElementById('two').value='';
            
      }
      function topchange(e){
            const value=e.target.value;
            setMeme((old)=>{
                  return {
                        ...old,
                        top:value
                  }
            })

      }
  
      function bottomchange(e){
            const value=e.target.value
            setMeme((old)=>{
                  return {
                        ...old,
                        bottom:value
                  }
            })
      }
      return(
            <Wrapper>
                  <ThirdWrapper id='img'>
                        <Img src={meme.src}/>
                        <h3 id='top' style={{...meme.first,position:'absolute'}}> {meme.top}</h3>
                        <h3 id='bottom' style={{...meme.second,position:'absolute'}}>{meme.bottom}</h3>
                  </ThirdWrapper>
                  <FormKind>
                        <SecondWrapper>
                              <Input  id="one"placeholder='First Text' onChange={(e)=>topchange(e)} />
                              <Input  id="two"placeholder='Second Text' onChange={(e)=>bottomchange(e)} />
                        </SecondWrapper>  
                        <Button onClick={clicked}><H2>Generate A New Meme Image </H2><SecondImg src={img} /></Button>
                  </FormKind>
            </Wrapper>
      )
}

