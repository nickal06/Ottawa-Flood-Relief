import "../pages/Home.css";

export function InfoSection({ title , text , image ,  className }){
  return (
      <div className = {className} >
        
        <div className="info-text-section-container">
          <h1 className="info-section-title"> 
            {title}
          </h1>

          <p className="info-section-text">
            {text}
          </p>
        </div>

        <div className="info-image-section-container">
          <img 
            className="info-section-image" 
            src={ image } 
            alt="placeholder">
          </img>
        </div>
      </div>
  )
}
