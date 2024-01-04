
export const Cards_Comp = (props) => {
    return(

        <div className='w-[80%] mx-auto md:flex space-y-4 gap-10 transition-all'>
            <div className='md:w-1/2 w-full hover:scale-105'>
                <img src={props.img1} alt="" />
                <div className='flex flex-col text-gray-500 space-y-1'>
                    <h1>Chair</h1>
                    <h1>Golden Easy Spot Chair.</h1>
                    <p className='space-x-1 text-black'>$210.00</p>
                </div>
            </div>
            <div className='md:w-1/2 w-full hover:scale-105'>
                <img src={props.img2} alt="" />
                <div className='flex flex-col text-gray-500 space-y-1'>
                    <h1>Chair</h1>
                    <h1>Golden Easy Spot Chair.</h1>
                    <div className='flex space-x-2'>
                    <p className='space-x-1 text-black'>$210.00</p>
                    <s className='space-x-1 text-black'>$230.00</s>
                    </div>
                </div>
            </div>
            <div className='md:w-1/2 w-full hover:scale-105'>
                <img src={props.img3} alt="" />
                <div className='flex flex-col text-gray-500 space-y-1'>
                    <h1>Chair</h1>
                    <h1>Golden Easy Spot Chair.</h1>
                    <p className='space-x-1 text-black'>$250.00</p>
                    
                </div>
            </div>
            <div className='md:w-1/2 w-full hover:scale-105'>
                <img src={props.img4} alt="" />
                <div className='flex flex-col text-gray-500 space-y-1'>
                    <h1>Chair</h1>
                    <h1>Golden Easy Spot Chair.</h1>
                    <div className='flex space-x-2'>
                    <p className='space-x-1 text-black'>$320.00</p>
                    <s className='space-x-1 text-black'>$120.00</s>
                    </div>
                </div>
            </div>
        </div>
    )
}