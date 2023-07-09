function Info({title, text}) {    
    return(
        <div>
            <h3 className='info__title'>{title}</h3>
            <p className='info__para'>{text}</p>
        </div>
    )
}

export default Info;