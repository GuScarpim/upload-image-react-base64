import React, { useState, Dispatch } from 'react';
import * as S from './upload';

interface stateUpload {
  file?: string;
  imagePreviewUrl?: any;
  base64TextString?: string;
  imagePrint?: string;
  active?: any;
  name?: string;
  status?: string;
}

export default function Upload() {
  // const [file, setFile] = useState({ file: "" })
  const [stateUpload, setStateUpload] =
    useState<stateUpload>({
      file: "",
      imagePreviewUrl: "",
      imagePrint: "",
      base64TextString: "",
      active: "",
      name: "",
      status: "",
    })
  const [imagePrint, setImagePrint] = useState({ imagePrint: "" })

  // const photoUpload = (e) => {
  //   e.preventDefault();
  //   const reader = new FileReader();
  //   const file = e.target.files[0];
  //   reader.onloadend = () => {
  //     this.setState({
  //       file: file,
  //       imagePreviewUrl: reader.result
  //     });
  //   }
  //   reader.readAsDataURL(file);
  // }

  // const editName = (e) => {
  //   const name = e.target.value;
  //   this.setState({
  //     name,
  //   });
  // }

  // const editStatus = (e) => {
  //   const status = e.target.value;
  //   this.setState({
  //     status,
  //   });
  // }

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
    setStateUpload({ base64TextString: btoa(binaryString) })
  }

  const onFileSubmit = (e: any) => {
    e.preventDefault()
    console.log("bine", stateUpload.base64TextString)
    let payload = { image: stateUpload.base64TextString }
    console.log("payload", payload)
  }

  const photoUpload = (e: any) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    console.log(reader)
    console.log(file)
    if (reader !== undefined && file !== undefined) {
      reader.onloadend = () => {
        setStateUpload({ file: file })
        setStateUpload({ imagePreviewUrl: reader.result })
      }
      reader.readAsDataURL(file);
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let activeP = stateUpload.active === 'edit' ? 'profile' : 'edit';
    setStateUpload({ active: activeP })
  }

  return (
    <S.Container>
      <div>
        <form onSubmit={(e) => onFileSubmit(e)} onChange={(e) => onChange(e)}>
          <div>
            <label htmlFor="photo-upload" className="custom-file-upload" style={stateUpload.imagePreviewUrl ? { cursor: "pointer" } : { cursor: "normal" }}>
              {/* {stateUpload.imagePreviewUrl ?
                <> */}
              <img src={stateUpload.imagePreviewUrl} alt="Icone adicionar" className="iconPlus" />
              <input type="file" name="avatar" id="file" accept=".jpef, .png, .jpg" onChange={photoUpload} src={stateUpload.imagePreviewUrl} />
              {/* </> : <img src={stateUpload.imagePreviewUrl} alt="Icone adicionar" className="imagePreview" />
              } */}
              <button type="submit" >Salvar</button>

              {/* {stateUpload.imagePreviewUrl &&
                <section>
                  <button>Editar
                  <input type="file" name="avatar" id="file" accept=".jpef, .png, .jpg" onChange={photoUpload} src={stateUpload.imagePreviewUrl} />
                  </button>
                  <button type="submit" >Salvar</button>
                </section>
              } */}
            </label>
          </div>
        </form>
      </div >
    </S.Container>
  )
}

// const ImgUpload = ({
//   onChange,
//   src
// }) =>
//   <label htmlFor="photo-upload" className="custom-file-upload fas">
//     <div className="img-wrap img-upload" >
//       <img for="photo-upload" src={src} />
//     </div>
//     <input id="photo-upload" type="file" onChange={onChange} />
//   </label>


// const Name = ({
//   onChange,
//   value
// }) =>
//   <div className="field">
//     <label htmlFor="name">
//       name:
//     </label>
//     <input
//       id="name"
//       type="text"
//       onChange={onChange}
//       maxlength="25"
//       value={value}
//       placeholder="Alexa"
//       required />
//   </div>


// const Status = ({
//   onChange,
//   value
// }) =>
//   <div className="field">
//     <label htmlFor="status">
//       status:
//     </label>
//     <input
//       id="status"
//       type="text"
//       onChange={onChange}
//       maxLength="35"
//       value={value}
//       placeholder="It's a nice day!"
//       required />
//   </div>


// const Profile = ({
//   onSubmit,
//   src,
//   name,
//   status,
// }) =>
//   <div className="card">
//     <form onSubmit={onSubmit}>
//       <h1>Profile Card</h1>
//       <label className="custom-file-upload fas">
//         <div className="img-wrap" >
//           <img for="photo-upload" src={src} />
//         </div>
//       </label>
//       <div className="name">{name}</div>
//       <div className="status">{status}</div>
//       <button type="submit" className="edit">Edit Profile </button>
//     </form>
//   </div>


// const Edit = ({
//   onSubmit,
//   children,
// }) =>
//   <div className="card">
//     <form onSubmit={onSubmit}>
//       <h1>Profile Card</h1>
//       {children}
//       <button type="submit" className="save">Save </button>
//     </form>
//   </div>

// class CardProfile extends React.Component {
//   state = {
//     file: '',
//     imagePreviewUrl: 'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
//     name: '',
//     status: '',
//     active: 'edit'
//   }



//   render() {
//     const { imagePreviewUrl,
//       name,
//       status,
//       active } = this.state;
//     return (
//       <div>
//         {(active === 'edit') ? (
//           <Edit onSubmit={this.handleSubmit}>
//             <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl} />
//             <Name onChange={this.editName} value={name} />
//             <Status onChange={this.editStatus} value={status} />
//           </Edit>
//         ) : (
//             <Profile
//               onSubmit={this.handleSubmit}
//               src={imagePreviewUrl}
//               name={name}
//               status={status} />)}

//       </div>
//     )
//   }
// }
