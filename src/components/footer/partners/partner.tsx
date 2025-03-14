import AOS from 'aos';
import 'aos/dist/aos.css';



interface Partnerprops{
    lienIm: string;
}



 const Partner:React.FC<Partnerprops>=({lienIm})=>{
AOS.init();
return(

        <>

            <div className="m-4 flex items-center" style={{width:"100px"}} data-aos="flip-right">
                <img src={lienIm} alt="" />
            </div>

        </>

)


 }

 export default Partner;