import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../asset/Get in touch-bro.png'
import { Grid } from "@mui/material";

function ContactUs() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [quieres, setQuieres] = useState("");
    const [success, setSuccess] = useState(false);
    const [warning, setWarning] = useState(false);
    const [error, setError] = useState(false);

    const handleReset = () => {
        setName("")
        setEmail("")
        setPhoneNo("")
        setQuieres("")
    }
    const handleSend = async () => {
        if (name && email && phoneNo && quieres !== "") {

            var requestOptions = {
                method: 'POST',
                redirect: 'follow'
            };

            let data = await fetch(`https://api.telegram.org/bot6289358738:AAFIKVovx_NnHLQeR8DVQBWqC4tlaYqThRA/sendMessage?chat_id=@Api_testingg&text=id:1563718 
            msg:
            Name:${name}
            EMAIL:${email}
            PHONE_NO:${phoneNo}
            Quieres:${quieres}
            `, requestOptions)
            if (data.status === 200) {
                console.log("msg send succesfuly");
                setSuccess(true)
            } else {
                console.log("plese try after some time (server problem )");
                setError(true)
            }
        } else {
            setWarning(true)
        }


    }
    const handleClose = () => {
        setSuccess(false);
        setError(false)
    };
    // handleSend
    return (
        <div id="contact">
            <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    !Message send to developer!
                    we will contact you shortly

                </Alert>
            </Snackbar>
            <Snackbar open={error} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                    please try after some time(!server error!)
                </Alert>
            </Snackbar>
            <Snackbar open={warning} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                    field is empty
                </Alert>
            </Snackbar>

            <div id="get_in_touch">
                <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <Grid item md={3} container
                        direction="column"
                        justifyContent="center"
                        alignItems="center">

                        <div id="form">

                            <Grid >
                                <h1>GET IN TOUCH </h1>
                            </Grid>
                            <Grid className="form-item">

                                <input className="field" placeholder="NAME" value={name} onChange={(e) => setName(e.target.value)} />
                            </Grid>
                            <Grid className="form-item">

                                <input className="field" placeholder="EMAIL" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Grid>
                            <Grid className="form-item">

                                <input className="field" placeholder="PHONE NO" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
                            </Grid>
                            <Grid className="form-item">

                                <input className="field" type="text" style={{ height: "100px" }} placeholder="ASK ME YOUR QUIERES" value={quieres} onChange={(e) => setQuieres(e.target.value)} />
                            </Grid>
                            <Grid className="form-item">

                                <button className="butn" onClick={handleReset} >Reset</button>
                            </Grid>
                            <Grid className="form-item">

                                <button className="butn" onClick={handleSend} > Send</button>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item md={8} sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <img className="img" src={logo}></img>
                    </Grid>
                </Grid>













            </div>
        </div>

    )
}

export default ContactUs