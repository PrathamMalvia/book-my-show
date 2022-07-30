import React from 'react'
import Slider from 'react-slick'

// Component
import Poster from '../Poster/poster.component'

const Premier = () => {
    const settings = {
        infinity: false,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        InitialSlide: 0,
        responsive: [
            {
                breakpoints: 1024,
                settings: {
                    infinity: false,
                    slidesToShow: 5,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoints: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    InitialSlide: 1
                }
            },
            {
                breakpoints: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }

        ]
    }

    const PremierImages = [
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00310790-fzwabxfqqx-portrait.jpg",
            alt: "not found",
            title: "Ek Villan",
            subtitle: "Action"
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzQlICA4MDcgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00330615-kjdgglapka-portrait.jpg",
            alt: "not found",
            title: "Timepass",
            subtitle: "Drama"
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODclICAxNWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00128225-rjrxwrpkjp-portrait.jpg",
            alt: "not found",
            title: "Vikrant Rona",
            subtitle: "Adventure"
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTYlICA1NGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00094131-mkdsdrudql-portrait.jpg",
            alt: "not found",
            title: "Roketry",
            subtitle: "Biography"
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NjQlICA0Mmsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00075253-ccyjknqens-portrait.jpg",
            alt: "not found",
            title: "Shamshera",
            subtitle: "Action"
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzklICA3M2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00302403-jmbsnyjdek-portrait.jpg",
            alt: "not found",
            title: "Thor: Love and Thunder",
            subtitle: "Action"
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODYlICAxMGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00122133-jzmgvptxpx-portrait.jpg",
            alt: "not found",
            title: "Minions: The Rise of Gru",
            subtitle: "Adventure"
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NjclICA4ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00312747-anxfttpbwj-portrait.jpg",
            alt: "not found",
            title: "Ramrao On Duty",
            subtitle: "Action"
        },
    ]

    return (
        <>
            <Slider {...settings}>
                {PremierImages.map((image) => (
                    <Poster {...image} />
                ))}

            </Slider>
        </>


    )
}

export default Premier