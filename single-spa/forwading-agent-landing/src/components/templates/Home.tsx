import React from "react";

import Header from "@Organisms/Header";
import Footer from "@Organisms/Footer";
import Banner from "@Organisms/Banner";
import FindMe from "@Organisms/FindMe";
import ThemeProvider from "@Styles/ThemeProvider";

const Home: React.FC = () => {
  return (
    <ThemeProvider>
      <Header />
      <Banner />
      <FindMe />
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
