let memeAmount=6;
let memes=[];
memes=[{
      top:'WHEN YOU SHAKE HANDS AND THEIRS IS',
      bottom:'CLAMMY AND LIMP',
      first:{
            top:'-1rem',
            left:'1rem',
            color:'white'
      },
      second:{
            top:'11rem',
            left:'1rem',
            color:'white'
      }
      },
      {
      top:'She Is Rich As Elon',
      bottom:'She Is Hot As Fuck',
      first:{
            top:'0rem',
            left:'11rem',
      },
      second:{
            top:'8rem',
            left:'11rem',
      }
      },
      {
      top:'ME IN THE MORNING',
      bottom:"MY ALARM CLOCK" ,
      first:{
            top:'2.5rem',
            left:'2rem',
      },
      second:{
            top:'10rem',
            left:'2rem',
      }           
      },
      {
      top:'NO SCHOOL',
      bottom:'WE HAVE PACKETS',
      first:{
            top:'-1rem',
            left:'1rem',
      },
      second:{
            top:'7rem',
            left:'1rem',
      }
      },
      {
      top:"WHEN YOU REALIZED",
      bottom:'THAT YOUR PHONE IS MISSING',
      first:{
            top:'0rem',
            left:'2rem',
      },
      second:{
            top:'14rem',
            left:'1rem',
      }
      },
      {
      top:'SHUT UP',
      bottom:'AND TAKE THE MONEY',
      first:{
            top:'-1rem',
            left:'rem',
      },
      second:{
            top:'8rem',
            left:'3rem',
      }
      },
]
for(let i=1;i<=memeAmount;i++){
      memes[i-1].src= `${process.env.PUBLIC_URL}/images/memes/${i}.png`;
      memes[i-1].id=i;
}     

export default memes;