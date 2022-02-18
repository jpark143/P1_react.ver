import { BrowserRouter, Route, Routes } from "react-router-dom"
import EmployeePage from "../pages/EmployeePage"
import MainPage from "../pages/MainPage"
import AdminPage from '../pages/AdminPage/index';
import AddTicket from "../components/AddTicket";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/employee" element={<EmployeePage/>} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/addTicket" element={<AddTicket />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;