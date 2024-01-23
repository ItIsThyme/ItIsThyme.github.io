import { useParams } from "react-router"
import { ActivityCard, CardInfo } from "../components/ActivityCard";
import { Paper } from "@mui/material";

const games: CardInfo[] = [
    {
        name: 'pong',
        imageURL: '/assets/pong.png'
    }
]

export default function Games() {
    const { game } = useParams();


    return (
        <Paper sx={{display: 'flex', flexGrow: 1}}>
            {games.map(x => {
                return <ActivityCard cardInfo={x} />
            })}
        </Paper>
    )
}