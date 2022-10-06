
import { useState } from 'react'
import { Modal } from '../../components/ui.exports'


const Home: React.FC = () => {
  const [show, setShow] = useState(false)
  return (
    <div>
      <h1>Home</h1>
      <Modal open={show} closeModal={() => setShow(false)}>
        <h2>OPENED MODAL</h2>
      </Modal>
      <button onClick={() => setShow(!show)}>{show ? 'Close' : 'Open'}</button>
    </div>
  )
}

export default Home