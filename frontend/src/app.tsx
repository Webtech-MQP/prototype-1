import React from "react";
import "@mantine/core/styles.css";
import '@mantine/notifications/styles.css';
import {createTheme, MantineProvider} from "@mantine/core";
import { Notifications } from '@mantine/notifications';
import Router from "./router";
import { BrowserRouter } from "react-router-dom";
import { ModalsProvider } from "@mantine/modals";


const theme = createTheme({});

const modals = {
	
}

const App = () => {
	return (
		<MantineProvider theme={theme} defaultColorScheme="dark">
            <BrowserRouter>
                <Notifications/>
                <ModalsProvider modals={modals}>
                    <Router/>
                </ModalsProvider>
            </BrowserRouter>
		</MantineProvider>
	);
};

export default App;
