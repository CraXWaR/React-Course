'use client'

import classes from './image-picker.module.css';

import {useRef, useState} from "react";
import Image from "next/image";

export default function ImagePicker({label, name}) {
    const [pickedImage, setPickedImage] = useState()
    const imageInput = useRef();

    function handleClick() {
        imageInput.current.click();
    }

    function handlePickedImage(e) {
        const file = e.target.files[0];

        if (!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };

        fileReader.readAsDataURL(file);
    }

    return (<>
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && (<p>No image picked yet.</p>)}
                    {pickedImage && (<Image src={pickedImage} alt="Selected image" fill/>)}
                </div>
                <input className={classes.input} type='file' id={name} accept='image/*' name={name} ref={imageInput}
                       onChange={handlePickedImage} required/>
                <button className={classes.button} type="button" onClick={handleClick}>
                    Pick an Image
                </button>
            </div>
        </div>
    </>);
}