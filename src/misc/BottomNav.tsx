import { BottomNavigation, BottomNavigationAction, makeStyles } from "@material-ui/core";
import BarChartIcon from '@material-ui/icons/BarChart';
import HistoryIcon from '@material-ui/icons/History';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { getJWT, goTo } from "../utils/Utils";

const useStyles = makeStyles({
    root: {
        width: '100vw',
        position: 'fixed',
        bottom: 0,
        left: 0
    },
});

interface IBottomNavProps {
    value: string
}

export default function BottomNav(props: IBottomNavProps) {
    const classes = useStyles()
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        fetch(goTo('is-admin'), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authenticate": getJWT()
            }
        })
            .then(res => res.json())
            .then(result => {
                setIsAdmin(result.success)
            });
    }, [setIsAdmin])

    function getAdminPage() {
        return !isAdmin ?
            <></> :
            <BottomNavigationAction label="ADMIN" value="/admin" icon={<SupervisorAccountIcon />} />
    }

    return (
        <Route render={({ history }: { history: any }) => (
            <BottomNavigation
                value={props.value}
                onChange={(ignored, newValue) => {
                    history.push(newValue)
                }}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction label="Standings" value="/standings" icon={<BarChartIcon />} />
                <BottomNavigationAction label="Predict" value="/home" icon={<SportsSoccerIcon />} />
                <BottomNavigationAction label="History" value="/history" icon={<HistoryIcon />} />
                {getAdminPage()}
            </BottomNavigation>
        )} />

    )
}