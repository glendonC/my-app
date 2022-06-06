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

    return (
        <>
        <div className="App">
            <h1>Shopping Cart</h1>
        </div>
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="product" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAADJCAMAAADSHrQyAAAAe1BMVEXMAAD////RMjLPGRnIAADTQEDNBgbNDQ3TOjrRLS3QICDVTU3UR0fOExPQJyfvwMDstrbyzs7++fnmm5vbbW323d3aZmb88fHZYGDjj4/vw8Pnn5/opKTpq6vqsLD67Oz01tbWU1Pcc3Pffn755eXjk5PYWlreenrhh4ddtGzjAAAEyklEQVR4nO3d6VrqMBAG4BTDQUABWUTcUVzu/wpPy9a0TdJMmpKkft9/n8zrUqCdGVlCzoKRMqWfkGVJO4Ut6Ecw8lcsOK0o/kavKkk2xFMYp+PJ9idqUWxCLipJZuRTGH+iHkK1P9OLYktqUcmdxSmMPxNPIdpfrIp6IRa1szmFfg7N/mpZ1B3plDerQ7JzXknnkOwWf4XHUK5363+2pzA+a8tuT2eDufEp8yvrU4h4gn1qT2esdxF6iie8nTC3PzahM9Y3O2U9aHRKin90b7d62REzNjll1/AQRrmwmtob041+8g5OIeAN7U6KGtZd8GzeOEliijezv7spiq20pywdncL4uzu7K7r2JWjV7AJfPMcIb2JfOSzqXvV7T/7gpo/+N8zY7uDaK0b6vnPa9KWtkp0Lu2M648PK249pz+0PfZ96fK3dNT0NHyyEX8n3DWtBzgzwdXbrz1T6cPbw9TKbPW++W4JnqfsAVWNviX6h1OD19rXv6htmbW+PnV6D19nnt75Lb5xb3dtojb3hJ+kwcqXBq+3zke+6nWSkxivt84nvqh1losQr7UPfNTvLkGrv+a7YYVT3ChX2a9/1Os01xd73Xa3jyG+XSe03vmt1nhtT+9h3pS1EdpdYYt/6rrOVbE3s376rbCnf9fYH3zW2loc6+317txJ8h9/r7c5ukYcYvtTZP7pMT/EfavtPt+kp/kdl/+w6PcV/yu2/3aen+F+Z/U/QC/iz3fHzsHDDN2X711+hp/ivop3aJBt1Tq23Bzu9STbqHFtv93ZHvR7x5NB6m9mtmmTjzr71llk3ycadrPWWNekUjTl8lrCG7ZLxhj/6rgBBEARBEARBEARBEIN0sbnGLGPWqS5CSiYJ607jLC2DeXaftiMN08SsD/fnG89dR5jd6blM/LMhxPBV/jwu7nEoco6D0sfnsC1MAIab016I0/P3P4Q/b4I5912szJ/PBHlpNJ7pync/5f02pkPu/C7IcZK+4cO1vOVE7LMy2+uQ/rEEOTvWM3uoKnbYif11Jt+57DoRqN0IL7aVFvoq67f37C+RodoN8NtEZa/94sOrQ7D22vqLczOlPmp9+8nxhTFcew2+NCxW7p/XtR2d3hMEbNfiy7OxlbkJdafdeU1WyHYdvjwQXp2XUXVY5hvCgrar8ZUtCJI5KXlTsbAcLWy7As+rG29k83GyEQJxL1zgdiletulIOhdZHR0prMQL3S7BS7fayedhy9NSxW2AwdsrePkeLcUcdHFKrrQIMXx7Ca9Y3qqafxcHQ8s7ICOwF/DnhnlDuzALXVl/GYNdwIsjMmb28wx8dfNnFPYzvjQUZ2Q/PrCRLD2Nw37CV8ZgTez7dR+yfa+R2A94zXpU7V6jkXzVbSz2DK9YdVFrT+byfxoQjT15Heh49P87EJNdH9hhhx122GGHHXbYAwzssMMOO+ywww477LDDDjvssMMOO+ywhxbYYYcddthhhx122GGHHXbYYYcddthhDy2www477LDDDjvssMMOO+ywww477LDDHlpghx122GGHHXbYYYcddthhhx122GGHPbTADjvssMMOO+ywww477LDDrozxv+C9ZC5k347z3OTpC7nO0xMyzDMRMspzJeQ2z0DIPyGN7P8BXoJaPJYX9k8AAAAASUVORK5CYII=" />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      T-Shirt
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Red Shirt
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Qty. 1
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                      Remove
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">$19.00</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
        </>
      );
}

export default Cart;