import React from 'react';
import './States.css';


const States = () => {
  return (
    <>
        <section class="w3l-stats-section py-5" id="stats">
    <div class="container py-lg-5 py-md-4 py-2 HomePageStats">
        <div class="w3l-stats-inner-inf py-lg-4">
            <div class="row stats-con text-center justify-content-center">                
                <div class="col-lg-3 col-6 stats_info counter_grid">
                    <p class="counter"> 1500 </p>
                    <h3>Finished Projects</h3>
                </div>
                
                <div class="col-lg-3 col-6 stats_info counter_grid">
                    <p class="counter"> 2500 </p>
                    <h3>Working Hours</h3>
                </div>
                
                <div class="col-lg-3 col-6 stats_info counter_grid mt-lg-0 mt-sm-5 mt-5">
                    <p class="counter"> 1280 </p>
                    <h3>Online Support</h3>
                </div>
                
                <div class="col-lg-3 col-6 stats_info counter_grid mt-lg-0 mt-sm-5 mt-5">
                    <p class="counter"> 3020 </p>
                    <h3>Happy Customers</h3>
                </div>
                
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default States