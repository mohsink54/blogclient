import { IKContext, IKUpload } from 'imagekitio-react';
import React, { useRef } from 'react'
import { toast } from 'react-toastify';
import config from '../config';

const authenticator = async ()=>{
    try {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}/posts/upload-auth`
        );

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(
                `Request failed with status ${response.status}: ${errorText}`
            );
        }

        const data = await response.json();
        const {signature, expire, token } = data;
        return {signature, expire, token};

    } catch (error) {
        throw new Error(
            `Authentication failed: ${error.message}`
        );
    }
}

const Upload = ({children, type, setProgress, setData}) => {
    const ref = useRef(null);

    const onError = (err)=>{
        console.log(err);
        toast.error(`${type} upload failed!`);
    }
    const onSuccess = (res)=>{
        console.log(res);
        setData(res);
    };

    const onUplaodProgress = (progress)=>{
        console.log(progress);
        setProgress(Math.round((progress.loaded / progress.total) * 100));
    };
  return (
    <IKContext
        publicKey={config.env.imageKit.publicKey}
        urlEndpoint={config.env.imageKit.urlEndpoint}
        authenticator={authenticator}
    >
        <IKUpload
            useUniqueFileName
            onError={onError}
            onSuccess={onSuccess}
            onUploadProgress={onUplaodProgress}
            className="hidden"
            ref={ref}
            accept={`${type}/*`}
        />
        <div className="cursor-pointer" onClick={()=> ref.current.click()}>
            {children}
        </div>
    </IKContext>
  );
};

export default Upload