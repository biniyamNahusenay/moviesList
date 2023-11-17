import "./header.scss"
import user from "../../Image/profi.png"
import  {Link}  from "react-router-dom"
const Header = () => {
  return (
    <div className="header">
       <div className="headerWrapper">
        <Link to ="/" className="Link"> 
          <h2 className="logo">MovieList</h2>
        </Link>
           <div className="profile">
              <img src={user} 
              alt="jdj" />
           </div>
        </div>       
    </div>
  )
}

export default Header
