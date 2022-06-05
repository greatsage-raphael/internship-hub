import {useState, useEffect} from "react"
import axios from "axios"
import './App.css';
import Navbar from './components/Navbar';


const fetchInternships = () => {
return axios.get("https://internships-web-scraper.herokuapp.com/results")
.then(({data}) => {
  //handle success
  console.log(data);
  return data;
})
.catch(err => {
  console.log(err);
});
}

// const getInternshipName = (internshipInfo) => {

//   const {title, company, location, link, logo } = internshipInfo

// }

function App() {
  const [internshipData, setInternshipData] = useState("")
  // const [internshipInfos, setInternshipInfo] = useState([])


  useEffect(()=>{
  fetchInternships().then(returnedData => {
    setInternshipData(JSON.stringify(returnedData, null, 2))
    // setInternshipInfo(returnedData.results)
  })
  }, [])

  return (
    
    <>
    <Navbar/>

    {/* {
     internshipInfos.map((internshipInfo, idx) =>{
       <pre>
         {getInternshipName(internshipInfo)}
       </pre>
     })
    } */}
      <pre>
        {internshipData}
      </pre>


    </>
  );
}

export default App;
