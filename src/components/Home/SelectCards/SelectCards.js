import { Box, Button, Container, Grid, makeStyles } from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
const useStyles = makeStyles((theme)=>({
    flex:{
        justifyContent:'flex-start',
        marginTop:20
    }
}))
const SelectCards = () => {
    const [option,setOption] = useState('ongoing');
    const [data,setData] = useState([]);
    const handleClick = value => {
        setOption(value);
    }

    useEffect(()=>{

        fetch("./fake.json")
        .then(res=>res.json())
        .then(data=>setData(data))

    },[])

    const newData = data.filter(d=>d.status===option);
    const classes = useStyles();
    return (
        
        <Container>
            <Grid container className={classes.flex}>
                <Grid item md={2}>
                <Button onClick={()=>handleClick('ongoing')}>Ongoing</Button>
                </Grid>
                <Grid item md={2}>
                <Button onClick={()=>handleClick('pending')}>Pending</Button>
                </Grid>
                <Grid item md={2}>
                <Button onClick={()=>handleClick('declined')}>Declined</Button>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Cards data={newData}></Cards>  
            </Grid>
        </Container>
    );
};

export default SelectCards;