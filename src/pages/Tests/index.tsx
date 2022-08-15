import { HomeContainer, MainPanel, MainPanelDescription } from './styles'
import { Banner } from '../../components/Banner'
import { motion } from 'framer-motion'
import { Code, FastForward } from 'phosphor-react'
export function Tests() {





  return (
    <HomeContainer>
      <MainPanel>
        <div>
          Explore your personality
          <br />
          and <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >expand</motion.span>
          <br />
          your music <span id="taste">taste.</span>
        </div>
        <MainPanelDescription>
          discover collaborating with your tastes the best songs for you!
          <div>
            <button>
              <Code size={24} />
              Behind the scenes
            </button>
            <button>
              Check out some tests
              <FastForward size={24} />
            </button>
          </div>
        </MainPanelDescription>
      </MainPanel>
      <Banner />
    </HomeContainer>
  )
}
