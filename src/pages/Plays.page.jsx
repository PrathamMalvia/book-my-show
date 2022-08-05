import React from 'react'

// Component
import Poster from '../components/Poster/poster.component';
import PlaysFilters from '../components/PlaysFilters/PlaysFilters.component';

const PlaysPage = () => {
    return (
        <>
            <div className='container mx-auto px-4 lg:w-4/5' >
                <div className='w-full lg:flex flex-row-reverse gap-5'>
                    <div className='lg:w-3/4'>
                        <h2 className='text-2xl font-bold mb-4'>Plays in Mumbai</h2>
                        <div className='flex flex-wrap'>
                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3'>
                                <Poster src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA2IEF1Zw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00335092-tkrsvhqznm-portrait.jpg"
                                    title="Mahabharat"
                                    subtitle="Hindi -> &#8377;480"
                                />
                            </div>
                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3'>
                                <Poster src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA2IEF1Zw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00335092-tkrsvhqznm-portrait.jpg"
                                    title="Mahabharat"
                                    subtitle="Hindi -> &#8377;480"
                                />
                            </div>
                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3'>
                                <Poster src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA2IEF1Zw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00335092-tkrsvhqznm-portrait.jpg"
                                    title="Mahabharat"
                                    subtitle="Hindi -> &#8377;480"
                                />
                            </div>
                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3'>
                                <Poster src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA2IEF1Zw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00335092-tkrsvhqznm-portrait.jpg"
                                    title="Mahabharat"
                                    subtitle="Hindi -> &#8377;480"
                                />
                            </div>
                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3'>
                                <Poster src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA2IEF1Zw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00335092-tkrsvhqznm-portrait.jpg"
                                    title="Mahabharat"
                                    subtitle="Hindi -> &#8377;480"
                                />
                            </div>


                        </div>
                    </div>

                    <div className='lg:w-1/5'>
                        <h2 className='text-2xl font-bold mb-4'>Filters</h2>
                        <div>
                            <PlaysFilters
                                title="Date"
                                tags={["Today", "Tomorrow", "This weekend"]}
                            />
                            <PlaysFilters
                                title="Language"
                                tags={["English", "Hindi", "Marathi"]}
                            />
                            <PlaysFilters
                                title="Categories"
                                tags={["E Sports", "Rugby", "Running", "Online Games", "Football", "Kho Kho"]}
                            />
                            <PlaysFilters
                                title="More Filters"
                                tags={["Kids Allowed", "Outdoor Events", "Online Streaming"]}
                            />
                            <PlaysFilters
                                title="Price"
                                tags={["Free", "0-500", "501-2000", "Above 2000"]}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PlaysPage;