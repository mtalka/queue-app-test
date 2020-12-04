import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    placeDesc: {
        marginTop: 30,
        fontSize: 14,
        fontWeight: 400,
        color: "grey",
    },
    currentPlace: {
        fontSize: 100,
        fontWeight: 600,
    },
    estimatedDesc: {
        fontSize: 14,
        fontWeight: 400,
        color: "grey",
    },
    estimate: {
        fontSize: 14,
        fontWeight: 600
    }
}),
);