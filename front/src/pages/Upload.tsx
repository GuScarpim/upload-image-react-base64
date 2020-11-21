import React, { useState } from 'react';
import * as S from './upload';

// import { BsUpload } from 'react-icons/bs';
import Logo from '../assets/logo.png';

export default function Upload() {
  const [file, setFile] = useState<string>();
  const [imagePreview, setImagePreview] = useState<any>("");
  const [base64, setBase64] = useState<string>();
  const [imagePrint, setImagePrint] = useState<string>();
  const [active, setActive] = useState<any>();

  const onChange = (e: any) => {
    console.log("file", e.target.files[0]);
    let file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = _handleReaderLoaded
      reader.readAsBinaryString(file)
    }
  }

  const _handleReaderLoaded = (readerEvt: any) => {
    let binaryString = readerEvt.target.result;
    setBase64(btoa(binaryString))
  }

  const onFileSubmit = (e: any) => {
    e.preventDefault()
    console.log("bine", base64)
    let payload = { image: base64 }
    console.log("payload", payload)
  }

  const photoUpload = (e: any) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    console.log("reader", reader)
    console.log("file", file)
    if (reader !== undefined && file !== undefined) {
      reader.onloadend = () => {
        setFile(file)
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file);
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let activeP = active === 'edit' ? 'profile' : 'edit';
    setActive({ active: activeP })
  }

  return (
    <S.Container>
      <form onSubmit={(e) => onFileSubmit(e)} onChange={(e) => onChange(e)}>
        <S.Card logo={Logo}>
          <img src={imagePreview} alt="Icone adicionar" />
          <input type="file" name="avatar" id="file" accept=".jpef, .png, .jpg" onChange={photoUpload} src={imagePreview} />
          <button type="submit" >Salvar</button>
        </S.Card>
      </form>
    </S.Container>
  )
}
