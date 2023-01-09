import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Box, Toolbar, Typography,Paper, TextField, Stack } from "@mui/material";
import { trimDate } from "../../components/trimDate";
import apiClient from "../../api/apiClient";
import { AdminButton, PopupFeedback ,TableMui,PopupWithButton, SelectOption} from "../../components/mui";
import DateField from "../../components/mui/DateField";
import TimeField from "../../components/mui/TimeField";

export default function () {
  const [activeJobDetail, setActiveJobDetail] = useState([]);
  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeJobData, setActiveJobData] = useState(true);
  const [shift,setShift]=useState([])
  const [headers,setHeaders]=useState({
    sr: "No.",
    shiftPayPeriod: "Shift Pay Period",
    shiftDate: "Date",
    transaction: "Transaction Type",
  })
  
  const { id } = useParams();
  console.log(shift)

  const fetchJobDetail = async () => {
    setLoading(true)
    const { data } = await apiClient.get(`/jobs/${id}/employements/`);
    const afterTrimming = trimDate(data, "starting_date");
    if (!afterTrimming) {
      setOpen(true);
      setActiveJobData(false);
    }
    afterTrimming && setActiveJobDetail([afterTrimming]);
    setLoading(false)
  };


  useEffect(() => {
    fetchJobDetail();
  }, []);

  return (
  <>
       
         
<PopupShiftForm setShift={setShift} />
          <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px" }}>

             
            <Typography variant="h5" sx={{ marginBottom: "10px" }}>
              Employee Detail
            </Typography>
            <TableMui
              styleTableTh={{ fontWeight: "bold", whiteSpace: "nowrap" }}
              loading={loading}
              th={{
                sr: "No.",
                starting_date: "Date",
                candidate: "Candidate",
                email: "Email Address",
                location: "Location",
              }}
              customBtn={()=>CustomBtn(id)}
              td={activeJobDetail}
            />
          </Box>
       {shift.length>0&&   <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px" }}>

             
<Typography variant="h5" sx={{ marginBottom: "10px" }}>
  Shift
</Typography>
<TableMui
  styleTableTh={{ fontWeight: "bold", whiteSpace: "nowrap" }}
  loading={loading}
  th={headers}
  customBtn={(item,index)=>UpdateShift(shift,setShift,headers,setHeaders,item,index)}
  td={shift}
/>
</Box>}
        
        
      </>
  );
}
function CustomBtn(id){
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dateValue, setDateValue] = useState(new Date().toISOString().split('T')[0]);
  const [message, setMessage] = useState({text:"",color:""});
  let navigate = useNavigate();
  const assignClick = () => {
    if (!dateValue) return;
    const data = {
      ending_date: dateValue,
    };
    setLoading(true)
    apiClient.put(`/jobs/${id}/employements/`, data).then((resp) => {
      setLoading(false)
      resp.status === 200 && navigate("/admin/dashboard");
      setMessage({text:"Failed to create Invoice Please try again",color:"danger"})
    });
  };

  const cancelClick = () => {
   setOpen(false)
  };

  const dateChange = (e) => {
    setDateValue(e.target.value);
  };
  return (
  <>
  <AdminButton
                          name="Create Invoice"
                          style={{whiteSpace:'nowrap',backgroundColor: "#b09150",
                          "&:hover": { backgroundColor: "#c9a55a" }}}
                          btnSize="small"
                         
                          onClick={()=>setOpen(true)}
                        />
 
         <PopupWithButton
            title="Create Invoice"
            content={<><DateField value={dateValue} change={dateChange} />
              {message.text&& <div className={`bg-${message.color} p-1 m-1`}>
                  <span>{message.text}</span>
                </div>}
            </>}
            isOpen={open}
            loading={loading}
            yesName="Create"
            yesClick={assignClick}
            cancelName="Cancel"
            cancelClick={cancelClick}
          />
  </>
  );
  }


  function PopupShiftForm({setShift}){ 
    const [open, setOpen] = useState(false);
    const [transaction, setTransaction] = useState();
    const [transactionTypes, setTransactionTypes] = useState([{id:1,name:"Regular"},{id:2,name:"Overpay"}]);

    const [loading, setLoading] = useState(false);
    const [dateValue, setDateValue] = useState(new Date().toISOString().split('T')[0]);
    const [dateValue2, setDateValue2] = useState(new Date().toISOString().split('T')[0]);
    const [message, setMessage] = useState({text:"",color:""});
    let navigate = useNavigate();
    const handleSubmit = () => {
      if (!dateValue||!dateValue2||!transaction) return setMessage({text:"Please Enter Data",color:"danger"});
      
      setMessage({text:"Successful",color:"success"});
      setOpen(false)
     setShift([{shiftPayPeriod:dateValue,shiftDate:dateValue2,transaction:transaction==1?"Regular":"Overpay" }])
    
      // apiClient.put(`/jobs/${id}/employements/`, data).then((resp) => {
      //   setLoading(false)
      //   resp.status === 200 && navigate("/admin/dashboard");
      //   setMessage({text:"Failed to create Invoice Please try again",color:"danger"})
      // });
    };
  
    const cancelClick = () => {
     setOpen(false)
    };
  
    const dateChange = (e) => {
      setDateValue(e.target.value);
    };
    return (
    <>

                          
               <div className="d-flex justify-content-end px-5 my-3">

               <AdminButton           onClick={()=>setOpen(true)}
                              name="Create Shift"
                            
                            />
                            </div>
   
           <PopupWithButton
              title="Create Shift"
              content={<>
           
              
              <DateField value={dateValue} change={dateChange} />
              <DateField value={dateValue2} change={e=>setDateValue2(e.target.value)} />
              <Stack m={1}>
              <SelectOption
          name="new_jobs"
          label="Position Type"
          size="large"
          data={transactionTypes}
          value={transaction}
          fullWidth
          onChange={(e)=>setTransaction(e.target.value)}

        />
            </Stack>
                {message.text&& <div className={`bg-${message.color} p-1 m-1`}>
                    <span>{message.text}</span>
                  </div>}
              </>}
              isOpen={open}
              loading={loading}
              yesName="Create"
              yesClick={handleSubmit}
              cancelName="Cancel"
              cancelClick={cancelClick}
            />
    </>
    );
    }
    function UpdateShift(shift,setShift,headers,setHeaders,item,index){
      console.log(item);
      const [open, setOpen] = useState(false);
      const [loading, setLoading] = useState(false);
      const [dateValue, setDateValue] = useState();
      const [dateValue2, setDateValue2] = useState();
      const [timesheet, setTimesheet] = useState();
      const [checkNo, setCheckNo] = useState();
      const [invoice, setInvoice] = useState();
      const [message, setMessage] = useState({text:"",color:""});
      let navigate = useNavigate();
      const assignClick = () => {
        if(!item.punchIn){
          setHeaders({...headers,punchIn:"Punch In"})
          const nextShift = shift.map((c, i) => {
            if (i === index) {
              // Increment the clicked counter
              return {...c,punchIn:dateValue};
            } else {
              // The rest haven't changed
              return c;
            }
          });
          setShift(nextShift)
          console.log("punchin called")
          setOpen(false)
        }
        else
        {
          setHeaders({...headers,punchOut:"Punch Out",timesheet:"TimeSheet",checkNo:"Check No.",invoice:"Invoice"})
          const nextShift = shift.map((c, i) => {
            if (i === index) {
              // Increment the clicked counter
              return {...c,punchOut:dateValue2,timesheet:timesheet,checkNo:checkNo,invoice:invoice};
            } else {
              // The rest haven't changed
              return c;
            }
          });
          setShift(nextShift)
          // setShift([...shift,{...item,punchOut:dateValue2,Timesheet:timesheet,checkNo:checkNo,invoice:invoice}])
          setOpen(false)
        }
   
      };
    
      const cancelClick = () => {
       setOpen(false)
      };
    
    
      return (
      <>
      <AdminButton
                              name="Update"
                              style={{whiteSpace:'nowrap',backgroundColor: "#b09150",
                              "&:hover": { backgroundColor: "#c9a55a" }}}
                              btnSize="small"
                             
                              onClick={()=>setOpen(true)}
                            />
     
             <PopupWithButton
                title="Create Invoice"
                content={<>{!item.punchIn?<TimeField value={dateValue} change={(e)=>setDateValue(e.target.value)} />:
               <>
               <TimeField value={dateValue2} change={(e)=>setDateValue2(e.target.value)} />
                <Stack m={1}>
              <TextField
              required
              type="text"
              name="Transaction Type"
              value={timesheet}
              label="TimeSheet"
              id="outlined-name"
              onChange={(e)=>setTimesheet(e.target.value)}
              // onFocus={resetErrors}
              fullWidth
            />
              <TextField
              required
              type="text"
              name="Transaction Type"
              value={checkNo}
              label="Check No."
              id="outlined-name"
              onChange={(e)=>setCheckNo(e.target.value)}
              // onFocus={resetErrors}
              fullWidth
            />
              <TextField
              required
              type="text"
              name="Transaction Type"
              value={invoice}
              label="Invoice"
              id="outlined-name"
              onChange={(e)=>setInvoice(e.target.value)}
              // onFocus={resetErrors}
              fullWidth
            />
         </Stack>
         </>}
                  {message.text&& <div className={`bg-${message.color} p-1 m-1`}>
                      <span>{message.text}</span>
                    </div>}
                </>}
                isOpen={open}
                loading={loading}
                yesName="Create"
                yesClick={assignClick}
                cancelName="Cancel"
                cancelClick={cancelClick}
              />
      </>
      );
      }