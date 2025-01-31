import './Card.css'  

function Card () {
    return (

        <>
        
            <div className="card-container">

                <div className="card">

                    <img src="https://res.cloudinary.com/dwzmsvp7f/image/upload/f_auto,w_400/c_crop%2Cg_custom%2Fv1737702242%2Fdywdsle8anqupeozowov.jpg" alt="" />

                    <div className="card-body">
                        <p id="full-match">IDFC FIRST Bank Series 1st ODI: India vs England, Nagpur</p>
                        <p id="match-details"><i className="fa-solid fa-calendar-alt"></i>| February 6 1:30 pm Onwards </p>
                        <p id="match-details"> <i className="fa-solid fa-location-dot"></i>Vidarbha Cricket Association Stadium, Nagpur</p>
                    </div>

                    <div className="match-info">

                        <div><h3>₹ 800</h3></div>
                        <div><h3>Know More</h3></div>


                    </div>

                </div>

                <div className="card">

                    <img src="https://res.cloudinary.com/dwzmsvp7f/image/upload/f_auto,w_220/c_crop%2Cg_custom%2Fv1737631621%2Fnkju6b1q1qc2dtl5glw1.jpg" alt="" />

                    <div className="card-body">
                        <p id="full-match">IDFC FIRST Bank Series 1st ODI: India vs England, Nagpur</p>
                        <p id="match-details"> <i className="fa-solid fa-calendar-alt"></i>
                        | February 6 1:30 pm Onwards </p>
                        <p id="match-details"><i className="fa-solid fa-location-dot"></i>Barabati Stadium, Cuttack</p>
                    </div>

                    <div className="match-info">

                        <div><h3>₹ 700</h3></div>
                        <div><h3>Know More</h3></div>


                    </div>

                </div>

                <div className="card">

                    <img src="https://res.cloudinary.com/dwzmsvp7f/image/upload/f_auto,w_400/c_crop%2Cg_custom%2Fv1737011871%2Fwoqheugbcimq195rqxxa.jpg" alt="" />

                    <div className="card-body">
                        <p id="full-match">IDFC FIRST Bank Series 1st ODI: India vs England, Nagpur</p>
                        <p id="match-details"> <i className="fa-solid fa-calendar-alt"></i>
                        | February 6 1:30 pm Onwards </p>
                        <p id="match-details"><i className="fa-solid fa-location-dot"></i>Wankhede Stadium, Mumbai</p>
                    </div>

                    <div className="match-info">

                        <div><h3>₹ 1000</h3></div>
                        <div><h3>Know More</h3></div>


                    </div>

                </div>

            </div>
        
        </>

    );
}

export default Card;