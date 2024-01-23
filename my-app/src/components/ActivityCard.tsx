import { Card, CardContent, Typography } from "@mui/material";

export interface CardInfo {
    name: string,
    imageURL: string
}

export interface CardProps {
    cardInfo: CardInfo
}

export function ActivityCard(props: CardProps) {
    const { cardInfo } = props;

    return(
        <Card variant="outlined" sx={{maxWidth: 345}}>
            <CardContent>
                <Typography variant="h5">
                    {cardInfo.name}
                </Typography>
            </CardContent>
        </Card>
    )
}