import Info from './Info.jsx';

function HtmlInfo() {
    return(
        <div className="infoPage">
            <div className='infoPoint'>
            <Info 
            title="This is the header"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil architecto ipsum maxime laborum quasi, doloremque quidem odio doloribus ex, facilis sit, magnam repudiandae nostrum eos maiores? Dolorem reprehenderit similique architecto?"
            />

            </div>

            <div className='infoPoint'>               
            <Info 
            title="This is the header"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil architecto ipsum maxime laborum quasi, doloremque quidem odio doloribus ex, facilis sit, magnam repudiandae nostrum eos maiores? Dolorem reprehenderit similique architecto?"
            />
            </div>
            <div className='infoPoint'>               
            <Info 
            title="This is the header"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil architecto ipsum maxime laborum quasi, doloremque quidem odio doloribus ex, facilis sit, magnam repudiandae nostrum eos maiores? Dolorem reprehenderit similique architecto?"
            />
            </div>

        </div>
    );
}

export default HtmlInfo;