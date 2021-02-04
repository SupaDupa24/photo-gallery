import { useState, useEffect } from "react";
import { useCamera } from '@ionic/react-hooks/camera';
import { useFilesystem, base64FromPath } from '@ionic/react-hooks/filesystem';
import { useStorage } from '@ionic/react-hooks/storage';
import { isPlatform } from '@ionic/react';
import { CameraResultType, CameraSource, CameraPhoto, Capacitor, FilesystemDirectory } from "@capacitor/core";

const { get, set } = useStorage();

const PHOTO_STORAGE = "photos";
export function usePhotoGallery() {

    const { getPhoto } = useCamera();
    const [photos, setPhotos] = useState<Photo[]>([]);
  
    const takePhoto = async () => {
      const cameraPhoto = await getPhoto({
        const fileName = new Date().getTime() + '.jpeg';
        const newPhotos = [{
        filepath: fileName,
        webviewPath: cameraPhoto.webPath
        }, ...photos];
        setPhotos(newPhotos)
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100
        set(PHOTO_STORAGE, JSON.stringify(newPhotos));
      });
    };
  
    return {
        photos,
      takePhoto
    };
  }

  export interface Photo {
    filepath: string;
    webviewPath?: string;
  }