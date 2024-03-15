import axios from 'axios';
import { ChangeEvent, useState } from 'react';

const FileUploadSingle = () => {
    const [file, setFile] = useState<File>();

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };


    const handleUploadClick = () => {
        console.log(file?.type)
        console.log(file?.size)
        if (!file) {
            return;
        }
        const formData = new FormData();
        formData.append("image", file);
        
        axios.post('https://quydt.speak.vn/api/fileupload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }).then(response => console.log(response.data))
            .catch(error => console.log(error));
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />

            <div>{file && `${file.name} - ${file.type}`}</div>

            <button onClick={handleUploadClick}>Upload</button>
        </div>
    );
}

export default FileUploadSingle;