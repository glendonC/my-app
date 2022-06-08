import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));

const Cart = () => {
    const classes = useStyles();
    let products = [
      { name: "T-shirt", description: "Red T-shirt", qty: 1, price: 5.00, image: "https://d1l2kcmc130e06.cloudfront.net/3/images/colors_240x300/hanes-5480-athletic-red.jpg"},
      { name: "Sweatshirt", description: "Grey Sweatshirt", qty: 1, price: 15.00, image: "https://media.gq-magazine.co.uk/photos/62336ab170cf0dcb7613f90a/master/w_1980,h_1280,c_limit/1603032022_J_01.jpeg"},
      { name: "Pants", description: "Ripped Jeans", qty: 1, price: 45.00, image: "https://data.mascheronistore.com/imgprodotto/bella-boyfriend-ripped-jeans-woman-light-denim_71312_zoom.jpg"}
    ]
    //Finish Remove Function
    // const remove = () => {

    // }

    return (
        <>
        <div className="App">
            <h1>Shopping Cart</h1>
        </div>
        {products.length > 0 && products.map((val, key) => {
          return (
            <div className={classes.root}>
              <Paper className={classes.paper}>
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <img className={classes.img} alt="product" src={val.image} />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                          {val.name}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          {val.description}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Qty. {val.qty}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" style={{ cursor: 'pointer' }}>
                          {/* Finish Functionality of Remove Button */}
                          {/* <button onClick={() => remove()}>Remove</button> */}
                          Remove
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">${val.price}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          )
        })}
        </>
      );
}

export default Cart;