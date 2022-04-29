import {
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
    useMediaQuery,
} from "@mui/material";
import { useCallback } from "react";
import { validatePhoneNumber } from "../../utils/validatePhoneNumber";
import { useForm, Controller } from "react-hook-form";
import { getFieldState } from "../../utils/getFieldState";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useTheme } from "@mui/material/styles";
import { useTypedDispatch } from "../../hooks/useTypedDispatch";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { setModal } from "../../store/action/shopActionCreators";
export type OrderDataType = {
    name: string
    phone: string
    email: string
    comment: string
    city: number | undefined
}
export function OrderFormModal() {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
    const dispatch = useTypedDispatch();

    const open = useTypedSelector((state) => state.shop.basket.modalOpen);
    const { handleSubmit, control, reset } = useForm<OrderDataType>({
        mode: "onChange",
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            comment: "",
            city: undefined,
        },
    });
    const handleClose = useCallback(() => {
        dispatch(setModal(false))
        reset();
    }, [dispatch, reset]);

    const onSubmit = useCallback(
        () => {
            alert("Submit");
            handleClose();
        },
        [handleClose]
    );
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            fullScreen={fullScreen}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <DialogTitle>Оформление заявки</DialogTitle>
            <DialogContent>
                <div style={{ marginTop: "10px" }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl fullWidth sx={{ mb: 2 }}>
                            <Controller
                                name="name"
                                control={control}
                                rules={{
                                    required: "Name is required field",
                                    minLength: {
                                        value: 3,
                                        message: "Min length is 3",
                                    },
                                }}
                                render={({ field, formState, fieldState }) => (
                                    <TextField
                                        label="Name"
                                        variant="outlined"
                                        {...field}
                                        {...getFieldState( formState, fieldState )}
                                    />
                                )}
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ mb: 2 }}>
                            <Controller
                                name="email"
                                control={control}
                                rules={{
                                    pattern: {
                                        value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                        message: "Enter valid email",
                                    },
                                }}
                                render={({ field, formState, fieldState }) => (
                                    <TextField
                                        label="Email"
                                        variant="outlined"
                                        {...field}
                                        {...getFieldState( formState, fieldState )}
                                    />
                                )}
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ mb: 2 }}>
                            <Controller
                                name="phone"
                                control={control}
                                rules={{
                                    required: "Phone is required field",
                                    validate: (value) => {
                                        if (validatePhoneNumber(value)) {
                                            return true;
                                        } else {
                                            return "Enter valid phone number";
                                        }
                                    },
                                }}
                                render={({ field, fieldState, formState }) => (
                                    <TextField
                                        label="Phone"
                                        variant="outlined"
                                        {...getFieldState(formState, fieldState )}
                                        {...field}
                                    />
                                )}
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ mb: 2 }}>
                            <Controller
                                name="comment"
                                control={control}
                                rules={{
                                    minLength: {
                                        value: 10,
                                        message: "Min length is 10",
                                    },
                                }}
                                render={({ field, fieldState, formState }) => (
                                    <TextField
                                        aria-label="minimum height"
                                        multiline
                                        minRows={4}
                                        label="Comment"
                                        {...getFieldState( formState,fieldState  )}
                                        {...field}
                                    />
                                )}
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ mb: 2 }}>
                            <Controller
                                name="city"
                                control={control}
                                render={({ field }) => (
                                    <>
                                        <InputLabel id="demo-simple-select-label">City</InputLabel>

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="City"
                                            placeholder="Select a city"
                                            {...field}
                                        >
                                            <MenuItem value={10}>Almaty</MenuItem>
                                            <MenuItem value={20}>Astana</MenuItem>
                                            <MenuItem value={30}>Shymkent</MenuItem>
                                        </Select>
                                    </>
                                )}
                            />
                        </FormControl>
                    </form>
                </div>
            </DialogContent>
            <DialogActions sx={{ padding: "16px" }}>
                <Button variant="text" onClick={handleClose} sx={{ mr: 2 }}>
                    Отменить
                </Button>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Button variant="contained" type="submit">
                        Отправить
                    </Button>
                </form>
            </DialogActions>
        </Dialog>
    );
}
