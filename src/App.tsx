import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Characters from '@/pages/characters/Characters';
import Episodes from '@/pages/episodes/Episodes';
import Locations from '@/pages/locations/Locations';

import Header from '@/components/common/Header/Header';
import { PageContainer } from './App.styled';

export const ROUTES = {
  CHARACTERS: '/',
  EPISODES: '/episodes',
  LOCATIONS: '/locations',
};

function App() {
  return (
    <BrowserRouter>
      <Header />

      <PageContainer>
        <Routes>
          <Route path={ROUTES.CHARACTERS} element={<Characters />} />
          <Route path={ROUTES.EPISODES} element={<Episodes />} />
          <Route path={ROUTES.LOCATIONS} element={<Locations />} />
        </Routes>
      </PageContainer>
    </BrowserRouter>
  );
}

export default App;
