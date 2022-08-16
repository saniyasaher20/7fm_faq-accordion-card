import { useState } from 'react';
import { questions } from './questions';
import mobile from './images/illustration-woman-online-mobile.svg';
import desktop from './images/illustration-woman-online-desktop.svg';
import orangeBox from './images/illustration-box-desktop.svg';
import SingleQuestion from './SingleQuestion';

function App() {
  const [quests] = useState(questions)
  return (
    <>
      <section className="container-fluid">
        <div className="row">
          <div className="col">

            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-6 col-img">
                  <picture className='women-img'>
                    <source className='img-fluid' media="(max-width:767px)" srcSet={mobile} alt="Women Illustrator Online" />
                    <img className='img-fluid' src={desktop} alt="Women illustration Online" />
                  </picture>
                  <img src={orangeBox} alt="Orange Box" />
                </div>
                <div className="col-md-6 col-body">
                  <div className="card-body">
                    <div className="card-title">
                      FAQ
                    </div>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                      {quests.map(
                        // eslint-disable-next-line
                        (quest, index) => (
                          <SingleQuestion
                            key={index}
                            {...quest}
                          />
                        )
                      )}
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default App;
