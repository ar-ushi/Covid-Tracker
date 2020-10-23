import React from 'react';
import { Grid } from '@material-ui/core';
import CardComponent from './CardComp/CardComponent';
import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return "Please Wait";
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                    <CardComponent
                        className={styles.infected}
                        cardTitle="Infected"
                        value={confirmed.value}
                        lastUpdate={lastUpdate}
                        cardSubtitle="Active Cases due to COVID-19 "
                    />
                    <CardComponent
                        className={styles.recovered}
                        cardTitle="Recovered"
                        value={recovered.value}
                        lastUpdate={lastUpdate}
                        cardSubtitle="Recovered Cases "
                    />
                    <CardComponent
                        className={styles.deaths}
                        cardTitle="Deaths"
                        value={deaths.value}
                        lastUpdate={lastUpdate}
                        cardSubtitle="Deaths due to COVID-19 "
                    />
                </Grid>
        </div>
    );
};

export default Info;