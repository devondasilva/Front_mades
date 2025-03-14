
// import React, { useState } from "react";
// import Cards from "./ChildComponent";
// import { Card, CardContent } from "../ui/card"
// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
//   } from "../ui/carousel"

//   import Im1 from "../../assets/Images/beachtennis/freecompress-IMG_4482 (1).jpg"
  
//   import Autoplay from 'embla-carousel-autoplay';

// const ParentComponent:React.FC = () => {
// const [show, setShow] = useState<boolean>(false);

// const plugin = React.useRef(
//     Autoplay({ delay: 2000, stopOnInteraction: true })
//   )
//  const handleClick = () => {
//     setShow(!show);
//  }
//     return (
//         <>
//         <div >
//             <div className="container mx-auto flex justify-center">
//                 {
//                     show &&
//                      <h1 > Salut a tous</h1>
//                 }
//             <Cards onCliked={handleClick} onCancel={()=>{setShow(false)}}/>
//             </div>
//         </div>
//         <div className=" mx-auto flex justify-center">
//         <Carousel
//         opts={{
//             align: "start",
//         }}
//         plugins={[plugin.current]}
//         onMouseEnter={plugin.current.stop}
//         onMouseLeave={plugin.current.reset}
//         className="w-full max-w-sm"
//         >
//         <CarouselContent>
//             {Array.from({ length: 5 }).map((_, index) => (
//             <CarouselItem key={index} className=" lg:basis-1/3">
//                 <div className="p-1">
//                 <CarouselItem className="md:basis-1/2 lg:basis-1/3">
//                     <Cards onCliked={handleClick} onCancel={()=>{setShow(false)}}/>
//                 </CarouselItem>
                
//                 </div>
//             </CarouselItem>
//             ))}
//         </CarouselContent>
//         <CarouselPrevious />
//         <CarouselNext />
//     </Carousel>
//         </div>
//         </>
//     )
// }

// export default ParentComponent;

// import { SafeAreaView, Text } from 'react-native-web';
// import { StyleSheet } from 'react-native';
// import ImageSliderBanner from './ChildComponent';
// import Im1 from "../../assets/Images/beachtennis/freecompress-IMG_4482 (1).jpg";
// import Im2 from "../../assets/Images/beachtennis/freecompress-IMG_4494 (2).jpg";
// import Im3 from "../../assets/Images/beachtennis/freecompress-IMG_4508 (1).jpg";


// const Card:React.FC = () => {
//   const images = [
//     Im1,
//     Im2,
//     Im3,
//   ];

//   return (
//     <>
//         <div>
//             Salut
//         </div>
//         <SafeAreaView style={styles.container}>
//             <ImageSliderBanner images={images} />
//             <Text>SafeAreaView et StyleSheet fonctionnent !</Text>
//         </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ggeuu5',
//     height:200,
//   },
// });

// export default Card;
