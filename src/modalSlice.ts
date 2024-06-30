// src/app/modalSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface DataSourceItem {
    name: string;
    number: number;
}

interface ModalState {
    isUserLoggedIn: boolean;
    inputValue: string;
    dataSource: DataSourceItem[];
    filteredOptions: { value: any, label: any }[];
}

const initialState: ModalState = {
    isUserLoggedIn: false,
    inputValue: '',
    dataSource: [
        { name: 'John Doe', number: 3456 },
        { name: 'Jane Smith', number: 3245 },
        { name: 'Michael Johnson', number: 3567 },
        { name: 'Emily Davis', number: 9876 }
    ],
    filteredOptions: []
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setFilteredOptions: (state, action: PayloadAction<any>) => {
            
            state.filteredOptions = state.dataSource
                .filter(option => {
                        return option.name.toLowerCase().includes(action.payload.toLowerCase()) ||
                        option.number.toString().includes(action.payload);;
                })
                .map((option, index) => ({
                    value: `${option.name}\n${option.number}`,
                    label: `${option.name}\n${option.number}`
                }))
        }
        ,
        setInputValue: (state, action: PayloadAction<string>) => {
            state.inputValue = action.payload
        },
    },
});

export const { setInputValue, setFilteredOptions } = modalSlice.actions;
export default modalSlice.reducer;
