import image from '../img/image-qr-code.png';

function Card () {
    return (
        <div>
            <div className='card'>
                <div className='img-container'>
                    <img src={image} alt='background card'/>
                </div>
                <h2 className='card-description'>
                    Improve your front end skills by building projects
                </h2>
                <p className='description'>
                    Scan the QR code to visit Front End <br/>Mentor and take your coding skills <br/>to the next level
                </p>

            </div>
        </div>
    );
}

export default Card;