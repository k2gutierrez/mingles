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
import { useState, useEffect } from 'react';
import { arrayUnion, updateDoc, doc } from 'firebase/firestore';
import { db } from './engine/configuration';
import manifesto from '../public/assets/buttons/Manifesto_Download_buttonUp.png'
import joinMingles from '../public/assets/buttons/JOIN_MINGLES_buttonUP.png'


const fontQuirky = localFont({ 
  src: '../public/fonts/quirky/QuirkySunflower.otf'
} )

const fontAgrandir = localFont({
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



  const registerEmail = async (e) => {
    
    const emailValue = e.get("email")
    setEmail(emailValue)
    
    const ref = doc(db, 'Mingles', 'emails')
    if (emailValue != '') {

      await updateDoc(ref, {
            emails: arrayUnion(emailValue)
        })
        setMessage('We will send you the Mingles Manifesto to your email, thank you!')
        setMessage2('Check your spam in case the email was sent there please!')

        downloadPDF()
        
    } else {
      setMessage('No Email has been submitted, try again please')
      setMessage2('')
    }

    //setEmail("")
    setTimeout(handleAll, 3000)
    
  }

  const downloadPDF = async () => {
    const pdfUrl = "/MinglesManifesto.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "MinglesManifesto.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
        document.body.removeChild(link);
  }

  {/*useEffect(() => {

    if (email != '') {
      const em = send(email)
      console.log('send function:', em)
    }

  }, [email])*/}

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
              <form autoComplete="off" id='form1' action={registerEmail} >
                <p>Please enter your email to receive Manifesto</p>
                <input type='email' autoComplete="off" name='email' id='email' placeholder='mingle@together.com'  /> {/*onChange={(e) => setEmail(e.target.value) }*/}

                <Button type='submit' className={'ms-3'} variant="info">
                  Download Manifesto
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
