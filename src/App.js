import logo from './logo.svg';
import React from "react";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/imageGrid";


const App=() => {
  return (
    <div>
      <Title />
      <UploadForm />
      <ImageGrid/>
    </div>
  );
}

export default App;
