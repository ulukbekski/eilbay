import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
// import { BiPlus } from "react-icons/bi";
import CategorySelect from "@/components/UI/Category";
import { Accept } from "react-dropzone";

interface Props {
  maxFiles: number;
}

const acceptedFileTypes: Accept = {
  "image/png": ["png"],
  "image/jpeg": ["jpeg", "jpg"],
  "image/gif": ["gif"],
};

const ImageWrapper = ({ file }: { file: File }) => {
  const imageUrl = URL.createObjectURL(file);
  return (
    <Box
      sx={{
        width: 125,
        height: 125,
        borderRadius: 3,
        overflow: "hidden",
      }}
    >
      <img
        src={imageUrl}
        alt={file.name}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </Box>
  );
};

const Add: React.FC<Props> = ({ maxFiles = 10 }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFiles(acceptedFiles);
    },
    [setFiles]
  );

  const onCancel = () => {
    setFiles([]);
    setUploading(false);
  };

  const onSubmit = async () => {
    setUploading(true);
    try {
      // отправляем файлы на сервер
     ////// // await uploadFiles(files);
      // очищаем список файлов
      setFiles([]);
    } catch (error) {
      console.error(error);
    }
    setUploading(false);
  };

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
  useDropzone({
    onDrop,
    accept: {
      'image/png': ['.png'],
      'image/jpg': ['.jpg'],
      'image/jpeg': ['.jpeg'],
      'text/html': ['.html', '.htm'],
    },
  });

  return (
    <Box sx={{ maxWidth: 435, margin: "auto" }}>
      <Typography variant="h6" color="black" sx={{ mb: 1 }}>
        Фотографии ({files.length}/{maxFiles})
      </Typography>
      <Box
        {...getRootProps()}
        sx={{
          border: "2px dashed grey",
          borderRadius: "10px",
          padding: "20px",
          textAlign: "center",
          cursor: "pointer",
          color: "black"
        }}
      >
        <input {...getInputProps()} />
        {isDragActive && !isDragReject ? (
          <p>Перетащите файл сюда</p>
        ) : (
          <p>
            Перетащите изображение сюда или нажмите, чтобы выбрать файл
          </p>
        )}
        {isDragReject && <p>Файл не является изображением</p>}
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", mt: 2  }}>
        {files.map((file) => (
          <ImageWrapper key={file.name} file={file} />
        ))}
      </Box>
      <Box sx={{  mt: 2}}>

        <CategorySelect 
        categories={[]} 
        selectedCategory={""} 
        onCategoryChange={function (category: string): void {
          throw new Error("Function not implemented.");
        } } />

        <TextField
          label="Название"
          variant="outlined"
          fullWidth
          margin="dense"
        />
         <TextField
          name="description"
          label="Описание"
          multiline
          rows={4}
          fullWidth
          margin="normal"
          // value={formData.description}
          // onChange={handleChange}
        />
        <TextField
          label="Цена"
          variant="outlined"
          fullWidth
          margin="dense"
          type="number"
        />

      </Box>
      <Box sx={{ mt: 2 }}>
        {uploading ? (
          <CircularProgress />
        ) : (
          <>
            <Button
              variant="contained"
              color="primary"
              onClick={onSubmit}
              disabled={files.length === 0}
              sx={{ mr: 1 }}
            >
              Загрузить
            </Button>
            <Button variant="outlined" onClick={onCancel}>
              Отмена
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Add;


