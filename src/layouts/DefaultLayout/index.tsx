import { AccessSections } from '../../components/AccessSections'
import { Outlet, useNavigate } from 'react-router-dom'
import { LayoutContainer, Logo, Navbar } from '../DefaultLayout/styles'
import { useState } from 'react';

export function DefaultLayout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }
    , { passive: true });

  return (
    <LayoutContainer>
      <div className="cover" />
      <Navbar isScrolled={isScrolled}>
        <nav >
          <Logo onClick={() => navigate('/')}>
            DB<span>Fy</span>
          </Logo>
          <div>
            <AccessSections />
          </div>
        </nav>
      </Navbar>
      <main>
        <Outlet />
      </main>
    </LayoutContainer>
  )
}
