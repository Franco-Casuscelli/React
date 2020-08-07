import React from 'react';
import './App.css';

function About() {

  return (
    <React.Fragment>
        <div className="container-fluid" id='base'>
          <div className='row'>
            <div className='col-1'>

            </div>
            <div className='col-10' id="text">
              <div className='row'>
                <div className='col-6'>
                    <img id='fotuli' src="/img/story.jpg" />
                </div>
                <div className='col-6' id='parrafo'>
                    <p>
                      We wanted to start a project in which we could enjoy one of our passions which is fashion, but after knowing the impact it has on nature, on the workers and on ourselves, we decided to look for an alternative that would fit our way of living and to feel that respect for the environment, respect for the rights of workers and respect for the women who wear our clothes were essential.
                      Thus, in 2012, COCO was born, a sustainable fashion firm with which we managed to unite our passion for fashion with our philosophy of life. Ecological and sustainable fabrics and local clothing in decent conditions make us proud to have started this path and in which we have not reached the goals that we have set ourselves.
                      We want to bring sustainable fashion closer to all corners of our country and why not, outside of it too. For that, we continue working to improve day by day and always seek greater sustainability.
                    </p>
                </div>
              </div>
              
            </div>
            <div className='col-1'>

            </div>

          </div>
        
        </div>
    </React.Fragment>
    
  );
}

export default About;