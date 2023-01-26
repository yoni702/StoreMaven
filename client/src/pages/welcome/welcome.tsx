import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Users } from "../../apis";
import { welcomeContent } from "./welcome.content";


export function Welcome() {

    const navigate = useNavigate();

    const nameInputRef = useRef<HTMLInputElement>(null);

    const [isError, setIsError] = useState(false);

    const onNameInputChange = () => setIsError(false);

    const onClickStartButton = () => {
        const nameInputValue = nameInputRef.current?.value; 
        if(!nameInputValue || !nameInputValue?.length) {
            setIsError(true);
            return toast(welcomeContent.nameErrorMessage, { type: "error" });
        }

        Users.createUser({ name: nameInputValue })
        .then((res) => {
            const { id } = res.data;
            navigate(`/tap-game/${id}`);
        })
        .catch(console.error)
    }

    return (
        <Grid
        container
        height={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
        gap={"50px"}>
            <Typography
            fontSize={38}
            variant="h1">{welcomeContent.title}</Typography>
            <Box
            width={"350px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}>
                <TextField 
                fullWidth
                onChange={onNameInputChange}
                error={isError}
                inputRef={nameInputRef}
                placeholder={welcomeContent.usernameInputPlaceholder}
                sx={{ height: "50px", "& MuiInputBase-root": { height: "100%" } }}/>
                <Button
                onClick={onClickStartButton}
                variant="contained"
                sx={{ height: "50px" }}>
                    {welcomeContent.startButtonText}
                </Button>
            </Box>
        </Grid>
    )
}
