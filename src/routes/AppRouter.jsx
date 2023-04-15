import { Route, Routes } from 'react-router-dom';
import { CreatePostPage, HomePage } from '../pages';
import { Navbar } from '../components';


export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/post" element={<CreatePostPage />} />
                <Route path="/*" element={<HomePage />} />
            </Routes>
        </>
    )
}