import Chip from "@mui/material/Chip"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import React from "react"

const Container = function (props: any) {
  return (
    <Grid container {...props} />
  )
}

const Item = function (props: any) {
  return (
    <Grid item {...props} />
  )
}

interface Props {
  children?: React.ReactNode;
}

export const MuiGrid: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className="mt-10">
      <Grid container spacing={4} className="flex justify-center items-center p-10">
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} className='p-4 flex justify-items items-center'>
            <Container spacing={3} justifyContent='center'>
              <Item item>
                <Chip label='xs=12' variant='outlined' />
              </Item>
              <Item item>
                <Chip label='sm-6' />
              </Item>
              <Item item>
                <Chip label='md-3' />
              </Item>
            </Container>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper className='p-4 flex justify-items items-center'>
            <Grid container spacing={3} justifyContent='center'>
              <Grid item>
                <Chip label='xs=12' variant='outlined' />
              </Grid>
              <Grid item>
                <Chip label='sm-6' />
              </Grid>
              <Grid item>
                <Chip label='md-3' />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper className='p-4 flex justify-items items-center'>
            <Grid container spacing={3} justifyContent='center'>
              <Grid item>
                <Chip label='xs=12' variant='outlined' />
              </Grid>
              <Grid item>
                <Chip label='sm-6' />
              </Grid>
              <Grid item>
                <Chip label='md-3' />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper className='p-4 flex justify-items items-center'>
            <Grid container spacing={3} justifyContent='center'>
              <Grid item>
                <Chip label='xs=12' variant='outlined' />
              </Grid>
              <Grid item>
                <Chip label='sm-6' />
              </Grid>
              <Grid item>
                <Chip label='md-3' />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper className='p-4 flex justify-items items-center'>
            <Grid container spacing={3} justifyContent='center'>
              <Grid item>
                <Chip label='xs=12' variant='outlined' />
              </Grid>
              <Grid item>
                <Chip label='sm-6' />
              </Grid>
              <Grid item>
                <Chip label='md-3' />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper className='p-4 flex justify-items items-center'>
            <Grid container spacing={3} justifyContent='center'>
              <Grid item>
                <Chip label='xs=12' variant='outlined' />
              </Grid>
              <Grid item>
                <Chip label='sm-6' />
              </Grid>
              <Grid item>
                <Chip label='md-3' />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      {children}
    </div>
  )
}