import React, { useEffect, useState, Suspense } from "react";
import BizMsM from "./static/images/bizmsm.png";

const Welcome = () => {
  // console.log('process.env.VERSION', process.env.VERSION);
  // console.log('process.env.PLATFORM', process.env.PLATFORM);
  // console.log('process.env.NODE_ENV', process.env.NODE_ENV);

  const [CaptainKirkBio, setCaptainKirkBio] = useState({});

  const onGetKirkBio = async () => {
    try {
      const URL = 'http://stapi.co/api/v1/rest/character/search';
      const result = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: {
          title: 'James T. Kirk',
          name: 'James T. Kirk'
        }
      });
      const resultJSON = await result.json();
      const character = resultJSON.characters[0];
      setCaptainKirkBio(character);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    onGetKirkBio();
  }, []);

  const Foo = React.lazy(() => import('./Foo'));
  return (
    <div>
      <img src={BizMsM} />
      <p>
        We are a most promising species, Mr. Spock, as predators go. Did you know that? I
        frequently have my doubts. I dont. Not any more. And maybe in a thousand years or so, we
        will be able to prove it.
      </p>
      <p>- Captain Kirk</p>
      <section>
        {Object.values(CaptainKirkBio).length === 0 ? (
          <p>Loading User Information</p>
        ) : (
          <p style={{ wordBreak: 'break-all' }}>{JSON.stringify(CaptainKirkBio)}</p>
        )}
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        {<Foo />}
      </Suspense>
    </div>
  );
};

export default Welcome;
