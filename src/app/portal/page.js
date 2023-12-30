"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import Web3 from 'web3'
import axios from 'axios'
import 'sf-font'
import { useRouter } from 'next/navigation'
import { hhresell, hhnftcol, mainnet, cipherHH, simpleCrypto } from '../../../components/engine/configuration'
import Resell from '../../../components/engine/Resell.json'
import NFTCollection from '../../../components/engine/NFTCollection.json'
import CardNft from '../../../components/CardNft'

export default function Portal() {

  const [user, getUser] = useState(["0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"])
  const [resalePrice, updateresalePrice] = useState({ price: ''})
  const [nfts, setNfts] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')

  useEffect(() => {
    connectUser();
    getWalletNFTs()
  }, [setNfts,getUser])
  
  const router = useRouter()

  async function connectUser() {
    if (window.ethereum) {
      var web3 = new Web3(window.ethereum);
      await window.ethereum.send('eth_requestAccounts');
      var accounts = await web3.eth.getAccounts();
      var account = accounts[0];
    } 
    getUser(account)
  }
  
  async function getWalletNFTs() {
    const provider = new ethers.JsonRpcProvider(mainnet)
    const key = simpleCrypto.decrypt(cipherHH)
    const wallet = new ethers.Wallet(key, provider);
    const contract = new ethers.Contract(hhnftcol, NFTCollection, wallet);
    const itemArray = [];
    contract.totalSupply().then(result => {
      let totalSup = parseInt(result, 16)
      for (let i = 0; i < totalSup; i++) {
        var token = i + 1                         
        const owner = contract.ownerOf(token).catch(function (error) {
            console.log("tokens filtered");
          });
        const rawUri = contract.tokenURI(token).catch(function (error) {
            console.log("tokens filtered");
          });
        const Uri = Promise.resolve(rawUri)
        const getUri = Uri.then(value => {
          let str = value
          let cleanUri = str.replace('ipfs://', 'https://ipfs.io/ipfs/')
          console.log(cleanUri)
          let metadata = axios.get(cleanUri).catch(function (error) {
            console.log(error.toJSON());
          });
          return metadata;
        })
        getUri.then(value => {
          let rawImg = value.data.image
          var name = value.data.name
          var desc = value.data.description
          let image = rawImg.replace('ipfs://', 'https://ipfs.io/ipfs/')
          Promise.resolve(owner).then(value => {
            let ownerW = value;
            let meta = {
              name: name,
              img: image,
              tokenId: token,
              wallet: ownerW,
              desc,
            }
            console.log(meta)
            itemArray.push(meta)
          })
        })
      }
    })
    await new Promise(r => setTimeout(r, 3000));
    setNfts(itemArray)
    setLoadingState('loaded');
  }

  if (loadingState === 'loaded' && !nfts.length) 
    return (
      <div className='container-sm'>
        <div className='row'>
          <div className='col'>
            <h3>No NFT's Found, Connect Wallet</h3>
          </div>
        </div>
      </div>
    )

  return (
    <main>
      <div className='container-sm'>
        <div className='row'>
          <div className='col'>
            <h4>NFT's in Wallet</h4> <h5 css={{color:'#39FF14'}}> {user}</h5>
            <div className='row'>
              <button type='button' className='btn btn-sm me-2 mb-2' onClick={connectUser} >Refresh Wallet</button>
              <button type='button' className='btn btn-sm m2-3 mb-2' onClick={getWalletNFTs} >Refresh NFTs</button>
            </div>
          </div>
        </div>
        <div className='row row-col-1 row-cols-md-4 g-3'>
          {nfts.map((nft, i) => {
            var owner = user
            if (owner.indexOf(nft.wallet) !== -1) {
              async function executeRelist() {
                const { price } = resalePrice
                if (!price) return
                  try {
                    relistNFT()
                  } catch (error) {
                    console.log('Transaction Failed', error)
                  }
              }
              async function relistNFT() {
                const web3Modal = new Web3Modal()
                const connection = await web3Modal.connect()
                const provider = new ethers.providers.Web3Provider(connection)
                const signer = provider.getSigner()
                const price = ethers.utils.parseUnits(resalePrice.price, 'ether')
                const contractnft = new ethers.Contract(hhnftcol, NFTCollection, signer);
                await contractnft.setApprovalForAll(hhresell, true);
                let contract = new ethers.Contract(hhresell, Resell, signer)
                let listingFee = await contract.getListingFee()
                listingFee = listingFee.toString()
                let transaction = await contract.listSale(nft.tokenId, price, { value: listingFee })
                await transaction.wait()
                router.push('/')
              }
              
              return (
                <CardNft 
                  nft={ nft }
                  key={i}
                  onClick={executeRelist}
                  onChange={e => updateresalePrice({ ...resalePrice, price: e.target.value })}
                />
              )
            }
          })
          }
        </div>
      </div>
    </main>
  )
}
