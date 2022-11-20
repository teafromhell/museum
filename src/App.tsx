import React from 'react';
import CarouselWrapper from './components/Carousel/CarouselWrapper';
import Layout from './components/Layout/Layout';
import LayoutFeedMain from './components/Layout/LayoutFeedMain'

function App() {
  return (
    <div>
      <Layout>
        <LayoutFeedMain />
        <CarouselWrapper />
      </Layout>
    </div>
  );
}

export default App;
