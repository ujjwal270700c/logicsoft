import React,{useState,useEffect} from 'react'
import {Card,Col,Button,Form,Row,Table,Spinner} from 'react-bootstrap'
import {useFormik} from 'formik'
import axios from 'axios'
const Home = () => {
    const [isLoading,setIsLoading]=useState(false)
    const [bookData,setBookData]=useState({})
    const [initialValues]=useState({
        ISBN:""
    })
    const formik=useFormik({
        initialValues,
        enableReinitialize:true,
        onSubmit: async (values,{resetForm})=>{
            try {
                let res={}
                setIsLoading(true)
                res = await axios.get(
                   `/book/search?ISBN=${values.ISBN}`
                 );
                 console.log(res);
                const bookId=res.data.ID
                 
                const {data}= await axios.get(`/book/info/${bookId}`)
                console.log(data.data);
                setBookData(data.data)
              setIsLoading(false)
            } catch (error) {
                
            }
        }
    })
    useEffect(() => {
        if(formik.values.ISBN ==="" ){
            setIsLoading(true)
        }else{
          setIsLoading(false)
        }
     }, [formik])
  const  getDetails=async(event,book)=>{
      event.preventDefault();
      try {
         const res= axios.get(`/info/${book._id}`)

      } catch (error) {
          
      }

  }
    return (
        <Card>
            <Card.Header>
        <Card.Title style={{textAlign:"center"}}>Book Search</Card.Title>
      </Card.Header>
      <Card> <Form onSubmit={formik.handleSubmit}>
            <Row>
             
              <Col>
                <Form.Group
                  style={{ display: "flex" }}
                  className="mb-3 mt-3"
                  controlId="search"
                >
                  <Form.Label style={{ marginTop: ".5rem" }}>
                    ISBN:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    style={{ float: "left", marginLeft: ".5rem" }}
                    placeholder="enter search value"
                    {...formik.getFieldProps("ISBN")}
                  />
                </Form.Group>
              </Col>
              <Col>
              {isLoading  ?  <Button
                  style={{ marginTop: "17px" }}
                  variant="primary"
                  type="submit"
                  disabled
                >
                  Search
                </Button>: <Button
                  style={{ marginTop: "17px" }}
                  variant="primary"
                  type="submit"
                >
                 Search
                </Button>}
              </Col>
            </Row>
          </Form></Card>
       <Card className="mt-3">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ISBN</th>
                <th>Name</th>
                <th>Author</th>
                <th>Publisher</th>
                {/* <th>Details</th> */}
              </tr>
            </thead>
          
                        <tbody key={bookData?._id}>
                        <tr  className="table-default">
                          <td>{bookData?.ISBN}</td>
                          <td>
                            <span className="align-middle font-weight-bold">
                              {bookData?.Name}
                            </span>
                          </td>
                          <td>
                            <span className="align-middle font-weight-bold">
                              {bookData?.Author}
                            </span>
                          </td>
                          <td>
                            <span className="align-middle font-weight-bold">
                              {bookData?.Publisher}
                            </span>
                          </td>
                          {/* <td>
                            <span style={{cursor:"pointer"}} onClick={(e) => getDetails(e,item)} className="align-middle font-weight-bold">
                              Details
                            </span>
                          </td> */}
                       
                       
                        </tr>
                        </tbody>
                  
          
          </Table>
        </Card>
        </Card>
    )
}

export default Home
