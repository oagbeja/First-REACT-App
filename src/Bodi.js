import React from 'react';
import img1 from './img/01.jpg';
import img2 from './img/02.jpg';
import img3 from './img/03.jpg';
import $ from 'jquery'



class Bodi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vname: '',
      age: null,
      age_errormessage: '',
      sex_errormessage: ''
    };
  }
 
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err='';
    if (nam === "age") {
      if (val !="" && !Number(val)) {
        err = <div className="alert alert-danger " ><strong>Your age must be a number</strong></div>;
        // this.setState({age_errormessage: err});
      }else{
        err='';
      }
      this.setState({age_errormessage: err});
    }

    if (nam === "sex") {
      if (val ==="") {
        err = <div className="alert alert-danger " ><strong>You must choose your Sex</strong></div>;
        // this.setState({age_errormessage: err});
      }else{
        err='';
      }
      this.setState({sex_errormessage: err});
    }
    this.setState({[nam]: val});
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    if(this.state.sex_errormessage != '' || this.state.age_errormessage != ''){
      return alert("Unable to Submit Please check your Input Fields!");
    }
    this.subm(event);
    alert("You are submitting " + this.state.vname);
  }

  subm =(event)=>{
    document.querySelector('#mmsg').innerHTML='';
     event.preventDefault()
    var lform = document.querySelector("#myform")
    var error=''
    var x = lform.elements.length
    for(var i=0;i<x;i++){
        if(lform.elements[i].type==='tel'){
            //alert('Tel')
            if(lform.elements[i].value.trim()!=''){ //alert(lform.elements[i].value)
                var elemm = parseInt(lform.elements[i].value)
                var elemmstr =elemm.toString()
                //alert(elemmstr.length)
                
                if(elemmstr.length < 10 ){ //isNaN()
                    lform.elements[i].style.borderColor='red'
                    document.querySelector('#mmsg').innerHTML='<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>Please Fill the Empty Fields!</div>'
                    error=1
                }else{
                    lform.elements[i].style.borderColor=''
                }
                
            }else{
                lform.elements[i].style.borderColor=''
            }
        }
        if(lform.elements[i].required){
            if(lform.elements[i].value===''){
                lform.elements[i].style.borderColor='red'
                //alert(lform.elements[i].id)
                document.querySelector('#mmsg').innerHTML='<div id="als" class="alert alert-danger alert-dismissible" role="alert"><button type="button" onclick="document.querySelector('+"'#als'"+').style.display='+"'none';"+'" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>Please Fill the Empty Fields!</div>'
                error=1
            }else{
                lform.elements[i].style.borderColor=''
            }
        }
        
    }
    if(error===''){
        //document.querySelector('#loadd').innerHTML= '<div align="center" id="overlay" ><div class="loader"></div><em style="font-size: 5em; color:red">Please wait... </em></div>';
        //return
        var formData = new FormData(lform);
        // var url = "https://www.aojsoft.com.ng";
        // fetch(url, {
        //   credentials: "include",
        //   method: 'POST', // or 'PUT'
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: formData,
        // })
        // .then(response => response.json())
        // .then(data => {
        //   console.log('Success:', data);
        // })
        // .catch((error) => {
        //   console.error('Error:', error);
        // });
        $.ajax({
        url: "http://localhost:1234/myreact_app/subm.php",
        type:"POST",
        data: formData,
        success:
            function(data){
              if(data === '1'){
                document.querySelector('#mydiv').innerHTML='<div  class="alert  alert-primary alert-dismissible" role="alert"><button type="button"  class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>Record Successfully Saved!Check Second Page.</div>'
                
              }else {
                document.querySelector('#mmsg').innerHTML=data;
                
              }
             
              //document.querySelector('#loadd').innerHTML='';
              console.log('Successful ');
            },
            contentType: false, //this is requireded please see answers above
            processData: false, //this is requireded please see answers above
            
        })
        .fail(()=> {
          document.querySelector('#mmsg').innerHTML+="<br><span class='text-danger small'>Error Connecting ...<br></span>";
          console.log('Error');
          //document.querySelector('#loadd').innerHTML='';
        })
        
    }
    
       

  }

  render() {
      return (<div> <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="p-5">
                <img className="img-fluid rounded-circle" src={img1} alt="" />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-3" >
                <h2 className="display-4">For your firm feet ...</h2>
                <form  method="post" id="myform">
                  <div id="mydiv">
                    <h1>Hello, Enter your </h1>
                    <span id="mmsg"></span> 
                    <label> Name:</label>
                    <input type="text" required name="vname" onChange={this.myChangeHandler} className="form-control" />
                    <label> Age:</label>
                    <input type="text" required name="age" className="form-control" onChange={this.myChangeHandler} />{this.state.age_errormessage}
                    <label> Sex:</label>
                    <select className="form-control" name="sex" onChange={this.myChangeHandler} >
                      <option value="">Please Select</option>
                      <option value="M" >Male </option>
                      <option value="F">Female</option>
                    </select>{this.state.sex_errormessage}
                    <button className="btn btn-info btn-block mt-3" onClick={this.mySubmitHandler} style={{backgroundColor: "orange"}}>Submit</button>

                  </div>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    
   
       
      </div>);
    }
  }

  
export default Bodi;