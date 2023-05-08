import React, { FC, ReactElement } from 'react';

import { Grid, Card, CardMedia, CardActions, Button, CardContent, Typography }  from '@mui/material';

export const Dashboard: FC = (): ReactElement => {
    return (        
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>   
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="https://cdn.vox-cdn.com/thumbor/M8nixNwYirU7CoeuBXZTQC1V9gY=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19756165/ER41nmVX0AUBqik.jpg"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Cody Rhodes vs MJF
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        AEW Revolution 2020
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Add</Button>
                        <Button size="small">Watch</Button>
                    </CardActions>
                </Card>    
            </Grid>
        </Grid>
    )
}