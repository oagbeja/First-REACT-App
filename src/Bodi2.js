import React from 'react';
import DataTable from 'react-data-table-component';
import $ from 'jquery'

class Bodi2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mydata: []};
    
         
  }
  componentDidMount() {
    const fetchUserData = async () => {
      const response = await fetch("http://localhost:1234/myreact_app/dis.php");
      let  mydata  = await response.json() ;
      //alert(mydata);
      //mydata = JSON.parse(mydata);
      
      this.setState({
        mydata: mydata
      });
      
    }
    
    fetchUserData();
  }
  
  shouldComponentUpdate() {
    return true;
  }
  
  // componentDidMount() {
  //   this.setState({mydata:
      
  //   });
  // }
  render() {
    //const data1 = this.dis;
    
    //     alert(data)
    
    
    
    const columns = [
      {
        name: 'Name',
        sortable: true,
        cell: row => <div><div>{row.vname}</div><span style={{fontWeight: 'bold'}}>Age: </span> {row.age}</div>,
      },
      {
        name: 'Sex',
        selector: 'sex',
        sortable: true,
        right: true,
      },
    ];
     
      return (
      
    <div> 
      <section>
        <div className="container">
          <div className="row align-items-center"></div>
            <DataTable
                  title="My DataTable "
                  columns={columns}
                  data={this.state.mydata}
                  selectableRows
                  
                />
        </div>
        
      </section>
    </div>);
    }
  }

  
export default Bodi2;