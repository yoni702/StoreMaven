import { Box, Grid } from "@mui/material";

export interface IndicatorProps {
    indicatorColor: string
    showIndicator: boolean;
    containerWidth?: string;
}

export function Indicator(props: IndicatorProps) {

    const { showIndicator, indicatorColor, containerWidth="50%" } = props

    return (
        <Grid
        container
        width={containerWidth}
        justifyContent={"center"}
        alignItems={"center"}
        >
            {showIndicator &&
            <Box 
            width={100}
            height={100}
            borderRadius={"50%"}
            bgcolor={indicatorColor}/>}
        </Grid>
    )
}