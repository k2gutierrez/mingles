'use client'
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import logo from '../public/assets/Logo/Mingles_Logo_Color_Mesa_de_trabajo_1.png'
import styles from '../styles/Contenido1Landing.module.css'
import Link from 'next/link';
import cls from 'classnames'
import localFont from 'next/font/local'
import { send } from './engine/sendPdf';
import { useState } from 'react';
import { arrayUnion, updateDoc, doc } from 'firebase/firestore';
import { db } from './engine/configuration';
import manifesto from '../public/assets/buttons/Manifesto_Download_buttonUp.png'
import joinMingles from '../public/assets/buttons/JOIN_MINGLES_buttonUP.png'


let fontQuirky = localFont({ 
  src: '../public/fonts/quirky/QuirkySunflower.otf'
} )

let fontAgrandir = localFont({
  src: '../public/fonts/agrandir/Agrandir-Regular.otf'
})

function ModalEmail() {


  const [show, setShow] = useState(false)
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [message2, setMessage2] = useState("")
  
  const handleShow = () => setShow(true)
  
  const handleHide = () => setShow(false)

  const handleAll = () => {
    setShow(false)
    setMessage('')
    setMessage2('')
   
  }

  const registerEmail = async () => {
    const ref = doc(db, 'Mingles', 'emails')
    if (email != '') {

      const em = await send(email)

      await updateDoc(ref, {
            emails: arrayUnion(email)
        })
        setMessage('We will send you the Mingles Manifesto to your email, thank you!')
        setMessage2('Check your spam in case the email was sent there!')
    } else {
      setMessage('No Email has been submitted, try again please')
      setMessage2('')
    }

    setEmail("")
    setTimeout(handleAll, 3000)
    
    
  }

  return (
    <>

      <div >
        <button type='button' onClick={handleShow} className="btn btn-transparent" >
          <Image src={manifesto}  className={cls(styles.myButton2, 'img-fluid')} width={150} height={50} alt='Download Manifesto' />
        </button>
        <Link href='https://t.me/+GSt8l8YvobYxMmFh'>
          <Image src={joinMingles}  className={cls(styles.myButton1, 'img-fluid')} width={150} height={50} alt='Join-Mingles' />
        </Link>
      </div>

      <Modal className={styles.modal} show={show} onHide={handleHide}>
        <Modal.Header>
        </Modal.Header>
        <Modal.Body>
            <div className='text-center'>
            <Image className='img-fluid' src={logo} alt='logo' width={300} height={50} />
            </div>
            
        </Modal.Body>
        <Modal.Footer className='text-center justify-content-center'>
            <div className='row gap-5'>
              <form  >
                <p>Please enter your email to receive Manifesto</p>
                <input type='email' name='email' id='email' placeholder='mingle@together.com' onChange={(e) => setEmail(e.target.value) } />

                <Button type='button' onClick={registerEmail}  className={'ms-3'} variant="info">
                    Register
                </Button>
                <p className=''>{ message }</p>
                <p className=''>{ message2 }</p>
              </form>
            </div>
            
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEmail;
