import Game from "./Game";
import { Container, makeStyles, ThemeProvider, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getJWT, goTo } from "../utils/Utils";
import { Redirect } from "react-router";
import { fontTheme } from "../homepage/Homepage";

const useStyles = makeStyles({
    upcomingGames: {
        'fontSize': '8vw',
        paddingTop: '4vw',
        paddingBottom: '4vw',
        textAlign: 'center'
    },
    gameContainer: {
        marginBottom: '19vw'
    }
})

export interface ITeam {
    name: string,
    emoji: string
}

export interface IMatchDetails {
    match_date: string,
    kick_off_time: string,
    is_knockout: boolean,
    team_one_goals: string,
    team_two_goals: string,
    matchid: number
}

export interface IPrediction {
    team_one_pred: string,
    team_two_pred: string,
    predictionid: string
}

export interface IMatch {
    team_one: ITeam,
    team_two: ITeam,
    match: IMatchDetails,
    hasPrediction: boolean,
    prediction?: IPrediction
}

export default function Prediction() {
    const classes = useStyles()
    const [matches, setMatches] = useState<IMatch[]>([])
    const [invalidResponse, setInvalidResponse] = useState<boolean>(false)

    useEffect(() => {
        getMatches();
    }, [setMatches])

    if (invalidResponse) {
        return (
            <Redirect to={'/'} />
        )
    } else {
        return (
            <ThemeProvider theme={fontTheme}>
            <Container className={classes.gameContainer}>
                <Typography className={classes.upcomingGames}>Upcoming Games</Typography>
                {matches.map(element => {
                    if (element.hasPrediction && element.prediction) {
                        return <Game {...element} callback={getMatches} team_one_pred={element.prediction.team_one_pred} team_two_pred={element.prediction.team_two_pred} />
                    } else {
                        return <Game {...element} callback={getMatches} />
                    }
                })}
            </Container>
            </ThemeProvider>
        )
    }

    function getMatches() {
        console.log('attempting fetch')
        fetch(goTo('prediction-required'), {
            method: 'GET',
            headers: {
                'Authenticate': getJWT()
            }
        }).then(res => res.json()).then(res => {
            if (res.success) {
                setMatches(res.matches);
            } else {
                setInvalidResponse(true);
            }
        });
    }
}