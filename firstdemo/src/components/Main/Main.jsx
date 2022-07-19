import React from "react";
import "./main.css"
import Yazimg from "../../images/download.jfif"


const Mains =[
    {
        id: 1,
        images: "https://ilkxeber.az/storage/news/ceb45dc1d28c8df7be93ccd87242a994.jpg",
        name: "Yaz fəsli",
        button: "Keçid et",
    },
    {
        id: 2,
        images: "https://oakcreekatl.com/wp-content/uploads/2022/06/360_F_266109081_22a0UNlYqLGh3vin77zsPlpINnHC6Bgy-1.jpg",
        name: "Yay fəsli",
        button: "Keçid et",
    },
    {
        id: 3,
        images: "https://azertag.az/files/galleryphoto/2017/3/1000x669/1506112068601477472_1000x669.jpg",
        name: "Payız fəsli",
        button: "Keçid et",
    },
    {
        id: 4,
        images: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/first-day-of-winter-solstice-2021-1638278570.jpg?crop=1.00xw:0.803xh;0.00160xw,0.197xh&resize=1200:*",
        name: "Qış fəsli",
        button: "Keçid et",
    },
    {
        id: 1,
        images: "https://ilkxeber.az/storage/news/ceb45dc1d28c8df7be93ccd87242a994.jpg",
        name: "Yaz fəsli",
        button: "Keçid et",
    },
    {
        id: 2,
        images: "https://oakcreekatl.com/wp-content/uploads/2022/06/360_F_266109081_22a0UNlYqLGh3vin77zsPlpINnHC6Bgy-1.jpg",
        name: "Yay fəsli",
        button: "Keçid et",
    },
    {
        id: 3,
        images: "https://azertag.az/files/galleryphoto/2017/3/1000x669/1506112068601477472_1000x669.jpg",
        name: "Payız fəsli",
        button: "Keçid et",
    },
    {
        id: 4,
        images: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/first-day-of-winter-solstice-2021-1638278570.jpg?crop=1.00xw:0.803xh;0.00160xw,0.197xh&resize=1200:*",
        name: "Qış fəsli",
        button: "Keçid et",
    },

    {
        id: 1,
        images: "https://ilkxeber.az/storage/news/ceb45dc1d28c8df7be93ccd87242a994.jpg",
        name: "Yaz fəsli",
        button: "Keçid et",
    },
    {
        id: 2,
        images: "https://oakcreekatl.com/wp-content/uploads/2022/06/360_F_266109081_22a0UNlYqLGh3vin77zsPlpINnHC6Bgy-1.jpg",
        name: "Yay fəsli",
        button: "Keçid et",
    },
    {
        id: 3,
        images: "https://azertag.az/files/galleryphoto/2017/3/1000x669/1506112068601477472_1000x669.jpg",
        name: "Payız fəsli",
        button: "Keçid et",
    },
    {
        id: 4,
        images: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/first-day-of-winter-solstice-2021-1638278570.jpg?crop=1.00xw:0.803xh;0.00160xw,0.197xh&resize=1200:*",
        name: "Qış fəsli",
        button: "Keçid et",
    },
    {
        id: 1,
        images: "https://ilkxeber.az/storage/news/ceb45dc1d28c8df7be93ccd87242a994.jpg",
        name: "Yaz fəsli",
        button: "Keçid et",
    },
    {
        id: 2,
        images: "https://oakcreekatl.com/wp-content/uploads/2022/06/360_F_266109081_22a0UNlYqLGh3vin77zsPlpINnHC6Bgy-1.jpg",
        name: "Yay fəsli",
        button: "Keçid et",
    },
    {
        id: 3,
        images: "https://azertag.az/files/galleryphoto/2017/3/1000x669/1506112068601477472_1000x669.jpg",
        name: "Payız fəsli",
        button: "Keçid et",
    },
    {
        id: 4,
        images: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/first-day-of-winter-solstice-2021-1638278570.jpg?crop=1.00xw:0.803xh;0.00160xw,0.197xh&resize=1200:*",
        name: "Qış fəsli",
        button: "Keçid et",
    },

    {
        id: 1,
        images: "https://ilkxeber.az/storage/news/ceb45dc1d28c8df7be93ccd87242a994.jpg",
        name: "Yaz fəsli",
        button: "Keçid et",
    },
    {
        id: 2,
        images: "https://oakcreekatl.com/wp-content/uploads/2022/06/360_F_266109081_22a0UNlYqLGh3vin77zsPlpINnHC6Bgy-1.jpg",
        name: "Yay fəsli",
        button: "Keçid et",
    },
    {
        id: 3,
        images: "https://azertag.az/files/galleryphoto/2017/3/1000x669/1506112068601477472_1000x669.jpg",
        name: "Payız fəsli",
        button: "Keçid et",
    },
    {
        id: 4,
        images: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/first-day-of-winter-solstice-2021-1638278570.jpg?crop=1.00xw:0.803xh;0.00160xw,0.197xh&resize=1200:*",
        name: "Qış fəsli",
        button: "Keçid et",
    },
  
]
const Main =()=>{
    var size= 15;
    return(
        <div>
{
    <section id="Fesil">
            <div className="container mt-5">
                <div className="row">
                  {
                  Mains ?(
                    Mains.slice(0,15).map((mapi)=>(
                        <div className="col-lg-4 mt-4">
                  <div className="cards">
                    <div className="fesil_img">
                        <img src={mapi.images}alt="{mapi.name}" />
                    </div>
                    <div>
                        <p className="name">{mapi.name}</p>
                        <button>{mapi.button}</button>
    
                    </div>
                  </div>
                  </div>
                    ))
                  )
                 :(
                    <img style={{width:'300px',height:'300px',}} src="https://i.gifer.com/7YUP.gif" alt="" />
                )
                }
                </div>
            </div>
    </section>
}
        </div>
    )
}

export default Main