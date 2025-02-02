import { Button, Skeleton } from "@mui/material";
import "./Showcase.css";

const Showcase = () => {
  return (
    <div className="showcase">
      <div className="showcase__content">
        <h1>Discover Your Style at Tiara Boutique</h1>
        <p>
          Welcome to Tiara Boutique, your ultimate destination for fashionable
          ladies' and kids' apparel, along with premium beauty products. Explore
          our curated selection and elevate your wardrobe today!
        </p>
        <div className="showcase__content-btns">
          <Button sx={{width:80, height:50,color:'white', backgroundColor:'black'}}>Shop</Button>
          <Button sx={{width:150, height:50, color:'white', backgroundColor:'transparent', border:'1px solid white'}}>Learn More</Button>
        </div>
      </div>
      <div className="showcase__image">
        <Skeleton variant="image"  height={600} sx={{ backgroundColor: 'grey' }} />
      </div>
    </div>
  );
};

export default Showcase;
