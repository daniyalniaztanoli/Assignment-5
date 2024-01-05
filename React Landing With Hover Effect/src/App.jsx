import "./App.css"
import { Button_Comp } from "./Components/Button_Comp";
import { Navbar_Comp } from "./Components/Navbar_Comp";
import { Item_Img_Comp } from "./Components/Item_Img_Comp";
import { Item_Text_Comp } from "./Components/Item_Text_Comp";
import { Banner_Comp } from "./Components/Banner_Comp";
import { Sale_Comp } from "./Components/Sale_Comp";
import { Cards_Comp } from "./Components/Cards_Comp";
import { Sale_Two_Comp } from "./Components/Sale_Two_Comp";
import { Sale_Img_Comp } from "./Components/Sale_Img_Comp";
import Card_Img1 from '../public/images/pro-hm1-1.jpg'
import Card_Img2 from '../public/images/pro-hm1-2.jpg'
import Card_Img3 from '../public/images/pro-hm1-3.jpg'
import Card_Img4 from '../public/images/pro-hm1-4.jpg'
import Card_Img5 from '../public/images/pro-hm1-5.jpg'
import Card_Img6 from '../public/images/pro-hm1-6.jpg'
import Card_Img7 from '../public/images/pro-hm1-7.jpg'
import Card_Img8 from '../public/images/pro-hm1-8.jpg'
import { Footer_Comp } from "./Components/Footer_Comp";
import Sub_Footer_Comp from "./Components/Sub_Footer_Comp";

const App = () => {
  return (
    <div className="">
    <div className="bg_img">
      <div className="mx-2">
      <Navbar_Comp/>
      </div>
{/* Hero */}
      <div id="hero" className="lg:w-full lg:mx-auto md:flex md:flex-row flex flex-col md:justify-center pb-10">
        <div className="md:w-1/2 mx-auto">
      <Item_Img_Comp width='600'/>
        </div>
        <div className="md:w-1/2 my-auto mx-auto text-center">
      <Item_Text_Comp/>
        </div>
    </div>
    </div>
    {/* Sale Banner */}
    <div className="w-[80%] mx-auto my-5 md:h-48">
      <Banner_Comp/>
    </div>
   <div className="">
    <Sale_Comp text='Hot Sell' para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text'"/>
   </div>
   {/* Cards 1/4 */}
   <div className="my-10">
   <Cards_Comp img1={Card_Img1} img2={Card_Img2} img3={Card_Img3} img4={Card_Img4}/>
   </div>
   {/* Sale Banner 2 */}
   <div className="md:w-[80%] mx-auto flex md:flex-row flex-col ">
    <div className="md:w-1/2 lg:w-1/2 md:mx-0 mx-10">
    <Sale_Img_Comp/>
    </div>
    <div className="md:w-1/2 mx-10 text-center md:my-0 my-10">
    <Sale_Two_Comp/>
    </div>
   </div>
   <div>
   <Sale_Comp text='All Products' para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"/>
   </div>
   <div className="my-10">
   <Cards_Comp img1={Card_Img1} img2={Card_Img2} img3={Card_Img3} img4={Card_Img4}/>
   </div>
   <div className="my-10">
   <Cards_Comp img1={Card_Img5} img2={Card_Img6} img3={Card_Img7} img4={Card_Img8}/>
   </div>
   <div className="footer md:p-10 bg-[#F8F8F8]">
   <div className="w-[80%] mx-auto">
   <Footer_Comp/>
   </div>
    </div>
    <div className="">
      <Sub_Footer_Comp/>
    </div>
    </div>
  )
}

export default App;
