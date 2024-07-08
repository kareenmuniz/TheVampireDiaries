import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PaginaBase from './pages/PaginaBase'
import Page404 from './pages/Page404'
import Personagem from './pages/Personagem'
import Personagens from './pages/Personagens'
import Serie from './pages/Serie'


function AppRoutes() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PaginaBase />}>
                        <Route index element={<Home />}></Route>
                        <Route path="/personagens" element={<Personagens />}></Route>
                        <Route path="/personagens/:nome" element={<Personagem />}></Route>
                        <Route path="/serie" element={<Serie />}></Route>
                        <Route path="*" element={<Page404 />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes