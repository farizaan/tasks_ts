import { OrderDataType } from './../components/shop/OrderFormModal';
import { ControllerFieldState, UseFormStateReturn } from "react-hook-form";


export function getFieldState(formState: UseFormStateReturn<OrderDataType>, fieldState: ControllerFieldState) {
	return {
        
		error: formState.isSubmitted &&  !!fieldState.error,
		helperText:
			formState.isSubmitted &&
			
			fieldState.error?.message,
	};
}
