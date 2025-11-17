import { Heading } from './components/Heading';

import { TimerIcon } from 'lucide-react';

import './styles/theme.css';
import './styles/global.css';

export default function App() {
  return (
    <>
      <Heading>
        Olá mundo 1
        <button>
          <TimerIcon />
        </button>
      </Heading>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
        reprehenderit explicabo facilis eos dolor officiis, corrupti rerum
        excepturi impedit at, corporis quo libero? Ex rerum hic corporis
        inventore quae nemo.
      </p>
    </>
  );
}
