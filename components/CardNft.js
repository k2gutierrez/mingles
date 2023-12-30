import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';

function CardNft({ nft, key, onChange, onClick }) {
  return (
    <a>
        <Card style={{ width: '18rem' }}>
        <Image src={nft.img} alt={nft.name} width={286} height={'286'} />
        {/*<Card.Img variant="top" src={nft.img} />*/}
        <Card.Body key={ key }>
            <h3 style={{color:'#9D00FF',fontFamily:'SF Pro Display'}}>Owned by You</h3>
            <h5 >{nft.name} Token-{nft.tokenId}</h5>
            <p>{nft.desc}</p>
            <input type="text" className="form-control" onChange={ onChange } style={{color:'black', fontFamily:'SF Pro Display', fontWeight:'bolder', fontSize:'15px'}} id="relistPrice" placeholder="Set your price" />
            <Button variant="primary" onClick={ onClick } style={{ fontSize: '20px' }}  >Relist for Sale</Button>
        </Card.Body>
        </Card>         
    </a>
  )
}

export default CardNft