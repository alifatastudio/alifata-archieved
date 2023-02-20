import { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { FireStorage } from '@library/firebase';
import { useAuth } from "@library/AuthContext";
import styles from '@styles/Uploader.module.css';
import ProgressBar from "./Progressbar";

export default function Uploader(){
 const { user } = useAuth();
 const [file, setFile] = useState('');
 const [uploading, setUploading] =useState(false);
 const [progress, setProgress] = useState(0);
 const [downloadURL, setDownloadURL] = useState(null);

 // Create Firebase Upload Task
 const uploadFile = () => {
  if(!file) {
   alert('Please choose a file first! 😡');
   return;
  } 
  const extension = file.type.split('/')[1];

  // Make references to the storage bucket location
  const storageRef = ref(FireStorage, `${user.uid}/${Date.now()}.${extension}`);
  setUploading(true);

  // Start the upload
  const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on(
   'state_changed',
   (snapshot) => {
    const percent = Math.round(
     (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    );

    // update progress
    setProgress(percent);
   },
   (err) => {
    alert('Sorry upload fail 😓');
    // console.log(err);
   },
   () => {
    setUploading(false);
    setProgress(0);
    // download url
    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
     setDownloadURL(url);
    })
   }
  )
 }

 // Handle input file change
 const handleChange = (event) => {
  setFile(Array.from(event.target.files)[0]);
 }

 // Handle onSubmit 
 const handleSubmit = () => {
  uploadFile();
 }

 return (
  <div className={styles['uploader']}>
   <div>
    <h3>Upload File Kamu 🙂</h3>
    {uploading ? 
     <ProgressBar progress={progress}/>:
     <>
      <input
       type="file"
       onChange={handleChange}
      />
      <button type="submit" onClick={handleSubmit}>
       UPLOAD
      </button>
     </>
    }
   </div>
  </div>
 );
}