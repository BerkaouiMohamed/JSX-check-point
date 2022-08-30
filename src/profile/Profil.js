
  const alertMyInput = (name)=> {
    alert(name)
  };



function Profil(props){
    return(<><div style={{display:"flex",justifyContent:"center"}}>
    <div style={{margin:'5px',padding:'7px',backgroundColor:'#223e33',color:'white',boxShadow:'10px 10px 30px black', border:'1px ridge  black',borderRadius:'20px',width:'max-content' ,hight:"max-content",textAlign:'center'}}>
       <img style={{width:"70%"}}    onClick={ () => {alertMyInput(props.name)}}
 src={props.children} alt="" ></img>
<h3 > {props.name} </h3>
<h3>  {props.prof} </h3>
<h3>  {props.bio} </h3>
</div>
</div></>
    )
}
export default Profil
